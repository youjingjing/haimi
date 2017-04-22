<template>
	<div class="day">
		<router-link :to="{ name: 'details', params: { id: item.CastID!=''?item.CastID:0 }}" v-for="item in daylist" :key="item.CastID">
			<img :src="item.Picture" alt="">
			
		</router-link>
	</div>
</template>
<script>
export default {
    props:["daylist"]
   
}
</script>
<style lang="scss">
.day{
	width: 100%;
	display: -webkit-box;
	background: #fff;
	margin-top: 10px;
	a{
		display: block;
		width: 100%;
		color: #000;
		img{
			display:block;
			width: 100%;
		}
	}
}
</style>