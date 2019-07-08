<template>
  <div class="wrap" ref="a">
    <div class="content">
      <div>
        <p class="title">热门城市</p>
        <el-row>
          <el-col :span="8" class="list-item" @click.native="chengeCity(item.name)" v-for="item in hotCity" :key="item.id">{{item.name}}</el-col>
        </el-row>
      </div>
      <div>
           <p class="title">字母排序</p>
        <el-row>
          <el-col :span="4" class="list-items" v-for="(value, key, index) in citys" @click.native="changeHandler" :key="index">{{key}}</el-col>
        </el-row>
      </div>
      <div v-for="(item1,key) in citys" :key="key" :ref="key">
           <p class="title">{{key}}</p>
        <el-row>
          <el-col :span="6" class="list-itemsis ellise" v-for="(item) in item1" :key="item.id" @click.native="chengeCity(item.name)">{{item.name}}</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {// 导出文件
  name: 'cityList',
  props: ['hotCity', 'citys', 'area'],
  methods: {
    changeHandler (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    chengeCity (city) {
      // console.log(city)
      this.$store.dispatch('change', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.a, {
      click: true
    })
  },
  watch: {
    area () {
      if (this.area) {
        console.log(this.$refs[this.area])
        const element = this.$refs[this.area][0] // 当前点击的div元素
        this.scroll.scrollToElement(element) // 滚动方法，滚动到当前所在的div元素
      }
    }
  }
}
</script>
@import '../../../assets/styles/public.styl'
<style lang="stylus" scoped>
.wrap
  position absolute
  left 0
  right 0
  bottom 0
  top 1.68rem
  overflow hidden
  .title
    background #f5f5f5
    line-height .72rem
    font-size .24rem
    padding-left .3rem
  .list-item
    line-height .9rem
    text-align center
    border-bottom .02rem solid #ddd
    border-right .02rem solid #ddd
  .line-item:nth-child(3n)
    border-right none
  .list-items
    line-height .9rem
    text-align center
    border-bottom .02rem solid #ddd
    border-right .02rem solid #ddd
  .line-items:nth-child(6n)
    border-right none
  .list-itemsis
    line-height .9rem
    text-align center
    border-bottom .02rem solid #ddd
    border-right .02rem solid #ddd
  .line-itemsis:nth-child(4n)
    border-right none
</style>
