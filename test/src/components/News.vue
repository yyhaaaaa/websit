<template>
  <article>
    <div class="container">
      <ul class="nav-list">
        <li v-for="(tag,index) in tags" :key='index'
            @click="taggle(tag.tag)"
        >{{tag.name}}</li>
      </ul>
    </div>
    <div class="content"
      v-for="(item, index) in info"
      :key='index'
      @click="jump(item.url)"
      >
      <div class="info">
        <img :src="item.thumbnail_pic_s" alt="" class="pic">
        <div class="meta">{{item.author_name}}</div>
        <div class="title">{{item.title}}</div>
        <div class="date">{{item.date}}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          name: '推荐',
          tag: 'keji'
        },
        {
          name: '财经',
          tag: 'caijing'
        },
        {
          name: '健康',
          tag: 'jiankang'
        }
      ]
    }
  },
  props: ['info'],
  methods: {
    taggle (tag) {
      this.$parent.getArticle(tag)
    },
    jump (url) {
      window.location.href = url
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1140px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.nav-list {
  list-style: none;
  height: 46px;
  line-height: 46px;
}
.nav-list li {
  float: left;
  color: #1989fa;
  opacity: .5;
  margin-left: 22px;
  margin-right: 22px;
}
.content {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.info {
  overflow: hidden;
  width: 100%;
}
.meta {
  color: #ccc;
  text-align: left;
  font-size: .8rem;
}
.title {
  color: #2e3135;
  font-weight: 900;
  font-size: 1.2rem;
  text-align: left;
}
.date {
  margin-top: 10px;
  text-align: left;
}
.pic {
  width: 160px;
  height: 100px;
  float: right;
}
</style>
