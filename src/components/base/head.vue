<template>
	<div class="head">
		<header>
			<div class="head-top">
				<span><img src="../../assets/data.png" alt=""></span>
				<input type="search" placeholder="搜索宝贝">
			</div>
			<a href="javascript:;">搜索</a>
		</header>
	</div>
</template>
<script>

export default {
  	
}

</script>

<style lang="scss" scoped>
.head{
	width:100%;
	header{
		width: 100%;
		height: 40px;
		background: #242424;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		.head-top{
			width: 85%;
			color: #fff;
			background: #1a1a1a;
			display: -webkit-box;
			-webkit-box-align:center;
			padding:3px 10px;
			span{
				display: block;
				img{
					width: 40%;
				}
			}
			input{
				background: #1a1a1a;
				border:none;
				display: block;
				color: #ccc;
				outline-color: #1a1a1a;
			}
		}
		a{
			width: 10%;
			color: #fff;
			display: block;
			font-size: 12px;
			text-align: center;
		}	
	}
}
</style>