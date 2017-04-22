<template>
	<nav class="nav">
		<a v-for="(item,index) in navList" href="javascript:;" @click='getId(item.NavID,index)' :class="index==0 ? 'on':'' ">{{item.Title}}</a>
	</nav>
</template>
<script>

export default {
  	data () {
	    return {
	      	navList:[]
	    }
	},
	created () {
      	this.$http.jsonp('http://m.haimi.com/api/nav/list',{
          	Params:{
            	platform:"WAP"
        	},
        	jsonp:"_callback"
      	}).then(function(data){
      		// console.log(data)
          	this.navList=data.body.data;
      	})
  	},
  	methods:{
		getId (id,index){
         	var list = document.querySelectorAll('a');
         	for(let i=0;i<list.length;i++){
               	list[i].className = '';
            }
         	list[index+1].className="on";
        	this.$emit('tab',index,id)
    	}

  	}
}

</script>

<style lang="scss" scoped>
.nav{
	background: #fff;
	width:100%;
	height: 35px;
	display: -webkit-box;
	-webkit-box-align:center;
	border-bottom:solid 1px #e5e5e5;
	overflow: auto;
	position: static;
	top:44px;
	a{
		display: block;
		color: #000;
		font-size: 12px;
		padding: 7px;
		margin-bottom: 2px;
		&.on{
			border-bottom: #000 solid 2px;
		}
	}
}
</style>