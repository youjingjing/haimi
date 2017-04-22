<template>
  	<div class="tuijian">

    	<banner-bar v-bind:bannerlist="bannerlist"></banner-bar>

  		<gift-bar v-bind:giftlist="giftlist"></gift-bar>

  		<div v-for="item in daylist">

  			<day-bar v-bind:daylist="item"></day-bar>
  			
  		</div>
  		

  		<div class="brand">
			<h2>严选品牌</h2>
			<div style="padding-top:67%;">
				<router-link :to="{ name: 'details', params: { id: item.CastID!=''?item.CastID:0 }}" v-for="(item,index) in brandlist" :key="item.CastID">
					<img :src="item.Picture" alt="">
					<div></div>
				</router-link>
			</div>
		</div>
		<div class="recommend">
			<h2>推荐好物</h2>
			<div>
				<router-link :to='{ name: "details", params: { id: item.CastID!=""? item.CastID:"0" }}' v-for="item in recommend" :key="item.CastID">
					<img :src="item.Picture" alt="">
				</router-link>
			</div>
		</div>
		
		<div v-for="(item,index) in fash">
			<div class="fash" v-for="i in item">
				<img :src="i.Picture" alt="">
			</div>
			<brand-bar v-bind:fashion="fashion[index]"></brand-bar>
		</div>

		<show-bar></show-bar>
  	</div>
</template>

<script>

import bannerBar from '@/components/page/home/banner';
import giftBar from '@/components/page/home/gift';
import dayBar from "@/components/page/home/everyday";
import brandBar from "@/components/page/home/brand";
import showBar from "@/components/page/home/show";


export default {
	props:{
  		index:{
			type:Number,
			default:0
  		},
  		navId:{
			type:String,
			default:""
  		}
  	},
  	data () {
    	return {
     	 	bannerlist: [],
     	 	giftlist:[],
     	 	daylist:[],
     	 	brandlist:[],
     	 	recommend:[],
     	 	fashion:[],
     	 	fash:[]
    	}
  	},
  	created () {
      	this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
          	Params:{
            	platform:"WAP"
        	},
        	jsonp:"_callback"
      	}).then(function(data){
      		var res=data.body.data;

          	this.bannerlist=res[0].Records;
          	this.giftlist=res[1].Records;

          	this.daylist=[];
          	for(var i=2;i<=3;i++){
          		this.daylist.push(res[i].Records)
          	}

          	this.brandlist=res[4].Records;
          	this.recommend=res[5].Records;

          	this.fash=[];
          	this.fashion=[];
          	for(var i=6;i<res.length;i=i+2){
          		this.fash.push(res[i].Records)
          	}
          	for(var i=7;i<res.length;i=i+2){
          		this.fashion.push(res[i].Records)
          	}

          	// console.log(this.fashion)
      	})
  	},
  	components:{
  		bannerBar,
  		giftBar,
  		dayBar,
  		brandBar,
  		showBar
  	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang='scss'>
 .brand{
	width: 100%;
	background: #f9f9f9;
	margin-top: 10px;
	h2{
		background: #fff;
		text-align:center;
		line-height: 40px;
		font-size: 12px;
	}
	div{
		width: 100%;
		position: relative;
		a{
			display: inline-block;
			position: absolute;
			width: 50%;
			color: #000;
			img{
				width: 100%;
			}
		}
		:nth-last-child(3){	
			top:0;	
			left: 0;
		}
		:nth-last-child(2){
			bottom:0;
		}
		:last-child{
			top:0;
			right:0;
		}
	}
	
}
.recommend{
	width: 100%;
	margin-top: 10px;
	background: #f9f9f9;
	h2{
		background: #fff;
		text-align:center;
		line-height: 40px;
		font-size: 12px;
	}
	div{
		a{
			display: inline-block;
			width: 50%;
			img{
				width: 100%;
			}
		}
	}
}
.fash{
	width: 100%;
	margin-top: 10px;
	img{
		display: block;
		width: 100%;
	}
}
</style>  
