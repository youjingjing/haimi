<template>
	<div class="foot">
		<footer>
			<router-link to="/" exact>
				<i>
					<img src="../../assets/home.on.png" class="show" alt="">
					<img src="../../assets/home.png" alt="">
				</i>
				<span>首页</span>
			</router-link>
			<router-link to="/Menu">
				<i>
					<img src="../../assets/menu.on.png" class="show" alt="">
					<img src="../../assets/menu.png" alt="">
				</i>
				<span>分类</span>
			</router-link>
			<router-link to="/Shop">
				<i>
					<img src="../../assets/shop.on.png" class="show" alt="">
					<img src="../../assets/shop.png" alt="">
				</i>
				<span>购物车</span>
			</router-link>
			<router-link to="/Mine">
				<i>
					<img src="../../assets/mine.png" class="show" alt="">
					<img src="../../assets/mine.png" alt="">
				</i>
				<span>我的</span>
			</router-link>
		</footer>
	</div>
</template>
<script>

export default{
	
}
</script>

<style lang="scss" scoped>
.foot{
	width: 100%;
	position: fixed;
	bottom: 0;
	height: 44px;
	background:#fff;
	border-top: #e1e1e1 solid 1px;
	footer{
		width: 100%;
		display: -webkit-box;
		a{
			display: block;
			-webkit-box-flex:1;
			display: -webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			color: #000;
			i{
				display: block;
				display: -webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				img{
					display: block;
					width: 40%;
					&.show{
						display: none;
					}
				}
			}
			span{
				display: block;
				font-size: 12px;
				text-align: center;
			}	
		}
		.router-link-active{
			i{
				img{
					display: none;
					&.show{
						display: block;
					}
				}
			}
			span{
				color: #801a2a;
			}
		}
	}
}
</style>