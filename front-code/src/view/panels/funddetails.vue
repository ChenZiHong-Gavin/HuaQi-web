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
                        <!-- <Tabs name="tab-2a" value="2a1">
                            <TabPane label="三个月" name="2a1" tab="tab-2a">三个月的内容</TabPane>
                            <TabPane label="近一年" name="2a1" tab="tab-2a">近一年的内容</TabPane>
                            <TabPane label="成立以来" name="2a1" tab="tab-2a">成立以来的内容</TabPane>
                        </Tabs> -->
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
                <p>基金档案</p>
                </Card>
                <Card :bordered="false">
                <p>基金经理</p>
                </Card>
                <Card :bordered="false">
                <p>投资分布</p>
                </Card>
            </div>
        </Split>
      </div>
    </div>
</template>
<script>
import Chart from './chart.vue'
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
      index: ''
    }
  },
  mounted () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 用index区别
      this.index = this.$route.query.index
    },
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
