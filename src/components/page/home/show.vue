<template>
	<div>
		<div v-for="item in list" class="list">
			<h3>{{item.Title}}</h3>
			<router-link v-for="i in item.Products" :to="{ name: 'details', params: { id: i.ProductID}}" :key="i.Picture">
				<dl>
					<dt><img :src="i.Pictures" alt=""></dt>
					<dd>
						<h3>{{i.Subject}}</h3>
						<p>￥{{i.FinalPrice}}</p>
					</dd>
				</dl>
			</router-link>
		</div>
			
	</div>
</template>
<script>

export default {
	props:{
  		index:{
			type:Number,
			default:0
  		},
  		navId:{
			type:String,
			default:"3"
  		}
  	},
  	data () {
	    return {
	      	list:[]
	    }
	},
	created () {
      	this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID='+this.navId+'&page=1&pageSize=100',{
          	Params:{
            	platform:"WAP"
        	},
        	jsonp:"_callback"
      	}).then(function(data){
      		var res=data.body.data
      		this.list=res;
      		console.log(res)
      	})
  	}
}

</script>

<style lang="scss" scoped>
.list{
	>h3{
		text-align: center;
		font-size: 12px;
		line-height: 30px;
	}
	a{
		display: inline-block;
		color: #000;
		width: 50%;
	}
	dl{
		width: 100%;
		background: #fff;
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