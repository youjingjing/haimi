<template>
  <div class="home">
    <header-bar></header-bar>

    <div>

    	<nav-bar v-on:tab="tab"></nav-bar>
    	
    </div>
	
    <component v-bind:is="currentView" :index="pageIndex" :navId="navId"></component>

    <foot-bar></foot-bar>

  </div>
</template>

<script>
import headerBar from '@/components/base/head';
import navBar from "@/components/base/nav"
import tuijian from '@/components/page/home/tuijian'
import page from '@/components/page/home/page'

import footBar from '@/components/base/foot';

export default {
	data(){
		return{
			currentView:"tuijian",
			navId:"2",
			pageIndex:0
		}
	},
  	components:{
	  	headerBar,
	  	navBar,
	  	tuijian,
	  	page,
	  	footBar
  	},
  	methods:{
  		tab(index,navId){
  			this.pageIndex=index;
  			this.navId=navId;
  			if(index==0){
  				this.currentView="tuijian"
  			}else{
  				this.currentView="page"
  			}
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.home{
		background: #f8f8f8;
		padding-bottom:44px; 
	}
</style>
