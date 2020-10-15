<template>
  <div id="app">
  <!-- 图钉功能，让组件一直在页面最上方 -->
  <Affix>
  <router-link to="/fundtrade">
    <Button :size="buttonSize" shape="circle" icon="md-trending-up" > 基 金 走 势 </Button>
  </router-link>
  <router-link to="/recommendedcombination">
    <Button :size="buttonSize" shape="circle" icon="md-list" > 智 投 组 合 </Button>
  </router-link>
  <router-link to="/aboutfunds">
    <Button :size="buttonSize" shape="circle" icon="logo-usd" > 关 于 基 金 </Button>
  </router-link>
  <router-link to="/login">
   <Button type="primary" v-if="!showname">登录</Button>
  </router-link>
  <router-link to="/userpanel">
  <Avatar icon="ios-person" size="large" v-if="showname"/>
  </router-link>
    </Affix>
  <!-- <router-link to="/">
   <Button type="primary">开始测试</button>
  </router-link> -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      buttonSize: 'large',
      showname: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
