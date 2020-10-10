//综上所述，使用创建好的组件的步骤为：
//1、import引入组件
//2、在components中挂载组建
//3、在template模板中使用组件
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
   <Button type="primary">登录</Button>
  </router-link>
  <router-link to="/test">
   <Button type="primary">开始测试</button>
  </router-link>
  <router-view></router-view>
    </Affix>
  </div>
</template>

<script>
import Pictures from './view/mainPage/components/pictures.vue'
export default {
  name: 'App',
  data () {
    return {
      buttonSize: 'large'
    }
  },
  components: {
    'v-pictures': Pictures
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
