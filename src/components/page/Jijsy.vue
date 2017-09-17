<template>
  <div>
    <section class="ji-section">
       <header class="sec-header">
          <h2 class="sec-type">即将上映</h2>
          <a href="">更多</a>
        </header>
        <ul class="row-items">
          <li class="item" v-for="mov in mWill" :key="mov.id">
            <a href="">
              <div class="item-img"><img class="it-img" :src="mov.images.medium" alt=""></div>
              <span class="item-title">{{mov.title}}</span>
              <div class="item-star">
                <Rate class="it-star" disabled v-model="stars"></Rate>
              </div>
            </a>
          </li>
        </ul>
    </section>
  </div>
</template>

<script>
import mov from '../../services/movie_page.js'
export default {
  data() {
    return {
      mWill:[],
      stars:4
    }
  },
  methods: {
    getMW() {
      mov.getMWill((res) => {
        // console.log(res.data.subjects)
        this.mWill = res.data.subjects
      })
    }
  },
  created(){
    this.getMW()
  }
}
</script>

<style scoped>

.ji-section{
  margin: 0;
  overflow: hidden;
  height: 281px;
}
.sec-header{
  padding: 0 1.12rem;
}
.sec-header h2{
  display: inline;
}
.sec-header a{
  float: right;
  font-size: 0.9rem;
  color: #42bd56;
}

.row-items{
 white-space: nowrap;
  overflow-x: auto;
  margin: 15px 0 43px 0;
  display: block;
  height: 215px;
}
.item{
  display: inline-block;
  width: 100px;
  margin-left: .5rem;
}
.item-img{
  width: 100px;
  height: 142px;
}
.it-img{
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
.it-star{
  font-size: 14px;
}

</style>

