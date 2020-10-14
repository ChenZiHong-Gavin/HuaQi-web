<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <div class="fundtrade">
    <p>优选基金</p>
    <Table border :columns="columns1" :data="data8">
      <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
        </template>
    </Table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          // 基金名称
          title: '基金名称',
          key: 'name'
        },
        {
          // 单位净值
          title: '单位净值',
          key: 'value'
        },
        {
          // 日涨跌幅
          title: '日涨跌幅',
          key: 'change'
        },
        {
          // 近一周收入
          title: '近一周收入',
          key: 'profit'
        },
        {
          // action
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data8: [
        {
          name: 'NJU奖学金',
          value: 100000,
          change: 'default',
          profit: 'default'
        },
        {
          name: 'NJU奖学金',
          value: 80000,
          change: 'default',
          profit: 'default',
          cellClassName: {
            value: 'demo-table-info-cell-age',
            change: 'demo-table-info-cell-address'
          }
        },
        {
          name: 'PKU奖学金',
          value: 1,
          change: 'default',
          profit: 'default'
        },
        {
          name: 'PKU奖学金',
          value: 1,
          change: 'default',
          profit: 'default',
          cellClassName: {
            name: 'demo-table-info-cell-name'
          }
        }
      ]
    }
  },
  methods: {
    rowClassName (row, index) {
      if (index === 1) {
        return 'demo-table-info-row'
      } else if (index === 3) {
        return 'demo-table-error-row'
      }
      return ''
    },
    show (index) {
      // 这里调用的方法根据index区别
      // this.$Modal.info({
      //   title: 'User Info',
      //   content: ''
      // })
      this.$router.push({
        path: '/funddetails',
        query: {
          // 用query方式向下一个组件传递数据
          index: index
        }
      })
    }
  }
}

</script>
