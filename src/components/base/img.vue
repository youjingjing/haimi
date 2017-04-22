<template>
	<div>
		<router-link v-for="item in babylist" :to="{ name: 'details', params: { id: item.ProductID }}" :key="item.ProductID">
		<dl>
			<dt><img :src="item.Pictures" alt=""></dt>
			<dd>
				<h3>{{item.Subject}}</h3>
				<p>{{item.FinalPrice}}</p>
			</dd>
		</dl>
		</router-link>
	</div>
		
</template>
<script>
export default{
	props:["babylist"]
}
</script>
<style lang="scss" scoped>
a{
	display: inline-block;
	width: 48%;
	margin:0 1%;
	color: #000;
	dl{
		width: 100%;
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
</style>