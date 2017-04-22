
<template>
  	<div class="page">
      	<img-bar v-bind:imglist="imglist"></img-bar>
        <h3>{{showlist.Title}}</h3>
        <dl v-for="item in showlist.Products">
            <dt><img :src="item.Pictures" alt=""></dt>
            <dd>
                <h3>{{item.Subject}}</h3>
                <p>￥{{item.FinalPrice}}</p>
            </dd>
        </dl>
  	</div>
</template>

<script>
import imgBar from "@/components/page/home/imgBar"

export default {
	props:{
  		index:{
			 type:Number,
			 default:0
  		},
  		navId:{
			 type:String,
			 default:""
  		}
  	},
    watch:{
      navId(){
        this.getHttp();
      }
    },
  	data () {
    	return {
            imglist:[],
            showlist:[]
    	}
  	},
  	created () {
      	this.getHttp()
  	},
    mounted(){
    },
    components:{
        imgBar
    },
  	methods:{
        getHttp(){
            this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
                Params:{
                  platform:"WAP"
              },
              jsonp:"_callback"
            }).then(function(data){
              var res=data.body.data;
                if(res[0]){
                    this.imglist=res[0].Records;
                }else{
                    this.imglist=[]
                }
            })
            this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID='+this.navId+'&page=1&pageSize=100',{
                Params:{
                  platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res=data.body.data;
                this.showlist=res[0];
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang='scss'>
.page{
   >h3{
        text-align: center;
        font-size: 12px;
        line-height: 30px;
    }
    dl{
        width: 50%;
        display: inline-block;
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
