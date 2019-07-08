<template>
  <div class="wrap">
    <input type="text" placeholder="输入城市和景点名字" v-model="inputVal">
    <div class="inner-content" ref="content" v-show="inputVal">
      <div>
        <p v-for="item in result" :key="item.id" @click="chengeCity(item)">{{item}}</p>
        <p v-show="show">搜索不到结果</p>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {// 导出文件
  name: 'citySearch',
  props: ['citys'],
  data () {
    return {
      inputVal: '',
      result: [],
      show: false
    }
  },
  methods: {
    chengeCity (city) {
      // console.log(city)
      this.$store.dispatch('change', city)
      this.$router.push('/')
    }
  },
  watch: {
    inputVal () {
      const res = []
      for (let i in this.citys) {
        this.citys[i].forEach(item => {
          if (item.spell.indexOf(this.inputVal) > -1 || item.name.indexOf(this.inputVal) > -1) {
            res.push(item.name)
          }
        })
        this.result = res
      }
      if (this.inputVal === '') {
        this.result = []
      }
      if (!this.result.length) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.content, {
      click: true
    })
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  background #00bcd4
  line-height .8rem
  text-align center
  input
    box-sizing border-box
    width 90%
    padding 0 .2rem
    text-align center
    line-height .5rem
    margin-top .14rem
    border none
    border-radius .1rem
.inner-content
  background #cccccc
  position absolute
  left 0
  right 0
  bottom 0
  top 1.68rem
  z-index 1
  text-align left
  padding-left .3rem
  overflow hidden
  p
    line-height .7rem
</style>
