<template>
    <div class="page-split">
    <div class="goBack">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>
    </div>
            <div slot="top" class="page-split-pane">
                <p>这里画折线图</p>
                <v-chart></v-chart>
            </div>
            <div slot="bottom" class="page-split-pane">
                <Split v-model="split1">
            <div slot="left" class="page-split-pane">
                <Tabs name="tab" value="a">
                    <TabPane label="历史业绩" name="a" tab="tab">
                    <Table :columns="columns1" :data="data1"></Table>
                    </TabPane>
                    <TabPane label="历史净值" name="b" tab="tab">
                        <!-- <Tabs name="tab-2b" value="2b1">
                            <TabPane label="三个月" name="2b1" tab="tab-2b">三个月的内容</TabPane>
                            <TabPane label="近一年" name="2b1" tab="tab-2b">近一年的内容</TabPane>
                            <TabPane label="成立以来" name="2b1" tab="tab-2b">成立以来的内容</TabPane>
                        </Tabs> -->
                    </TabPane>
                </Tabs>
            </div>
            <div slot="right" class="page-split-pane">
                <Card :bordered="false">
                <p>基金档案：{{file}}</p>
                </Card>
                <Card :bordered="false">
                <p>基金经理：{{manager}}</p>
                </Card>
                <Card :bordered="false">
                <p>投资分布：{{distribution}}</p>
                </Card>
            </div>
        </Split>
      </div>
    </div>
</template>
<script>
import Chart from './chart.vue'
import { showFundReq } from '../../api/fund'
export default {
  watch: {
    '$route': 'getParams'
  },
  components: {
    'v-chart': Chart
  },
  data () {
    return {
      split1: 0.5,
      split2: 0.5,
      // 基金档案
      file: '',
      // 基金经理
      manager: '',
      // 投资分布
      distribution: '',
      index: '',
      fundCode: '',
      detail: {},
      columns1: [
        {
          title: '时间区间',
          key: 'time'
        },
        {
          title: '涨跌幅',
          key: 'rate'
        },
        {
          title: '同类业绩排名',
          key: 'rank'
        }
      ],
      data1: [
        {
          time: '近1周',
          rate: '',
          rank: ''
        },
        {
          time: '近1月',
          rate: '',
          rank: ''
        },
        {
          time: '近3月',
          rate: '',
          rank: ''
        },
        {
          time: '近1年',
          rate: '',
          rank: ''
        }
      ]
    }
  },
  mounted () {
    this.fundCode = this.$route.query.fundCode
    showFundReq(this.fundCode).then((res) => {
      // console.log(this.detail)
      this.detail = res.data.data
      // console.log(this.detail)
      // 基金经理
      this.manager = this.detail.first.manager
      // 一段时间内涨跌幅
      this.data1[1].rate = this.detail.second.monthRate
      this.data1[2].rate = this.detail.second.threeMonthsRate
      this.data1[3].rate = this.detail.second.yearRate
    })
  },
  methods: {
    goBack () {
      this.$router.push({
        path: '/fundtrade'
      })
    }
  }
}
</script>
<style>
    .page-split{
        height: 400px;
        border: 1px solid #dcdee2;
    }
    .page-split-pane{
        padding: 10px;
    }
</style>
