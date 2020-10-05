<template>
  <div class="tabBox">
    <el-tabs :tab-position="tabPosition" style="height: 100%;">
      <el-tab-pane label="导航栏">Hi 欢迎来到基金的世界</el-tab-pane>
      <el-tab-pane label="基金科普">基金科普</el-tab-pane>
      <el-tab-pane label="历史概况">历史概况</el-tab-pane>
      <el-tab-pane label="交易策略">交易策略</el-tab-pane>
      <el-tab-pane label="新兴科技">新兴科技</el-tab-pane>
      <el-tab-pane label="研究方向">研究方向</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>
