<template>
  <div class="login-tem">
    <div class="d-h">
      <h2>登录豆瓣</h2>
    </div>

    <form action="">
      <p><input class="inp inp-name" type="text" placeholder="邮箱 / 手机号 / 用户名"></p>
      <p><input class="inp" type="text" icon="ios-eye-outline" placeholder="密码"></p>
      <p class="p-bu">
        <input class="p-sub" type="submit" placeholder="登录" value="登录">
        <!-- <button>登录</button> -->
      </p>
    </form>
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
.login-tem {
  text-align: center;
}

.d-h {
  padding: 20px;
}

.inp {
  border: 1px solid #ccc;
  height: 40px;
  width: 350px;
  border-radius: 5px;
}

.inp-name {
  border-radius: 5px;
}

 .p-sub {
  height: 40px;
  width: 350px;
  border-radius: 5px;
  color: #ffffff;
  background: #17AA52;

  margin-top: 20px;
}
</style>

