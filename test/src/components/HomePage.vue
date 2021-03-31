<template>
  <div class="home">
    <div class="banner-desc">
      <h1>线上学习网站</h1>
      <p>一个集学习视频、学习资讯、学习记录为一体的高效线上学习网站</p>
    </div>
    <div class="banner">
      <img src="../assets/banner.png" alt="" @click="this.$router.push('home')">
    </div>
    <div class="cards">
      <ul class="container">
        <li v-for='(card,index) in cards'
            :key='index'
            @click="taggle(card.name)"
        >
          <div class="card">
            <img :src='card.img' alt="">
            <h3>{{card.title}}</h3>
            <p>{{card.desc}}</p>
            <a href="">查看详情</a>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          img: require('@/assets/新闻.png'),
          title: '学习资讯',
          desc: '在此模块你可以了解到海量知识文章，帮助用户通过文章的方式学习到更多知识',
          name: 'article'
        },
        {
          img: require('@/assets/视频.png'),
          title: '学习视频',
          desc: '在此模块你可以获得优质的视频教学内容，通过观看视频的形式提升自己的专业知识',
          name: 'video'
        },
        {
          img: require('@/assets/笔记.png'),
          title: '学习笔记',
          desc: '在此模块你可以了解到海量知识文章，帮助用户通过文章的方式学习到更多知识',
          name: 'note'
        },
        {
          img: require('@/assets/更多.png'),
          title: '更多',
          desc: '在此模块你可以了解到海量知识文章，帮助用户通过文章的方式学习到更多知识',
          name: 'more'
        }
      ]
    }
  },
  methods: {
    taggle (name) {
      this.$router.push(name)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.banner-desc h1{
  font-size: 34px;
  margin: 20px auto;
  line-height: 48px;
  color: #555;
}
.banner-desc p {
  font-size: 18px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}
.banner {
  width: 890px;
  margin: 30px auto;
}
.banner img {
  width: 100%;
}
.cards {
  margin: 10px auto;
  width: 1140px;
  overflow: hidden;
}
.cards .container {
  width: auto;
}
li {
  box-sizing: border-box;
  width: 25%;
  padding: 0 19px;
  float: left;
  list-style: none;
}
.card {
  height: 430px;
  border: 1px solid #eaeefb;
  border-radius: 5px;
  text-align: center;
  transition: all .3s ease-in-out;
  position: relative;
  bottom: 0;
}
.card:hover {
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),
    -18px -18px 30px rgba(255, 255, 255, 1);
}
.card img {
  margin: 66px auto 60px;
  width: 120px;
  height: 120px;
}
.card h3 {
  font-size: 18px;
  color: #1f2f3d;
  font-weight: 400;
}
.card p {
  font-size: 14px;
  color: #99a9bf;
  padding: 10px 25px;
  line-height: 20px;
}
.card a {
    height: 53px;
    line-height: 52px;
    font-size: 14px;
    color: #409eff;
    text-align: center;
    border: 0;
    border-top: 1px solid #eaeefb;
    padding: 0;
    cursor: pointer;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    text-decoration: none;
}
.card a:hover {
  background-color:#0080FF;
  color: #fff;
}
</style>
