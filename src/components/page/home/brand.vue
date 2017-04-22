<template>
	<div class="fashion">
		<router-link v-for="item in fashion" :to="{ name: 'details', params: { id: item.CastID!=''?item.CastID:0 }}" :key="item.Picture">
			<dl>
				<dt><img :src="item.Picture" alt=""></dt>
				<dd>
					<h3>{{item.SlideName}}</h3>
					<p>{{item.Description}}</p>
				</dd>
			</dl>
		</router-link>
	</div>
</template>
<script>
export default {
   props:["fashion"]
}
</script>
<style lang="scss">
.fashion{
	width: 100%;
	background: #fff;
	display: -webkit-box;
	overflow: auto;
	a{
		display: block;
		width: 30%;
		color:#000;
	}
	dl{
		width: 100%;
		dt{
			width: 100%;
			img{
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
			}
			p{
				line-height: 20px;
				overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    text-align: center;
			    color: #999;
			    font-size: 10px;
			}
		}
	}
}
</style>