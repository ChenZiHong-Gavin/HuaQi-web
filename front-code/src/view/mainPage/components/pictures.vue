<template>
<!-- 走马灯组件 -->
<div class="light">
  <div id="pictures">
   <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img v-bind:src="img.url">
    </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      imgList: [
        {url: require('../../../assets/images/timg.jpg')},
        {url: require('../../../assets/images/timg.jpg')},
        {url: require('../../../assets/images/timg.jpg')},
        {url: require('../../../assets/images/timg.jpg')}
      ]
    }
  }
}
</script>

<style>
    * {
        margin: 0 auto;
        padding: 0;
    }
    #light {
      text-align: center;
    }
    #pictures {
        margin: 0 auto;
        width: 100%;
        position: absolute;
        justify-content: center;    /*水平居中*/
        top: 100px;
    }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
