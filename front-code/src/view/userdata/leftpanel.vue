<template>
  <Sider ref="leftMenu" class="slide">
    <Menu theme="dark" :active-name="activeName" :open-names="openName">
        <div v-for="(item,index) in toolMenu" :key="index">
          <Submenu v-if="item.children" :name="item.to">
            <template slot="title">
                {{item.name}}
            </template>
            <MenuItem :name="m.to" :to="m.to" v-for="(m,n) in item.children" :key="n">{{m.name}}</MenuItem>
          </Submenu>
          <MenuItem v-else :name="item.to" :to="item.to"> {{item.name}}</MenuItem>
        </div>
    </Menu>
  </Sider>
</template>

<script>
export default {
  data () {
    return {
      activeName: '', // 当前选中
      openName: ['BasicData'], // 默认展开二级-基础数据
      // 工具导航
      toolMenu: [
        {
          name: '首页',
          to: '/index'
        },
        {
          name: '基础数据',
          to: 'BasicData',
          children: [
            {
              name: '单位管理',
              to: '/Company'
            },
            {
              name: '表具管理',
              to: '/Meter'
            },
            {
              name: '单价管理',
              to: '/Univalence'
            },
            {
              name: '统一调价',
              to: '/Unified'
            },
            {
              name: '集中器管理',
              to: '/Concentrator'
            },
            {
              name: '表具回收站',
              to: '/Recovery'
            }
          ]
        },
        {
          name: '业务管理',
          to: '/Business'
        },
        {
          name: '能源缴费',
          to: '/EnergyPayment'
        },
        {
          name: '报表管理',
          to: '/ReportManagement'
        },
        {
          name: '统计分析',
          to: '/StatisticalAnalysis'
        },
        {
          name: '告警管理',
          to: 'warning',
          children: [
            {
              name: '故障信息',
              to: '/fault'
            },
            {
              name: '断合闸信息',
              to: '/gate'
            }
          ]
        },
        {
          name: '通知公告',
          to: '/Notice'
        }
      ]
    }
  },
  mounted () {
    this.activeName = this.$route.path // 用name = path;
  }
}
</script>
<style>
*::-webkit-scrollbar {
  width: 0px;
}
.slide {
  min-height: calc(100vh - 50px);
  height: calc(100vh - 50px);
  overflow-y: auto;
  width:300px!important;
  min-width: 300px!important;
  max-width: 300px!important;
}
</style>
