<template>
<div class="wrap" id="wrap">
        <div class="logGet">
            <!-- 头部提示信息 -->
            <div class="logD logDtip">
                <p class="p1">欢迎来到Endorse</p>
            </div>
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
            <!-- 输入框 -->
            <div class="lgD">
                <FormItem prop="username">
                <img src="../assets/logos/login.png" width="20" height="20" alt="" />
                <input type="text" v-model="formCustom.username" placeholder="请输入你的用户名" />
                 </FormItem>
            </div>
            <div class="lgD">
                <FormItem prop="password">
                <img src="../assets/logos/password.png" width="20" height="20" alt="" />
                <input type="password" v-model="formCustom.password" placeholder="输入你的用户密码" />
                </FormItem>
            </div>
            <div class="lgD">
                <FormItem prop="passwordCheck">
                <img src="../assets/logos/verify.png" width="20" height="20" alt="" />
                <input type="password" v-model="formCustom.passwordCheck" placeholder="请再次输入密码" />
                </FormItem>
            </div>
            </Form>
            <div class="logC">
                <a><button @click="handleRegister('formCustom')">注 册 </button></a>
            </div>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
        </div>
</div>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入你的密码'))
      } else {
        if (this.formCustom.passwordCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再一次输入你的密码'))
      } else if (value !== this.formCustom.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      formCustom: {
        username: '',
        password: '',
        passwordCheck: ''
      },
      ruleCustom: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ],
        passwordCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    gotoLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    handleRegister (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style>
* {
        margin: 0 auto;
        padding: 0;
    }
    #wrap {
        height: 600px;
        width: 100%;
        background-position: center center;
        position: relative;
        display: flex;
        justify-content: center;
    }
    #head {
        height: 120px;
        width: 100%;
        background-color: #66CCCC;
        text-align: center;
        position: relative;
    }
    #wrap .logGet {
        height: 408px;
        width: 368px;
        position: absolute;
        background-color: #FFFFFF;
        top: 50px;
    }
    .logC a button {
        width: 100%;
        height: 45px;
        background-color: #5cadff;
        border: none;
        color: white;
        font-size: 18px;
    }
    .logGet .logD.logDtip .p1 {
        display: inline-block;
        font-size: 28px;
        margin-top: 30px;
        width: 86%;
    }
    #wrap .logGet .logD.logDtip {
        width: 86%;
        border-bottom: 1px solid #5cadff;
        margin-bottom: 60px;
        margin-top: 0px;
        margin-right: auto;
        margin-left: auto;
    }
    .logGet .lgD img {
        position: absolute;
        top: 12px;
        left: 8px;
    }
    .logGet .lgD input {
        width: 100%;
        height: 42px;
        text-indent: 2.5rem;
    }
    #wrap .logGet .lgD {
        width: 86%;
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
    }
    #wrap .logGet .logC {
        width: 86%;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }
    .title {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        font-size: 36px;
        height: 40px;
        width: 30%;
    }
    .copyright {
        font-family: "宋体";
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 使用css3的transform来实现 */
        height: 60px;
        width: 40%;
        text-align: center;
    }
    .login {
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #1ab2ff;
        cursor: pointer;
        text-align: center;
        text-indent: 8px;
    }
</style>
