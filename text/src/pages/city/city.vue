<template>
  <div>
    <city-head></city-head>
    <city-search :citys="citys"></city-search>
    <city-list :hotCity="hotCity" :citys="citys" @change="changeArea" :area="area"></city-list>
  </div>
</template>
<script>
import cityHead from './components/cityHead'
import citySearch from './components/citySearch'
import cityList from './components/cityList'
export default {// 导出文件
  name: 'city',
  components: {
    cityHead,
    citySearch,
    cityList
  },
  data () {
    return {
      hotCity: [],
      citys: [],
      area: ''
    }
  },
  mounted () {
    this.gitInfo()
  },
  methods: {
    gitInfo () {
      this.$axios.get('/mock/city.json?id' + this.$route.params.id).then(res => {
        // console.log(res)
        res = res.data.data
        this.hotCity = res.hotCities
        this.citys = res.cities
      })
    },
    changeArea (letter) {
      this.area = letter
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
