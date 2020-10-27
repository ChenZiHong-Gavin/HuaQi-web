<template>
    <div class="fundtrade">
    <h1>优选基金</h1>
    <filter-table @on-search="onSearch"
                  border
                  :columns="columns1"
                  :data="historyData">
      <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
        </template>
    </filter-table>
    <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage" @on-page-size-change="changepagesize"></Page>
    </div>
</template>
<script>
import { showFundListReq } from '../../api/fund'
import FilterTable from '../mainPage/components/FilterTable.vue'
export default {
  components: { FilterTable },
  data () {
    return {
      columns1: [
        {
          // 基金名称
          title: '基金名称',
          key: 'name',
          filter: {
            type: 'Input'
          }
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
          name: 'test1'
        },
        {
          name: 'test2'
        },
        {
          name: 'test3'
        },
        {
          name: 'test4'
        },
        {
          name: 'test5'
        },
        {
          name: 'test6'
        },
        {
          name: 'test7'
        },
        {
          name: 'test8'
        },
        {
          name: 'test9'
        },
        {
          name: 'test10'
        },
        {
          name: 'test11'
        },
        {
          name: 'test12'
        }
      ],
      fundCodes: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 10,
      historyData: []
    }
  },
  methods: {
    onSearch (search) {
      // 查询数据
      var itemIndex = 1
      var index = this.data8.findIndex(function (item) {
        if (search.name === item.name) {
          return itemIndex
        } else {
          itemIndex = itemIndex + 1
        }
      })
      if (index === -1) {
        alert('没有该基金')
      } else {
        alert('该基金在第' + parseInt(index / this.pageSize + 1) + '页第' + (index % this.pageSize + 1) + '行')
      }
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
    },
    // 获取历史记录信息
    handleListApproveHistory () {
    // 保存取到的所有数据
      this.dataCount = this.data8.length
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (this.dataCount < this.pageSize) {
        this.historyData = this.data8
      } else {
        this.historyData = this.data8.slice(0, this.pageSize)
      }
    },
    changepage (index) {
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.historyData = this.data8.slice(_start, _end)
    },
    changepagesize (pageSize) {
      this.pageSize = pageSize
      this.handleListApproveHistory()
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
    this.handleListApproveHistory()
  }
}

</script>
