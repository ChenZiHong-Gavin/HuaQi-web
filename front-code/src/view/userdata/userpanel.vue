<template>
    <div class="demo-split">
         <Card style="width:100%">
        <div style="text-align:center">
            <h3>用户信息</h3>
            <Card style="width:30%">
            <Avatar icon="ios-person" size="large" />
            </Card>
             <Card style="width:30%">
            <p>昵称：{{username}}</p>
             </Card>
             <Card style="width:30%">
            <p  @click="gotoTestpage">我的测评</p>
            </Card>
             <Card style="width:30%">
            <p>我的投资组合</p>
             </Card>
              <Card style="width:30%">
            <p @click="gotoIndex">退出登录</p>
             </Card>
        </div>
    </Card>
    </div>
</template>
<script>
import { showUserReq } from '@/api/user'
import globalDefault from '../../Global'
export default {
  watch: {
    '$route': 'getParams'
  },
  data () {
    return {
      split3: 0.3,
      split4: 0.5,
      userId: '',
      username: ''
    }
  },
  mounted () {
    this.getParams()
    this.http(this.userId)
  },
  methods: {
    gotoTestpage () {
      this.$router.push({
        path: '/testpage'
      })
    },
    gotoIndex () {
      this.$router.push({
        path: '/'
      })
      this.$router.go(0)
    },
    getParams () {
      // 通过全局变量获取用户和其id
      this.userId = globalDefault.user.id
    },
    http (idnum) {
      // 这个方法名可以自定义，不一定要叫http
      showUserReq(idnum).then(res => {
        console.log(res)
        this.username = globalDefault.user.username
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
    .demo-split{
        height: 600px;
        width: 100%;
        background-position: center center;
        position: relative;
        display: flex;
        justify-content: center;
        top: 50px;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 200px;
        padding: 0;
    }
</style>
