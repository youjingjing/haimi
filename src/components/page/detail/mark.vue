<template>
	<div>
		<div class="purchase" ref="purch">
			<dl>
				<dt><img class="img" :src="list.Pictures" alt=""></dt>
				<dd>
					<p class="price">￥{{list.FinalAmount}}</p>
					<p class="Stock">(库存{{list.Stock}})</p>
					<p v-if="list.AttrInfo" class="plase">
						<span class="choses">请选择：</span>
						<b ref="chose">
							<span class="inner"  v-for="item in list.AttrInfoArray"> {{item.AttrName?item.AttrName:""}}</span>
						</b>
					</p>
				</dd>
			</dl>
			
			<div class="color">
				<div v-for="(item,ind) in list.AttrInfoArray" ref="color" :id="ind">
					<p>{{item.AttrName?item.AttrName:""}}</p>
					<span v-for="(i,index) in item.AttrValues.split(',')" @click="classify()">{{i}}</span>
				</div>
					
			</div>
			<div class="buy">
				<p class="num">购买数量</p>
				<p><span id="minus">-</span><b id="num">1</b><span id="add">+</span></p>
			</div>

			<a href="javascript:;" @click="ok()">确定</a>
			
		</div>
		
		<a class="add" ref="add">添加购物车成功</a>	
		<div class="mark" ref="mark"></div>

	</div>
</template>
<script>
export default{
	props:["list"],
	data(){
		return {
			obj:null
		}
	},
	methods:{
		classify(e){
			e=window.event || e;
	  		var el=e.srcElement || e.targetElement,
	  			choses=document.querySelector(".choses"),
	  			inner=document.querySelectorAll(".inner"),
	  			img=document.querySelector(".img"),
	  			price=document.querySelector(".price"),
	  			Stock=document.querySelector(".Stock"),
	  			childs=el.parentNode.childNodes,
	  			list=this.list;

	  		childs.forEach(function(v){
	  			v.className=''
	  		})
	  		el.className='on';
	  		
		  	var type=el.parentNode.id

	  		if(type==0){
	  			choses.innerHTML="已选择："
	  			inner[type].innerHTML=el.innerHTML

	  			if(list.SkuPictures.length>0){
	  				for(var i=0;i<list.SkuPictures.length;i++){
	  					if(inner[type].innerHTML==list.SkuPictures[i].ValueName){
	  						img.src=list.SkuPictures[i].Picture
	  						price.innerHTML="￥"+list.SkuInfo[i].Price
			  				Stock.innerHTML="(库存"+list.SkuInfo[i].Stock+")"
			  				img.id=list.SkuPictures[i].ValueID
	  					}
			  			
			  		}
	  			}
		  			
	  		}else{
	  			inner[type].innerHTML=" "+el.innerHTML
	  		}

	  		
		},
		ok(){
			var add=this.$refs.add,
				mark=this.$refs.mark,
				purch=this.$refs.purch,
				img=document.querySelector(".img"),
				price=document.querySelector(".price"),
	  			Stock=document.querySelector(".Stock"),
				num=document.querySelector("#num"),
				chios=document.querySelector(".chios"),
				nums=document.querySelector(".nums");

			add.style.display="block"
			mark.style.display="none";
			purch.style.display="none";
			chios.innerHTML="已选择："+this.$refs.chose.innerText;
			document.documentElement.style.overflow='auto'

			
			nums.style.display="block"
			document.documentElement.style.overflow='auto';

			setTimeout(function(){
				add.style.display="none"
			},1000)
			
			
			this.obj={
				id:img.id,
				price:price.innerText,
				cont:this.$refs.chose.innerText,
				src:img.src,
				name:this.list.Subject,
				number:num.innerHTML
			}
			this.$store.commit("addCard",this.obj)
			
				
		}
	}
}
</script>
<style lang="scss">
	.mark{
		display: none;
		position: fixed;
		z-index: 100;
		top:0;
		left:0;
		right:0;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
	.add{
		z-index: 101;
		position: fixed;
		background: rgba(0,0,0,0.6);
		padding:10px 20px;
		border-radius: 5px;
		display: none;
		color: #fff;
		bottom:30%;
		left: 30%;
	}
	.purchase{
		display: none;
		background: #fff;
		position: fixed;
		z-index: 101;
		bottom: 0;
		padding-top: 10px;
		dl{
			width: 100%;
			padding: 10px;
			display: -webkit-box;
			border-bottom: #ddd solid 1px;
			dt{
				width: 20%;
				display: -webkit-box;
				-webkit-box-align:center;
				img{
					display: block;
					width: 60px;
					height: 60px;
				}
			}
			dd{
				p{
					color: #888;
					font-size: 10px;
					margin-left: 10px;
					margin-top: 5px;
					&.price{
						color: #991f33;	
						font-size: 14px;				
					}
					b{
						font-weight: normal;
					}
				}
				
			}
		}
		.buy{
			display: -webkit-box;
			-webkit-box-pack:justify;
			-webkit-box-align:center;
			p{
				padding: 15px;
				font-size: 14px;
				span{
					display: inline-block;
					width: 20px;
					height: 20px;
					text-align: center;
					line-height: 20px;
					border: #ccc solid 1px;
					
				}
				b{
					display: inline-block;
					width: 30px;
					height: 20px;
					text-align: center;
					line-height: 20px;
					border-top: #ccc solid 1px;
					border-bottom: #ccc solid 1px;
				}
			}

		}
		.color{
			border-bottom: #ddd solid 1px;
			p{
				font-size: 14px;
				padding:5px 10px;
			}
			span{
				display: inline-block;
				padding:5px 10px;
				margin:5px 10px;
				border: #ccc solid 1px;
				&.on{
					color: #801a2a;
					border:1px solid #801a2a;
				}
			}
		}
		a{
			width: 100%;
			display: block;
			padding: 15px 0;
			color:#fff;
			background: #801a2a;
			text-align: center;
		}
	}
</style>