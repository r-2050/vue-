<template>
  <div>
    <section>
      <div class="type-list">
        <header>
          <h2>分类浏览</h2>
        </header>
        <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 经典
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">冷门佳片
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>
        <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 豆瓣高分
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">动作
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>
        <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 喜剧
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">爱情
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>
        <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 悬疑
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">恐惧
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>

         <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 科幻
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">治愈
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>

         <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 文艺
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">成长
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>
         <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 动画
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">华语
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>

         <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 欧美
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">韩国
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
        </Row>

         <Row class="type-item">
          <Col class="col-it" span="12">
          <a href=""> 日本
            <Icon class="it-right" type="chevron-right" />
          </a>
          </Col>
          <Col span="12" class="col-right">
          <a href="">
            <!-- <Icon class="it-right" type="chevron-right" /> -->
          </a>
          </Col>
        </Row>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.type-list {
  padding-left: 18px;
}

.type-item {
  border-top: 1px solid #eee;
}

.col-it {
  padding-right: 1.12rem;
  border-right: 1px solid #eee;
}

.type-item a {
  line-height: 2.64rem;
  color: #42bd56;
  font-size: .9rem;
}

.it-right {
  float: right;
  line-height: 2.64rem;
  color: #eee;
}

.col-right {
  padding-left: 1.12rem;

}
</style>

