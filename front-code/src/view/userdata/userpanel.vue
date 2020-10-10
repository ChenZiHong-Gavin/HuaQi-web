<template>
    <div class="demo-split">
         <Card style="width:100%">
        <div style="text-align:center">
            <h3>用户信息</h3>
            <Card style="width:30%">
            <Avatar icon="ios-person" size="large" />
            </Card>
             <Card style="width:30%">
            <p>昵称：{{userData.username}}</p>
             </Card>
             <Card style="width:30%">
            <p>我的测评：{{userData.username}}</p>
            </Card>
             <Card style="width:30%">
            <p>我的投资组合: {{userData.username}}</p>
             </Card>
        </div>
    </Card>
    </div>
</template>
<script>
import { showUserReq } from '@/api/user'
export default {
  watch: {
    '$route': 'getParams'
  },
  data () {
    return {
      split3: 0.3,
      split4: 0.5,
      spikeList: [],
      // 定义一个数组用于存放接口传递过来的数据
      userid: ''
    }
  },
  computed: {
    // spikeList发生变化，就可以重新渲染
    userData: function () {
      return this.spikeList
    }
  },
  mounted () {
    this.getParams()
    this.http(this.userid)
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      const id = this.$route.query.id
      this.userid = id
      // 将数据放在当前组件的数据内
    },
    http (idnum) {
      // 这个方法名可以自定义，不一定要叫http
      showUserReq(idnum).then(res => {
        console.log(res)
        let data = res.data
        // 第一个.data是进入数据
        // 如果不清楚可以console.log(res)看看结构
        this.spikeList = data
        // 将取到的接口中某个数据存入数组
        console.log(data)
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
