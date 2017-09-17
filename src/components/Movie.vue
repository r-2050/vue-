<template>
  <div>
    <div class="movie-page">
      <!--影院热映  -->
      <section class="sec">
        <header class="sec-header">
          <h2 class="sec-type">影院热映</h2>
          <router-link :to="{name:'HotMovie'}">更多</router-link>
        </header>
        <ul class="row-items">
          <li class="item" v-for="mov in mov_data" :key="mov.id">
            <router-link :to="{}">
              <div class="img-item"><img class="it-img" :src="mov.images.medium" alt=""></div>
              <span class="item-title">{{mov.title}}</span>
              <div class="item-star">
                <Rate class="it-star" disabled v-model="stars">
                </Rate>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
      <!--即将上映  -->
      <Jijsy/>
      <!--新片榜  -->
       <NewM/>

      <!--发现好电影  -->
      <FindGood/>

      <!--分类  -->
      <Types/>
    </div>
  </div>
</template>

<script>
import mov from '../services/movie_page';
import Jijsy from './page/Jijsy';
import NewM from './page/NewMov';
import FindGood from './page/FindGood'
import Types from './page/Types';

export default {
  data() {
    return {
      mov_data: [],
      stars:3
    }
  },
  methods: {
    getMovies() {
      mov.getMovies((res) => {
        // console.log(res.data.subjects)
        this.mov_data = res.data.subjects
      })
    }
  },
  created() {
    this.getMovies()
  },
  components:{
    Jijsy,
    NewM,
    FindGood,
    Types
  }
}
</script>
<style scoped>
.movie-page{
  overflow: hidden;
}
.sec {
  padding-top: 10px;
  overflow: hidden;
  height: 291px;
}

.sec-header {
  display: inline-block;
  width: 100%;
  padding: 0 1.12rem;
}

.sec-type {
  display: inline-block;
}

.sec-header a {
  float: right;
  color: #42bd56;
  text-decoration: none;
  font-size: .9rem;
}

.row-items {
  white-space: nowrap;
  overflow-x: auto;
  margin: 15px 0 43px 0;
  display: block;
  height: 215px;
}

.item {
  width: 100px;
  display: inline-block;
  white-space: normal;
  text-align: center;
  margin-left: 0.48rem;
}

.img-item {
  width: 100px;
  height: 142px;
}

.it-img {
  width: 100%;
  height: 142px;
}

.item-title {
  display: inline-block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #111;
  font-size: 0.94rem;
}

.it-star {
  font-size: 12px;
}
 .ivu-rate-star{
    margin: 0 !important;
}
</style>

