<template>
    <div class="wrap" id="wrap">
        <div class="logGet">
            <!-- 头部提示信息 -->
            <div class="logD logDtip">
                <p class="p1">欢迎来到Endorse</p>
            </div>
            <!-- 输入框 -->
          <Form ref="formInline" :model="formInline" :rules="ruleInline" @keyup.native.enter="handleLogin('formInline')">
            <div class="lgD">
               <FormItem prop="username">
                <img src="../assets/logos/login.png" width="20" height="20" alt="" />
                <input type="text" v-model="formInline.username" placeholder="输入用户名" />
               </FormItem>
            </div>
            <div class="lgD">
              <FormItem prop="password">
                <img src="../assets/logos/password.png" width="20" height="20" alt="" />
                <input type="password" v-model="formInline.password" placeholder="输入用户密码" />
              </FormItem>
            </div>
            <div class="lgD">
              <FormItem prop="vcode">
                <img src="../assets/logos/verify.png" width="20" height="20" alt="" />
                <input type="text" v-model="formInline.vcode" placeholder="输入验证码" />
              </FormItem>
            </div>
          </Form>
            <div class="login-code" @click="refreshCode">
                <v-verify ref="verify"/>
            </div>
            <div class="logC">
                <a><button @click="handleLogin('formInline')" >登 录</button></a>
            </div>
            <p class="register" @click="gotoReg">没有账号？立即注册</p>
        </div>
    </div>
</template>

<script>
// 引入接口
import { loginReq } from '@/api/user'
import Verify from './verify.vue'
import globalDefault from '../Global'
export default {
  data () {
    const vcodeCheck = (rule, value, callback) => {
      // value = value.toUpperCase()
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== this.$refs.verify.identifyCode) {
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      formInline: {
        username: '',
        password: '',
        vcode: '',
        id: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ],
        vcode: [
          { validator: vcodeCheck, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    'v-verify': Verify
  },
  methods: {
    refreshCode () {
      this.$refs.verify.refreshCode()
    },
    gotoReg () {
      this.$router.push({
        path: '/register'
      })
    },
    gotoUserPanel () {
      this.$router.push({
        path: '/userpanel',
        query: {
          // 用query方式向下一个组件传递数据
          id: this.formInline.id
        }

      })
    },
    handleLogin (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.gotoUserPanel()
          // this.$Message.success('表单验证成功')
          // 测试：插入个人页面,应该放在登录成功的后面
          // loginReq的方法写在api/user.js里面
          loginReq(this.formInline.username, this.formInline.password).then((res) => {
            // console.log(res)
            // alert('登录成功')
            if (res.data.success) {
              this.formInline.id = res.data.data.id
              globalDefault.user.id = res.data.data.id
              globalDefault.user.username = res.data.data.username
              globalDefault.user.password = res.data.data.password
              // console.log(globalDefault.user)
              this.$Message.success('登录成功')
              this.gotoUserPanel()
            } else {
              this.refreshCode()
              this.$Message.error('用户名或密码错误')
            }
          })
        } else {
          // 刷新验证码
          this.refreshCode()
          // this.$Message.error('表单验证失败')
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
    .register {
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;
        color: #1ab2ff;
        cursor: pointer;
        text-align: center;
        text-indent: 8px;
    }
</style>
