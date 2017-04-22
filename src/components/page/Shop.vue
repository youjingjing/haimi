<template>
  <div class="shop">
  	<div class="shopCart">
  		<router-link to="/">
  			<img src="../../assets/shopcar.png" alt="">
  			<span>去首页逛逛</span>
  		</router-link>
  	</div>
  	<div class="baby">
  		<h2>大家都在买的宝贝</h2>
  		<img-bar v-bind:babylist="babylist"></img-bar>
  	</div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import imgBar from "@/components/base/img"
import footBar from '@/components/base/foot';
export default{
	data(){
		return{
			babylist:[]
		}
	},
	created () {
      	this.$http.jsonp('http://m.haimi.com/api/cart/info?clearInvalidProducts=Y',{
          	Params:{
            	platform:"WAP"
        	},
        	jsonp:"_callback"
      	}).then(function(data){
      		var res=data.body.extra;
      		this.babylist=res.Suggest
  			// console.log(res)      		
      	})
  	},
	components:{
	  	footBar,
	  	imgBar
  	}
}
</script>

<style lang="scss" scoped>
	.shop{
		background: #f5f5f5;
		.shopCart{
			display: -webkit-box;
			-webkit-box-pack:center;
			padding-top: 20%;
			padding-bottom:10%; 
			a{
				width: 100%;
				display: block;
				color: #000;
				display: -webkit-box;
				-webkit-box-orient:vertical;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				img{
					width: 30%;
					display: block;
				}
				span{
					display: block;
					padding:3px;
					border: #000 solid 1px;
					font-size: 12px;
					margin-top: 10px;
				}
			}
				
		}
		.baby{
			width: 100%;
			h2{
				text-align: center;
				font-size: 12px;
				background: #fff;
				line-height: 34px;
				border-bottom: #f5f5f5 solid 1px;	
			}
			dl{
				width: 48%;
				display: inline-block;
				margin:0 1%;
				background: #fff;
				dt{
					width: 100%;
					img{
						display: block;
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
					    padding: 0 10px;
					    color: #999;
					}
					p{
						line-height: 20px;
						overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    text-align: center;
					    font-size: 10px;
					    padding: 0 10px;
					}
				}
			}
		}
	}
</style>