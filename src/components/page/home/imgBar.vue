<template>
	<div>
		<a href="javascript:;" v-for="item in imglist">
			<img :src="item.Picture" alt="">
		</a>
		
	</div>
</template>
<script>
export default{
	props:["imglist"]
}
</script>
<style lang="scss">
	div{
		width: 100%;
		img{
			display: block;
			width:100%;
		}
	}
</style>