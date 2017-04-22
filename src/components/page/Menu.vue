<template>
  <div class="menu">
    <header v-bind:typelist="typelist" class="head">
		<a href="javascript:;" v-for="(item,index) in typelist" @click="getData(item.title,index)" :class="index==0 ? 'on':'' ">{{item.name}}</a>
    </header>

	<div v-for="(item,index) in imglist" class="cont">
		<img-bar v-bind:imglist="item"></img-bar>
		<div class="list">
			<a v-for="i in list[index]" href="javascript:;">{{i.SlideName}}</a>
		</div>
	</div>

	<div class="list">
		
		<dl v-for="item in contlist">
			<dt><img :src="item.Picture" alt=""> </dt>
			<dd>
				<h3>{{item.SlideName}}</h3>
				<p>{{item.Description}}</p>
			</dd>
		</dl>
	</div>

    <foot-bar></foot-bar>

  </div>
  </template>
<script>
import imgBar from '@/components/page/home/imgBar'
import footBar from '@/components/base/foot';

export default {
	porps:{
		title:{
			type:String,
			default:""
		}
	},
	data(){
		return{
			typelist:[
				{
					title:"cat",
					name:"分类"
				},
				{
					title:"brand",
					name:"品牌"
				}
			],
			imglist:[],
			list:[],
			contlist:[]
		}
	},
	created () {
      	this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list',{
          	Params:{
            	platform:"WAP"
        	},
        	jsonp:"_callback"
      	}).then(function(data){
      		var res=data.body.data;
  			this.imglist=[];
      		this.list=[];
      		for(var i=0;i<res.length;i=i+2){
      			this.imglist.push(res[i].Records)
      		}
      		for(var i=1;i<res.length;i=i+2){
      			this.list.push(res[i].Records)
      		}	      		
      	})
  	},
  	components:{
  		imgBar,
	  	footBar
  	},
  	methods:{
  		getData(title,index){
  			this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-'+title+'-list',{
	          	Params:{
	            	platform:"WAP"
	        	},
	        	jsonp:"_callback"
	      	}).then(function(data){
	      		var res=data.body.data;
      			this.imglist=[];
	      		this.contlist=[];
	      		this.list=[];

	      		if(title=="brand"){

					this.contlist=res[0].Records

	      		}else{
	      			
	      			for(var i=0;i<res.length;i=i+2){
		      			this.imglist.push(res[i].Records)
		      		}
		      		for(var i=1;i<res.length;i=i+2){
		      			this.list.push(res[i].Records)
		      		}
	      		}
	      		
	      	})

			var list = document.querySelectorAll('a');
         	for(let i=0;i<list.length;i++){
               	list[i].className = '';
            }
         	list[index].className="on";
         	
		}
  	}
}
</script>
<style lang="scss">
.menu{
	padding-bottom: 44px;
	.head{
		display: -webkit-box;
		-webkit-box-pack:center;
		a{
			display: block;
			color: #000;
			padding: 5px;
			margin: 5px 10px;
			font-size: 12px;
			&.on{
				border-bottom: #000 solid 2px;
			}
		}
	}
	.cont{
		padding: 10px 0;
		.list{
			a{
				padding: 6px 10px;
				display: inline-block;
				color: #000;
				border: #ddd solid 1px;
				margin-left: 15px;
				margin-top: 10px;
				font-size: 12px;
			}
		}
	}
	.list{
		width: 100%;
		dl{
			width: 33.33%;
			display: inline-block;
			dt{
				width: 100%;
				img{
					width: 100%;
				}
			}
			dd{
				h3{
					line-height: 24px;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    text-align: center;
				    font-size: 12px;
				}
				p{
					line-height: 20px;
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    text-align: center;
				    color: #999;
				    font-size: 10px;
				    padding: 0 10px;
				}
			}
		}
	}
}
	
		
</style>