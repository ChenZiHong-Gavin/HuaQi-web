<template>
  <div id="pictures">
   <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img v-bind:src="img.url">
    </el-carousel-item>
    </el-carousel>
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
    #pictures {
        width: 100%;
        justify-content: center;
        position: absolute;
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
