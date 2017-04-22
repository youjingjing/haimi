<template>

    <div class="lun-page">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="item in bannerlist" :key="item.CastID">
                <img :src="item.Picture?item.Picture:item.picture" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
    props:["bannerlist"],
    
    data () {
        return {
            swiperOption: {
             
              notNextTick: true,
              autoplay: 3000
            }
           
        }
    },
    components: {
        swiper,
        swiperSlide
    }
   
}
    
</script>
<style lang="scss" scoped>
    .lun-page{
        width: 100%;
        background: #fff;
        .swiper-wrapper{
            .swiper-slide{
                width: 100%;
                img{
                    display:block;
                    width: 100%;
                }
            }
            .swiper-pagination{
                position: absolute;
                bottom:3px;
            }
        }
    }
        
</style>