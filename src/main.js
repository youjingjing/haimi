// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import swiper from 'vue-awesome-swiper'

Vue.use(vueResource)
Vue.use(Vuex)
Vue.use(swiper)
Vue.config.productionTip = false

/* eslint-disable no-new */

//vueX

const store = new Vuex.Store({
  state: {
    loadFlag: false,
    cardlist:[]
  },
  mutations: {
    changeLoadFlag (state,flag) {
        store.state.loadFlag=flag;
    },
    setCard (state,data) {
      store.state.cardlist=data;
    },
    addCard (state,data) {
      
      store.state.cardlist.push(data);
      window.localStorage["cardlist"]=JSON.stringify(store.state.cardlist);
     
    }
  },
  actions:{
    getCard (context) {

      var data=JSON.parse( window.localStorage['cardlist'] );
      if(data){
        context.commit('setCard',data)
      }
      
    }}

  })

Vue.http.interceptors.push((request, next) => {
		store.commit('changeLoadFlag',true)
	next((response) => {
        store.commit('changeLoadFlag',false)

		return response
	})
})


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch("getCard")
  }
})
