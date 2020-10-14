<template>
    <Tabs type="card">
        <TabPane label="所有组合">
            <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:300px;"></div>
            </el-col>
        </el-row>
    </section>
        <section class="chart-container2">
        <el-row>
            <el-col :span="12">
                <div id="chartPie2" style="width:100%; height:300px;"></div>
            </el-col>
        </el-row>
    </section>
     <section class="chart-container3">
        <el-row>
            <el-col :span="12">
                <div id="chartPie3" style="width:100%; height:300px;"></div>
            </el-col>
        </el-row>
    </section>
        </TabPane>
        <TabPane label="我的推荐">
          <p>我的测评报告</p>
          <p>推荐组合</p>
        </TabPane>
    </Tabs>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartPie: null,
      chartPie2: null,
      chartPie3: null
    }
  },
  methods: {
    drawPieChart () {
      this.chartPie = echarts.init(document.getElementById('chartPie'))
      this.chartPie2 = echarts.init(document.getElementById('chartPie2'))
      this.chartPie3 = echarts.init(document.getElementById('chartPie3'))
      this.chartPie.setOption({
        title: {
          text: 'Pie Chart',
          subtext: '组合1',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金1', '基金2', '基金3', '基金4', '基金5']
        },
        series: [
          {
            name: '基金名称',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金1' },
              { value: 310, name: '基金2' },
              { value: 234, name: '基金3' },
              { value: 135, name: '基金4' },
              { value: 1548, name: '基金5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      this.chartPie2.setOption({
        title: {
          text: 'Pie Chart',
          subtext: '组合2',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金1', '基金2', '基金3', '基金4', '基金5']
        },
        series: [
          {
            name: '基金名称',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金1' },
              { value: 310, name: '基金2' },
              { value: 234, name: '基金3' },
              { value: 135, name: '基金4' },
              { value: 1548, name: '基金5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      this.chartPie3.setOption({
        title: {
          text: 'Pie Chart',
          subtext: '组合3',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金1', '基金2', '基金3', '基金4', '基金5']
        },
        series: [
          {
            name: '基金名称',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金1' },
              { value: 310, name: '基金2' },
              { value: 234, name: '基金3' },
              { value: 135, name: '基金4' },
              { value: 1548, name: '基金5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawCharts () {
      this.drawPieChart()
    }
  },
  mounted: function () {
    this.drawCharts()
  },
  updated: function () {
    this.drawCharts()
  }
}
</script>
<style>
    .chart-container {
        width: 100%;
        float: left;
    }
    .chart-container2 {
        width: 100%;
        float: left;
    }
    .chart-container3 {
        width: 100%;
        float: left;
    }
    .el-col {
        padding: 30px 20px;
    }
</style>
