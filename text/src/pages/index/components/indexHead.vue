<template>
  <div class="head">
     <el-row>
  <el-col :span="3">
    <div class="grid-content bg-purple"><i class="el-icon-arrow-left fs"></i></div>
    </el-col>
  <el-col :span="15">
    <div class="grid-content bg-purple-light">
      <div class="title">
        <div class="inner-center">
          <i class="el-icon-search"></i>
          <span>输入城市/景点/游玩主题</span>
        </div>
      </div>
     </div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <p class="heade-right"><router-link to="/city" class="heade-right">{{this.city}}</router-link><i class="el-icon-caret-bottom icon-col"></i></p>
      </div>
      </el-col>
</el-row>
      </div>
</template>
<script>
import { mapState } from 'vuex'
export default {// 导出文件
  name: 'indexHead',
  // props: {
  //   city: String
  // }
  computed: {
    ...mapState({ // 把state中的city值映射到当前组件的计算属性中city属性上边
      city: 'city'
    })
  }
}
</script>
<style lang="stylus" scoped>
$color  = white
.head
  height .88rem
  line-height .88rem
  text-align center
  background #00afc7
  .fs
    font-size .48rem
    line-height .88rem
    color $color
  .icon-col
    color $color
  .title
    width 100%
    height .6rem
    border-radius .06rem
    margin-top .14rem
    background white
    .inner-center
      text-align left
      height .6rem
      margin-bottom .14rem
      line-height .6rem
      background $color
      color #e4e7ea
      i
        margin-left .2rem
        margin-right .1rem
  .heade-right
    color #ffffff
    text-decoration: none
</style>
