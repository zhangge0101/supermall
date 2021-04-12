<template>
  <div>
    <swiper :interval="interval">
      <swiper-item v-for="item in banners" >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    data(){
      return{
        interval:1000
      }
    }
  }
</script>

<style scoped>

</style>
