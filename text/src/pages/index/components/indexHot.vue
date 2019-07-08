<template>
  <div class="hot-list">
     <el-row :gutter="20" class="hot-top">
  <el-col :span="10"><img src="@/assets/img/pic_015.png">本周热门榜单</el-col>
  <el-col :span="6" :offset="8">全部榜单<i class="el-icon-arrow-right"></i></el-col>
   </el-row>
   <swiper :options="swiperOption" class="swiper-content">
    <!-- slides -->
      <swiper-slide v-for="item in hotList" :key="item.id">
        <div class="inner-list" >
          <img :src=item.imgUrl >
          <p class="p1 ellise">{{item.title}}</p>
          <p class="p2"><span>{{item.price}}</span>起</p>
        </div>
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
  </div>
</template>
<script>
export default {// 导出文件
  name: 'indexHot',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3.5, // 在swiper容器中显示滑块的个数
        spaceBetween: 20, // 设置滑块间距
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      },
      hotList: [
        {
          id: '001',
          imgUrl: require('@/assets/img/pic_017.jpg'),
          title: '少林寺',
          price: '￥60'
        },
        {
          id: '002',
          imgUrl: require('@/assets/img/pic_023.jpg'),
          title: '郑州动物园',
          price: '￥30'
        },
        {
          id: '003',
          imgUrl: require('@/assets/img/pic_019.jpg'),
          title: '郑州海洋馆',
          price: '￥8'
        },
        {
          id: '004',
          imgUrl: require('@/assets/img/pic_022.jpg'),
          title: '郑州方特欢乐世界',
          price: '￥189'
        },
        {
          id: '005',
          imgUrl: require('@/assets/img/pic_021.jpg'),
          title: '郑州方特水上乐园',
          price: '￥85'
        },
        {
          id: '006',
          imgUrl: require('@/assets/img/pic_021.jpg'),
          title: '世纪欢乐园',
          price: '￥48.8'
        },
        {
          id: '007',
          imgUrl: require('@/assets/img/pic_023.jpg'),
          title: '郑州动物园',
          price: '￥30'
        },
        {
          id: '008',
          imgUrl: require('@/assets/img/pic_019.jpg'),
          title: '郑州海洋馆',
          price: '￥8'
        },
        {
          id: '009',
          imgUrl: require('@/assets/img/pic_023.jpg'),
          title: '郑州方特欢乐世界',
          price: '￥189'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/public.styl'
.hot-top
  padding .24rem .3rem
  img
    width .3rem
    height .3rem
    vertical-align top
    color orange
    margin-right .1rem
.swiper-content
  margin-left .3rem
  height 3rem
  .inner-list
    width 2rem
  .p1
    color #212121
    font-size .24rem
    line-height .32rem
    text-align center
  .p2
    text-align center
    span
      color #ff8300
img
  width 2rem
  height 2rem
.swiper-scrollbar
  height .04rem !important
  background rgba(0,0,0,0)
</style>
