<template>
  <div id="app">
  <div class="stars"></div>
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
import $ from 'jquery'
export default {
  name: 'App',
  data () {
    return {
      buttonSize: 'large',
      showname: false
    }
  },
  mounted: function () {
    $(document).ready(function () {
      var stars = 1600 /* 星星的密集程度，数字越大越多 */
      var $stars = $('.stars')
      var r = 800 /* 星星的看起来的距离,值越大越远,可自行调制到自己满意的样子 */
      for (var i = 0; i < stars; i++) {
        var $star = $('<div/>').addClass('star')
        $stars.append($star)
      }
      $('.star').each(function () {
        var cur = $(this)
        var s = 0.2 + (Math.random() * 1)
        var curR = r + (Math.random() * 300)
        cur.css({
          transformOrigin: '0 0 ' + curR + 'px',
          transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + (Math.random() * 360) + 'deg) rotateX(' + (Math.random() * -50) + 'deg) scale(' + s + ',' + s + ')'
        })
      })
    })
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
body {
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
}

.star {
  width: 2px;
  height: 2px;
  background: #F7F7B6;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}
</style>
