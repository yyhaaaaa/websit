<template>
  <div class="article">
    <news :info='datas'></news>
  </div>
</template>

<script>
import News from '../components/News.vue'
export default {
  components: { News },
  data () {
    return {
      datas: []
    }
  },
  methods: {
    async getArticle (type = 'keji') {
      const res = await this.$http.get('/index', {
        params: {
          type: type,
          key: '2c1ae0395dd1562da313ca09a51f9d70'
        }
      })
      this.datas = res.data.result.data
      console.log(this.datas)
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>

<style>

</style>
