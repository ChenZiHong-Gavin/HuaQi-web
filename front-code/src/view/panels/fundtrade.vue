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
    <h1>优选基金</h1>
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
import { showFundListReq } from '../../api/fund'
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
          title: '基金细节',
          slot: 'action',
          width: 150,
          align: 'left'
        }
      ],
      data8: [
        {
        // 基金名称
          name: '测试',
          // 单位净值
          value: '测试',
          // 日涨跌幅
          change: '测试',
          // 近一周收益
          profit: '测试'
        }
      ],
      fundCodes: []
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
          fundCode: this.fundCodes[index]
        }
      })
    }
  },
  mounted () {
    showFundListReq().then((res) => {
      console.log(res)
      for (let i = 0; i < res.data.data.length; i++) {
        this.fundCodes.push(res.data.data[i].first.fundCode)
        // 更新一下data8创建表格
        this.data8.push(
          {
            // 基金名称
            name: res.data.data[i].first.fundName,
            // 单位净值
            value: res.data.data[i].second.acValue,
            // 日涨跌幅
            change: res.data.data[i].second.allRate,
            // 近一周收益
            profit: res.data.data[i].second.value
          }
        )
      }
      console.log(this.fundCodes)
    })
  }
}

</script>
