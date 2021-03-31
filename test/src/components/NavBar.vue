<template>
  <header>
    <div class="container">
      <h1><a href=""><svg  style="display:inline-block;vertical-align:middle" t="1616989908465" class="icon" viewBox="0 0 1368 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1310" width="60" height="60"><path d="M1308.738184 325.590292V543.186005l52.795332 60.196547L1260.383581 691.2103l-92.268477-87.827748L1223.870922 543.186005V361.609537c-298.515661 121.873336-379.435609 159.372824-444.072885 188.977683a208.714256 208.714256 0 0 1-179.602811 4.934143C533.090879 531.344062 235.562046 418.352183 80.136537 345.820279c-103.617006-49.341432-110.031393-79.933119 0-121.873336 148.024295-55.755818 374.501466-143.583566 502.789188-191.938169 75.985805-31.578516 115.952364-46.87436 185.523783-12.335358 124.340408 49.341432 394.731453 156.412338 534.367704 214.141813 122.860165 52.795332 40.459974 70.558247 5.920972 91.775063z" fill="#4E8CEE" p-id="1311"></path><path d="M792.626809 641.868868c72.03849-29.604859 169.734525-78.452876 275.818603-123.353579v361.17928A549.663548 549.663548 0 0 1 690.98346 1023.771549a581.242065 581.242065 0 0 1-400.15901-144.570394V543.186005c81.906776 33.058759 174.175254 61.183375 285.193475 98.682863a290.127618 290.127618 0 0 0 218.089127 0z" fill="#A6C5F6" p-id="1312"></path></svg></a></h1>
      <ul class='nav'>
        <li v-for='(item,index) in tags'
            :key ='index'
            @click='selected(item)'
            :class="{active: item.tag === activeTag}"
         >{{item.tag}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          tag: '资讯',
          name: 'article'
        },
        {
          tag: '视频',
          name: 'video'
        },
        {
          tag: '笔记',
          name: 'note'
        },
        {
          tag: '更多',
          name: 'more'
        }
      ],
      activeTag: ''
    }
  },
  methods: {
    selected (item) {
      this.activeTag = item.tag
      this.$router.push(item.name)
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  header {
    height: 80px;
    line-height: 80px;
  }
  .container {
    width: 1140px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  h1 {
    height: 80px;
    width: 100px;
    line-height: 80px;
    float: left;
  }
  .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    list-style: none;
}
.nav li {
  float: left;
  color: #1989fa;
  opacity: .5;
  margin-left: 22px;
  margin-right: 22px;
}
.nav li:hover {
  color: #1989fa;
  opacity: 1;
}
.active {
  border-bottom: 2px solid #1989fa;
}
@media (max-width:1140px) {
  .container {
    width: 100%;
  }
}
</style>
