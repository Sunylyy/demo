<template>
  <div class="menu-list">
      <swiper :options="swiperOption">
       <swiper-slide v-for="(pages,index) in page" :key="index">
         <el-row class="list-top">
           <el-col :span="6" v-for="item in pages" :key="item.id">
               <div class="grid-content bg-purple">
                   <img :src="item.imgUrl">
                   <p class="list-top">{{item.desc}}</p>
               </div>
               </el-col>
         </el-row>
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'indexMenu',
  props: {
    menu: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
      // menuList: [
      //   {
      //     id: '0001',
      //     imgUrl: require('@/assets/img/pic_005.png'),
      //     keywords: '景区门票'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: require('@/assets/img/pic_006.png'),
      //     keywords: '少林寺'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: require('@/assets/img/pic_007.png'),
      //     keywords: '郑州必游'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: require('@/assets/img/pic_008.png'),
      //     keywords: '郑州方特'
      //   },
      //   {
      //     id: '0005',
      //     imgUrl: require('@/assets/img/pic_009.png'),
      //     keywords: '景点门票'
      //   },
      //   {
      //     id: '0006',
      //     imgUrl: require('@/assets/img/pic_010.png'),
      //     keywords: '景区门票'
      //   },
      //   {
      //     id: '0007',
      //     imgUrl: require('@/assets/img/pic_011.png'),
      //     keywords: '景区门票'
      //   },
      //   {
      //     id: '0008',
      //     imgUrl: require('@/assets/img/pic_012.png'),
      //     keywords: '景区门票'
      //   },
      //   {
      //     id: '0009',
      //     imgUrl: require('@/assets/img/pic_013.png'),
      //     keywords: '景区门票'
      //   },
      //   {
      //     id: '0010',
      //     imgUrl: require('@/assets/img/pic_014.png'),
      //     keywords: '景区门票'
      //   }
      // ]
    }
  },
  computed: {
    page () {
      const pages = []
      this.menu.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
img
  width 1.1rem
  height 1.1rem
.menu-list
  text-align center
  margin-top .2rem
  .list-top
    margin-bottom .2rem
</style>
