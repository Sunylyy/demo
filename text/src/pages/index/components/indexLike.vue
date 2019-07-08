<template>
  <div class="wrap">
    <p class="like-title"><img src="@/assets/img/pic_029.png" alt="">猜你喜欢</p>
    <el-row class="wrap-content">
      <router-link tag="div" v-for="item in likeList" :key="item.id" :to="'/detail/' + item.id">
      <el-col :span="24">
        <el-row class="ma-a">
          <el-col :span="8"><img class="img1" :src=item.imgUrl></el-col>
          <el-col :span="16">
            <p class="title">{{item.title}}<p>
            <p class="des">{{item.desc}}</p>
            <p class="price"><span>￥<em class="aa">235</em></span>起</p>
          </el-col>
          </el-row>
      </el-col>
      </router-link>
    </el-row>
  </div>
</template>
<script>
export default {// 导出文件
  name: 'indexLike',
  props: {
    likeList: Array
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  margin-top .2rem
.like-title
  padding .24rem .3rem .26rem
  color #212121
  img
    display inline-block
    overflow hidden
    width .3rem
    height .3rem
    margin-left .2rem
.wrap-content
  padding 0 .3rem
  .img1
    width 2rem
    height 2rem
  .title
    margin-top .2rem
    height .44rem
    color #212121
    font-size .32rem
    line-height .44rem
  .des
    margin-top .1rem
    color #616161
    font-size .24rem
    line-height .34rem
    vertical-align text-bottomr
  .price
    margin-top .1rem
    span
      color: #ff8300
      font-size: .24rem;
    .aa
      color #ff8300
      font-size .4rem
    .zz
      right: .24rem;
      bottom: 0;
      float right
.ma-a
  margin-bottom .4rem
</style>
