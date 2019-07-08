<template>
<div>
  <div class="banner" @click="BannerClick">
    <!-- <router-link to="/"><i class="el-icon-arrow-left"></i></router-link> -->
    <img class="banner-img" :src=bannerImg alt="">
    <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><i class="el-icon-picture banner-icon"></i>{{this.gallaryImgs.length}}</div>
    </div>
  </div>
  <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="GallaryClick"></common-gallary>
</div>
</template>
<script>
import commonGallary from '../../../assets/common/gallary/Gallary'
export default {// 导出文件
  name: 'detailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    BannerClick () {
      this.showGallary = true
    },
    GallaryClick () {
      this.showGallary = false
    }
  },
  components: {
    commonGallary
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .banner-title
    flex 1
    font-size .32rem
    padding 0 .2rem
  .banner-number
    height .32rem
    margin-top .14rem
    padding 0 .4rem
    line-height .32rem
    border-radius .2rem
    background  rgba(0, 0, 0, .8)
    font-size .24rem
    .banner-icon
      font-size .24rem
</style>
