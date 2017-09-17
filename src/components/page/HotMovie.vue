<template>
<div>
  <div class="hot">
    <h2>影院热映</h2>
    <section class="list">
      <Row>
          <Col span="8" class="list-item" v-for="mov in data_m" :key="mov.id">
            <router-link to="" class="item">
              <div><img class="item-img" :src="mov.images.medium" alt=""></div>
               <div><span class="item-sp">{{mov.title}}</span>
              <Rate class="it-star" disabled v-model="stars">
                </Rate>
               </div>
            </router-link>
          </Col>
      </Row>
    </section>
  </div>


</div>
</template>

<script>
import mov from '../../services/movie_page';

export default {
  data() {
    return{
      data_m:[],
      stars:3
    }
  },
  methods:{
    getMovies(){
      mov.getMovies((res)=>{
        // console.log(res.data.subjects)
        this.data_m = res.data.subjects
      })
    }
  },
  created() {
    this.getMovies();
  }
}
</script>
<style scoped>
  .hot{
    padding-left: 20px;
    overflow: hidden;
  }
  h2{
    padding: 20px 0;
  }
  .item{
    height: 175px;
    padding-bottom: 20px;
  }
  .item-img{
    height: 142px;
    width: 100px;
  }
  .item-sp{
    display: inline-block;
     width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  .it-star{
    font-size: 12px;
  }
 /* .ivu-rate-star{
    margin: 0px;
    padding: 0px;
    border: 0;
  }
   .ivu-rate-star-zero{
    margin: 0;
   } */
</style>

