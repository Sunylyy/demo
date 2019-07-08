<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-head></detail-head>
    <detail-list :list="list"></detail-list>
    <div class="ff"></div>
  </div>
</template>
<script>
import detailHead from './components/detailHead'
import detailList from './components/detailList'
import detailBanner from './components/detailBanner'
export default {// 导出文件
  name: 'detail',
  components: {
    detailHead,
    detailList,
    detailBanner
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.gitInfo()
  },
  methods: {
    gitInfo () {
      this.$axios.get('/mock/detaion.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        // console.log(res)
        res = res.data.data
        this.sightName = res.sightName
        this.bannerImg = res.bannerImg
        this.gallaryImgs = res.gallaryImgs
        this.list = res.categoryList
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.ff
  height 50rem
</style>
