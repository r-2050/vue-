<template>
  <div class="logon-tem">
    <Row class="header-h">
      <Col span="24">
      <h1>欢迎加入豆瓣</h1>
      </Col>
    </Row>
    <Form ref="formItem" :model="formItem" :rules="ruleCustom">
      <FormItem class="form-it" prop="input">
        <Input class="inp" v-model="formItem.input" placeholder="手机号 / 邮箱"></Input>
      </FormItem>
      <FormItem class="form-it" prop="password">
        <Input class="inp" v-model="formItem.password" placeholder="密码 （至少6位）"></Input>
      </FormItem>
      <FormItem class="form-it" prop="name">
        <Input class="inp" v-model="formItem.name" placeholder="昵称"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formItem')">提交</Button>
        <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        input: '',
        password: '',
        name: ''
      },
      ruleCustom: {
        input: [
          { required: true, message: '手机 / 邮箱不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '昵称不能为空', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
<style scoped>
.header-h {
  padding: 15px;
  font-size: 18px;
  font-weight: 300;
  color:  #42bd56;
}

.logon-tem {
  text-align: center;
}

.form-it {
  height: 43px;
}

.ivu-input {
  height: 40px;
  border: 10px;
  padding: 10px;
  font-size: 25px;
}
</style>

