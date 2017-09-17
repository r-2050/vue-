<template>
  <div class="hello">
    <div class="type-list">
      <Row>
        <Col span="12" class="item-1">
        <router-link :to="{name:'Movie'}">影院热映</router-link>
        </Col>
        <Col span="12" class="item-2">
        <router-link :to="{}">生活在别处</router-link>
        </Col>
      </Row>
      <Row>
        <Col span="12" class="item-3">
        <router-link :to="{}">豆瓣时间</router-link>
        </Col>
        <Col span="12" class="item-4">
        <router-link :to="{}">豆瓣时间</router-link>
        </Col>
      </Row>
    </div>

    <router-link :to="{}" class="page1-list" v-for="db in db_data" :key="db.id">
      <div class="list-item">
        <Row>
          <Col span="16">
          <h3 class="item-h3">{{db.title}}</h3>
          <p class="hello-des">{{db.target.desc}}</p>
          </Col>
          <Col span="8">
          <div class="right"><img :src="db.target.cover_url" alt=""></div>
          </Col>
        </Row>

        <div class="by-des">
          <span class="by-left">by{{db.target.author.name}}</span>
          <span class="by-right">{{db.source_cn}}</span>
        </div>
      </div>
      <hr>
    </router-link>
    <div class="loading" >
    <Spin size="large" sloat></Spin>
    </div>
  </div>
</template>

<script>
import info from '../services/first_page.js'

export default {
  data() {
    return {
      db_data: []
    }
  },
  methods: {
    getData() {
      info.getData((res) => {
        // console.log(res.recommend_feeds)
        this.db_data = res.recommend_feeds;
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
.loading{
  width: 100%;
  text-align: center;
}
.type-list {
  margin-top: 20px;
  text-align: center;
}

.type-list a {
  display: inline-block;
  width: 163px;
  height: 44px;
  color: #494949;
  background-color: #f6f6f6;
  padding: 3px;
  margin: 3px;
  line-height: 44px;
}


.page1-list {
  text-decoration: none;
  /* color:transparent; */
  color: #494949;
}

.right {
  width: 80px;
  height: 80px;
  margin-left: 25px;
}

.right img {
  width: 80px;
  height: 80px;
  float: right;
}

.list-item {
  margin-left: 18px;
  padding: 25px 18px 25px 0;
}

.hello-des {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 12px;
  color: #aaa;
}

.hello .item-h3 {
  margin-bottom: 6px;
  font-size: 17px;
  color: #494949;
  font-weight: 500;
}

.by-des {
  font-size: 12px;
  color: #aaa;
  margin-top: 6px;
}

.by-right {
  float: right;
}
</style>
