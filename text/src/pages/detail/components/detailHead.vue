<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="el-icon-arrow-left ma-cc"></i>
    </router-link>
    <div class="wrap" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
      <p class="title">景点详情</p>
    </div>
  </div>
</template>
<script>
export default {// 导出文件
  name: 'detailHead',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacityStyle: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  text-align center
  line-height .8rem
  background rgba(0, 0, 0, .8)
  .ma-cc
    color #fff
    font-size .4rem
.wrap
  position fixed
  z-index 2
  top 0
  left 0
  right 0
  background #00bcd4
  color #fff
  text-align center
  font-size .32rem
  line-height .88rem
  i
    position absolute
    color #fff
    left .2rem
    line-height .88rem
    width .8rem
    font-size .42rem
  .title
    color #ffffff
    text-align center
    font-size .32rem
</style>
