<template>
  <div id="app">
    <!--iview 栅格  router-link标签 -->
    <Row class="nav-header">
      <Col span="8">
      <router-link :to="{name:'Hello'}" style="color: #00b600;font-size:24px;">豆瓣</router-link>
      </Col>
      <Col span="3">
      <router-link :to="{name:'Movie'}" style="color: rgb(35, 132, 232);">电影</router-link>
      </Col>
      <Col span="3">
      <router-link :to="{name:'Books'}" style="color: rgb(159, 120, 96);">图书</router-link>
      </Col>
      <Col span="3">
      <router-link :to="{name:'Status'}" style="color: rgb(228, 168, 19);">广播</router-link>
      </Col>
      <Col span="3">
      <router-link :to="{name:'Group'}" style="color: rgb(159, 120, 96);">小组</router-link>
      </Col>
      <Col span="4">
      <router-link :to="{name:'Search'}" style="color: #00b600; font-size:24px;">
        <Icon type="search"></Icon>
      </router-link>
      </Col>
    </Row>
    <!--路由出口  -->
    <div class="concent">

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  color: #2c3e50;
  font-size: 15px;
}

.nav-header {
  height: 47px;
  line-height: 47px;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
}

.concent {
  padding-top: 50px;
}
</style>
