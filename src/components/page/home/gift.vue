<template>
	<div class="gift">
		<a href="javascript:;" v-for="item in giftlist">
			<img :src="item.Picture" alt="">
			<span>{{item.SlideName}}</span>
		</a>
	</div>
</template>
<script>
export default {
    props:["giftlist"]
   
}
</script>
<style lang="scss">
.gift{
	display: -webkit-box;
	background: #fff;
	margin-top: 10px;
	a{
		-webkit-box-flex:1;
		display: block;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		color: #000;
		img{
			width: 90%;
			display: block;
		}
		span{
			display: block;
			font-size: 12px;
			padding: 10px 0;
		}
	}
}
</style>