<template>
  <div>
      <div class="wrap">
        <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
        <p class="title">城市选择</p>
      </div>
  </div>
</template>
<script>
export default {// 导出文件
  name: 'cityHead'
}
</script>
<style lang="stylus" scoped>
.wrap
  background #00bcd4
  line-height .88rem
  i
    position absolute
    color #fff
    line-height .88rem
    width .8rem
    text-align center
    font-size .42rem
  .title
    color #ffffff
    text-align center
    font-size .32rem
</style>
