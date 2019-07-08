<template>
  <div class="warp">
      <h2 class="title">周末打卡</h2>
      <div v-for="item in weekList" :key="item.id">
      <img :src=item.imgUrl>
      <div class="mp-info">
        <p class="p1">{{item.title}}</p>
        <p class="p2 ellise">{{item.desc}}</p>
      </div>
      </div>
  </div>
</template>
<script>
export default {// 导出文件
  name: 'indexHead',
  props: {
    weekList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/public.styl'
.warp
  height 3rem
  .title
    height .8rem
    line-height .8rem
    background #f5f5f5
    padding-left .3rem
  img
    width 100%
  .mp-info
    padding: .14rem .2rem .2rem .2rem
    .p1
      overflow: hidden;
      padding-right: 1.4rem;
      color: #212121;
      font-size: .28rem;
      line-height: .48rem;
      white-space: nowrap;
      text-overflow: ellipsis;
    .p2
      overflow: hidden;
      padding-right: 1.4rem;
      color: #616161;
      font-size: .24rem;
      line-height: .42rem;
      white-space: nowrap;
      text-overflow: ellipsis
</style>
