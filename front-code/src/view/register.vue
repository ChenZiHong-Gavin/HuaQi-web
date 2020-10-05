<template>
<div class="wrap" id="wrap">
        <div class="logGet">
            <!-- 头部提示信息 -->
            <div class="logD logDtip">
                <p class="p1">欢迎来到Endorse</p>
            </div>
            <!-- 输入框 -->
            <div class="lgD">
                <img src="../assets/logos/login.png" width="20" height="20" alt="" />
                <input type="text" placeholder="请输入你的用户名" />
            </div>
            <div class="lgD">
                <img src="../assets/logos/password.png" width="20" height="20" alt="" />
                <input type="text" placeholder="输入你的用户密码" />
            </div>
            <div class="lgD">
                <img src="../assets/logos/verify.png" width="20" height="20" alt="" />
                <input type="text" placeholder="请再次输入密码" />
            </div>
            <div class="logC">
                <a><button @click="register">注 册 </button></a>
            </div>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
        </div>
</div>
</template>

<script>
export default {
  methods: {
    gotoLogin () {
      this.$router.push({
        path: '/login'
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
        width: 100;
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
