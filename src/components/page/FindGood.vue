<template>
  <div>
    <section class="find-gg">
      <header>
        <h2>发现好电影</h2>
      </header>
      <ul>
        <li style="border-color: #CC3344;">
          <a href="" style="color: #CC3344;"> 同时入选IMDB250和豆瓣电影250的电影</a>
        </li>
        <li>
          <a href="">带你进入不正常的世界</a>
        </li>
        <li>
          <a href="">用电【影】来祭奠逝去的岁月</a>
        </li>
        <li style="border-color: #FF4055;">
          <a href="" style="color: #FF4055;">女孩们的故事【电影】</a>
        </li>
        <br>
        <li style="border-color: #FFAC2D;">
          <a href="" style="color: #FFAC2D;">科幻是未来的钥匙——科幻启示录【科幻题材】</a>
        </li>
        <li>
          <a href="">美国生活面面观</a>
        </li>
        <li>
          <a href="">2015终极期待</a>
        </li>
        <li>
          <a href="">经典韩国电影——收集100部</a>
        </li>
      </ul>
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
.find-gg{
  height: 185px;
  overflow: hidden;
}
h2{
  padding-left: 1.12rem;
}
.find-gg ul{
  white-space: nowrap;
  overflow-x: auto;
  padding: 15px 15px 43px 15px;
  height: 170px;
}
.find-gg li {
  margin: 0 0 8px 8px;
  font-size: .94rem;
  display: inline-block;
  border-radius: .25rem;
  border: solid 1px;
  vertical-align: middle;
}
.find-gg a{
  height: 50px;
  line-height: 50px;
  padding: 0 1.55rem;
}
</style>
