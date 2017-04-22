<template>
	<div class="details">
		<div v-if="flg" class="detailcon">
			<banner-bar v-bind:bannerlist="paclist"></banner-bar>
			<h3>{{list.Subject}}</h3>
			<p>
				<span>￥{{list.FinalAmount}}</span>
				<span class="price">￥{{list.DomesticPrice}}</span>
				<span class="sales">月销{{list.MonthSalesNum}}</span>
			</p>
			</dl>
			<div class="cont">
				<p class="postage">邮费{{list.PostAbroad}}元</p>
				<p class="guaran">
					<span v-for="item in list.Promises"><img src="../../assets/right.png" alt="">{{item}}</span>
				</p>
				<p class="subject" v-for="item in list.Promotions">{{item.Subject}}</p>
				<p class="choice" v-if="list.AttrInfo" @click="alert()">
					<span class="chios">请选择: <i v-for="item in list.AttrInfoArray">{{item.AttrName}}</i></span>
				</p>
			</div>
			<div class="comment">
	            <div class="commentList" v-for='x in list.TopReviews' ref="comment">
	                <div class="first">
	                	<img :src="x.Buyer.Avatar" alt="">
	                	<span>{{x.Buyer.NickName}}</span>
	                	<i>{{x.CreateTime | getTime}}</i>
	                </div>
	                <div class="two">{{x.BuyerNote}}</div>
	                <div class="three" v-if="x.BuyerPictures"><img v-for="(item,index) in x.BuyerPictures.split(',')" ref="look" @click="look(index)" class="look" :src="item" alt=""></div>
	            </div>
	            <p>全部评价({{list.ReviewCount}})</p>

	        </div>

			<div class="goods">
				<dl>
					<dt><img src="../../assets/hai.jpg" alt=""></dt>
					<dd>
						<h3>海密严选</h3>
						<p>由海蜜严选直接销售，提供物流与售后服务</p>
					</dd>
				</dl>
				<p class="find">发现更多<span>{{list.BrandName}}</span>良品</p>
				<div class="code">
					<h3>商品详情</h3>
					<p><img src="../../assets/code.jpg" alt=""></p>
				</div>

				<div class="content" v-html="list.Descriptioin"></div>

			</div>

			<div class="baby">
		  		<h2>商品推荐</h2>
		  		<img-bar v-bind:babylist="babylist"></img-bar>
		  	</div>

			<div class="buy"> 
				<router-link to="/"><img src="../../assets/home.png" alt=""></router-link>
				<router-link to=""><img src="../../assets/collection.png" alt=""></router-link>
				<router-link to="/Shop"><img src="../../assets/shop.png" alt=""><span class="nums"></span></router-link>
				<span class="shop" @click="alert">加入购物车</span>
				<span>立即购买</span> 
			</div>

		</div>
		<mark-bar v-bind:list="list"></mark-bar>


	</div>
</template>
<script>
import bannerBar from '@/components/page/home/banner';
import imgBar from "@/components/base/img"
import markBar from "@/components/page/detail/mark"
export default{
	components:{
		bannerBar,
		markBar,
		imgBar
	},
	data(){
		return {
			list:[],
			paclist:[],
			babylist:[],
			flg:true
		}
		
	},
	watch:{
		"$route.params.id":"getData"
	},
	filters:{
        getTime (val){ 
           	let  today = new Date()*1;
           	let  otherDay = new Date(val)*1;
           	let   day =  today-otherDay;
           
           	if(day/1000<60){
           	 	return parseInt(day/1000)+"秒前"
           	}else if(day/1000/60<60){
           		return parseInt(day/1000/60)+"分前"
           	}else if(day/1000/60/60<24){
           		return parseInt(day/1000/60/60)+"小时前"
           	}else if(day/1000/60/60/24<30){
           		return parseInt(day/1000/60/60/24)+"天前"
           	}else{
           		return val.slice(5,16)
           	}
        }
	},
	created(){
		this.getData()
			
	},
	methods:{
		getData(){
			if(this.$route.params.id!=0){
				this.$http.jsonp("http://www.haimi.com/api/product/detail-cdn?ProductID="+this.$route.params.id,{
		          	params : {
		            	platform:"WAP"
		          	},
		          	jsonp : "_callback"
		        }).then(function(data){
		         	var res=data.body.data
		         		this.list=res;

		         	if(this.list.ProductPictures){
		         		this.paclist=JSON.parse(this.list.ProductPictures)
		         	}
					
					this.babylist=this.list.Recommend;
					this.flg=true;

					// console.log(this.list)
		        })
			}else{
				this.flg=false
			}
		},
		alert(){
			var chios=document.querySelector(".chios");
			var mark=document.querySelector('.mark'),
				purch=document.querySelector(".purchase"),
				minus=document.querySelector("#minus"),
				add=document.querySelector("#add"),
				num=document.querySelector("#num"),
				plase=document.querySelector(".plase");

			mark.style.display="block";
			purch.style.display="block";

			mark.onclick=function(){

				mark.style.display="none";
				purch.style.display="none";
				chios.innerHTML=plase.innerText;
				document.documentElement.style.overflow='auto';
				
			}
			mark.ontouchend=function(){
				mark.style.display="none";
				purch.style.display="none";
				chios.innerHTML=plase.innerText;
				document.documentElement.style.overflow='auto';
			}
			//禁止遮罩层下
			document.documentElement.style.overflow='hidden'
			mark.ontouchstart = function(e){ 
				e.preventDefault(); 
			}
			
			minus.onclick=function(){
				if(num.innerHTML<=1){
					return
				}
				num.innerHTML--
			}
			add.onclick=function(){
				num.innerHTML++
			}

			// var nums=document.querySelector(".nums")
			// nums.style.display="block"
		},
		look(index){
			var mark=document.querySelector('.mark'),
				img=document.createElement("img"),
				comment=this.$refs.comment;

			var obj={
				position: "fixed",
				top:0,
				bottom: 0,
				left:0,
				right: 0,
				width: "100%"
			}
			mark.style.display="block";
			img.src=this.$refs.look[0].currentSrc;
			img.style.position="fixed";
			img.style.top="10%";
			img.style.zIndex="100"
			img.style.bottom=0;	
			img.style.left=0;	
			img.style.right=0;	
			img.style.width="100%";
			document.body.appendChild(img)
			document.documentElement.style.overflow='hidden'
			img.onclick=function(){
				mark.style.display="none";
				document.body.removeChild(img)
				document.documentElement.style.overflow='auto'
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.details{
	width:100%;
	background: #f5f5f5;
	font-size: 12px;
	padding-bottom: 44px;
	i{
		font-style: normal;
	}
	@import "../../public/css/detail.scss";	
	
}	

</style>