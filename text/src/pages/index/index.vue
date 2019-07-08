<template>
  <div>
      <index-head></index-head>
      <!-- <index-head :city="city"></index-head> -->
      <index-swiper :swiper="swiperList"></index-swiper>
      <index-menu :menu="menuList"></index-menu>
      <index-hot></index-hot>
      <index-like :likeList="likeList"></index-like>
      <index-week :weekList="weekList"></index-week>
  </div>
</template>
<script>
import indexHead from '@/pages/index/components/indexHead.vue'
import indexSwiper from '@/pages/index/components/indexSwiper.vue'
import indexMenu from '@/pages/index/components/indexMenu.vue'
import indexHot from '@/pages/index/components/indexHot.vue'
import indexLike from '@/pages/index/components/indexLike.vue'
import indexWeek from '@/pages/index/components/indexWeek.vue'
export default {
  name: 'index',
  components: {
    indexHead,
    indexSwiper,
    indexMenu,
    indexHot,
    indexLike,
    indexWeek
  },
  data () {
    return {
      // city: '',
      menuList: [],
      swiperList: [],
      likeList: [],
      weekList: []
    }
  },
  mounted () {
    this.gitInfo()
  },
  methods: {
    gitInfo () {
      this.$axios.get('/mock/index.json').then(res => {
        // console.log(res)
        res = res.data.data
        // this.city = res.city
        this.menuList = res.iconList
        this.swiperList = res.swiperList
        this.likeList = res.recommendList
        this.weekList = res.weekendList
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus">
</style>
