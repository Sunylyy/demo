<template>
 <el-row>
  <el-col :span="24">
  <div class="swiper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide v-for="item in swiper" :key="item.id">
        <img :src=item.imgUrl>
          </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>``
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
    </el-col>
</el-row>
</template>
<script>
export default {// 导出文件
  name: 'indexSwiper',
  props: {
    swiper: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          autoplay: true,
          el: '.swiper-pagination'// 分页器按钮
        },
        autoplay: {
          delay: 3000, // 撇换时间
          disableOnInteraction: false
        },
        loop: true // 无限循环
      }
      // swiperList: [
      //   {
      //   id: '0001',
      //   imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
      // },
      // {
      //   id: '0002',
      //   imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
      // },
      // {
      //   id: '0003',
      //   imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
      // }
      // ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper
  height 2rem
  background green
  margin-top -0.1rem
  img
    width 100%
    height 2rem
  .swiper-pagination-bullet
    background rgba(255,255,255,.5)
  .swiper-pagination-bullet-active
    background #ffffff
</style>
