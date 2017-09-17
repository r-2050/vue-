<template>
  <div>
    <div class="header-inp">
      <Input class="inp" icon="ios-search-outline" v-model="value" placeholder="请输入搜索内容..." style="width: 300px;margin-left:20px;"></Input>
    </div>
    <div class="types-list">
      <Row class="list-item">
        <Col span="8">
        <a href="">
          <strong>电影</strong><br>
          <span>影院热映</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>电视</strong><br>
          <span>正在热播</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>图书</strong><br>
          <span>畅销排行</span>
        </a>
        </Col>
      </Row>
      <Row class="list-item">
        <Col span="8">
        <a href="">
          <strong>同城</strong><br>
          <span>周末活动</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>小组</strong><br>
          <span>知趣相投</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>音乐</strong><br>
          <span>新碟榜</span>
        </a>
        </Col>
      </Row>
      <Row class="list-item">
        <Col span="8">
        <a href="">
          <strong>阅读</strong><br>
          <span>电子书</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>游戏</strong><br>
          <span>虚拟世界</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>应用</strong><br>
          <span>玩游戏</span>
        </a>
        </Col>
      </Row>
      <Row class="list-item">
        <Col span="8">
        <a href="">
          <strong>东西</strong><br>
          <span>心爱之物</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>FM</strong><br>
          <span>红心歌单</span>
        </a>
        </Col>
        <Col span="8">
        <a href="">
          <strong>市级</strong><br>
          <span>购买原创</span>
        </a>
        </Col>
      </Row>
    </div>


    <div class="user-do">
      <Row class="using">
        <Col class="it" span="12"><router-link class="it-use" :to="{name:'Logon'}">注册帐号</router-link> </Col>
        <Col span="12"><router-link  class="it-use" :to="{name:'Login'}">登录豆瓣</router-link></Col>
      </Row>

      <Row class="using-way">
        <Col class="it" span="12"><router-link  class="it-use" :to="{}">使用桌面版</router-link></Col>
        <Col span="12"><router-link  class="it-use" :to="{}">使用豆瓣App</router-link></Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.header-inp {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.types-list {
  text-align: center;
  padding: 20px 0;
}

.types-list .list-item {
  padding-bottom: 15px;
}

.types-list strong {
  font-size: 24px;
}

.types-list span {
  color: #999;
  font-size: 12px;
}

.user-do {
  text-align: center;
  font-size: 15px;
}

.user-do .using {
  border-top: 1px solid #eee;
  padding: 13px;
}

.user-do .using-way {
  border: 1px solid #eee;
  padding: 13px;
}

.user-do .it{
  border-right: 1px solid #eee;
}
.it-use{
 color: #42bd56;
}
</style>

