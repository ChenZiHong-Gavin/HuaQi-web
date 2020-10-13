<template>
  <div class="test">
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">1.您的预期投资金额是（单位：元）</p>
            <Input v-model="content.value1" clearable style="width: 200px" />
        </Card>
         <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">2.您的预期投资期限是（单位：年）</p>
            <Input v-model="content.value2" clearable style="width: 200px" />
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">3.您的家庭年可支配收入约为：</p>
        <RadioGroup v-model="content.value3" vertical>
        <Radio label="7.5">
        <span>a.15万元以下</span>
        </Radio>
        <Radio label="22.5">
        <span>b.15万-30万元</span>
        </Radio>
        <Radio label="40">
        <span>c.30万-50万元</span>
        </Radio>
        <Radio label="75">
        <span>d.50万-100万元</span>
        </Radio>
        <Radio label="150">
        <span>e.100万元以上</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">4.您的家庭总资产约为</p>
        <RadioGroup v-model="content.value4" vertical>
        <Radio label="100">
        <span>a.0-200万</span>
        </Radio>
        <Radio label="350">
        <span>b.200-500万</span>
        </Radio>
        <Radio label="750">
        <span>c.500万-1000万</span>
        </Radio>
        <Radio label="2000">
        <span>d.1000万-3000万</span>
        </Radio>
        <Radio label="5000">
        <span>e.3000万以上</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">5.您的投资经历为？</p>
        <RadioGroup v-model="content.value5" vertical>
        <Radio label="1.25">
        <span>a.无</span>
        </Radio>
        <Radio label="1.5">
        <span>b.1-3年</span>
        </Radio>
        <Radio label="1.75">
        <span>c.3-5年</span>
        </Radio>
        <Radio label="2">
        <span>d.5年以上</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
        <p slot="title">6.您的家庭负债率约为？</p>
        <RadioGroup v-model="content.value6" vertical>
        <Radio label="0.075">
        <span>a.0-15%</span>
        </Radio>
        <Radio label="0.225">
        <span>b.15%-30%</span>
        </Radio>
        <Radio label="0.4">
        <span>c.30%-50%</span>
        </Radio>
        <Radio label="0.75">
        <span>d.50%以上</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">7.您的职业是？</p>
            <RadioGroup v-model="content.value7" vertical>
        <Radio label="0.15">
        <span>a.公务员、事业单位职员、国有企业职员等收入来源稳定的工作</span>
        </Radio>
        <Radio label="0.12">
        <span>b.私营企业、个体户等存在一定收入波动的工作</span>
        </Radio>
        <Radio label="0.1">
        <span>c.自由工作者等收入波动范围较大的工作</span>
        </Radio>
        <Radio label="0.05">
        <span>d.学生或退休/失业/无业/全职主妇、主夫</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">8.您是否系统地学习过一些专业的投资理论？</p>
        <RadioGroup v-model="content.value8" vertical>
        <Radio label="0.3">
        <span>是</span>
        </Radio>
        <Radio label="0">
        <span>否</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
        <p slot="title">9.您的年龄大约是？</p>
        <RadioGroup v-model="content.value9" vertical>
        <Radio label="4">
        <span>a.小于等于30岁</span>
        </Radio>
        <Radio label="3">
        <span>b.30岁-40岁</span>
        </Radio>
        <Radio label="2">
        <span>c.40岁-55岁</span>
        </Radio>
        <Radio label="1">
        <span>d.55岁以上</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
        <p slot="title">10.当你的亏损率达到10%-15%时，你的心理状态可能是：</p>
        <RadioGroup v-model="content.value10" vertical>
        <Radio label="1">
        <span>a.夜不能寐，十分纠结</span>
        </Radio>
        <Radio label="2">
        <span>b.情绪低落，感到遗憾</span>
        </Radio>
        <Radio label="3">
        <span>c.判断失误，权当学费</span>
        </Radio>
        <Radio label="4">
        <span>d.有盈有亏，正常</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
        <p slot="title">11.可承受的最大亏损:</p>
        <RadioGroup v-model="content.value11" vertical>
        <Radio label="1">
        <span>a.不愿承受亏损</span>
        </Radio>
        <Radio label="2">
        <span>b.5%-10%</span>
        </Radio>
        <Radio label="3">
        <span>c.10%-30%</span>
        </Radio>
        <Radio label="4">
        <span>d.>30%</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
         <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
        <p slot="title">12.您的理财投资目标为：</p>
        <RadioGroup v-model="content.value12" vertical>
        <Radio label="1">
        <span>a.在保证资产安全性的基础上获得固定收益</span>
        </Radio>
        <Radio label="2">
        <span>b.获得一定增值，同时波动适度的年回报</span>
        </Radio>
        <Radio label="3">
        <span>c.注重长期收益，对短期盈亏不敏感</span>
        </Radio>
        <Radio label="4">
        <span>d.追求高回报，并愿意为此承担风险</span>
        </Radio>
        </RadioGroup>
        </Card>
    </div>
         <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">13.您当前主要投资工具？</p>
        <RadioGroup v-model="content.value13" vertical>
        <Radio label="1">
        <span>a.存款、国债</span>
        </Radio>
        <Radio label="2">
        <span>b.普通债权</span>
        </Radio>
        <Radio label="3">
        <span>c.股票</span>
        </Radio>
        <Radio label="4">
        <span>d.期货</span>
        </Radio>
        </RadioGroup>
        </Card>
        <Button type="success" @click="handleSubmit()" long>SUBMIT</Button>
    </div>
    </div>
  </div>
</template>
<script>
import globalDefault from '../Global'
import {surveyReq} from '../api/user'
export default {
  data () {
    return {
      content: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      if (this.content.value1 === '' || this.content.value2 === '' || this.content.value3 === '' || this.content.value4 === '' || this.content.value5 === '' || this.content.value6 === '' || this.content.value7 === '' || this.content.value8 === '' || this.content.value9 === '' || this.content.value10 === '' || this.content.value11 === '' || this.content.value12 === '' || this.content.value13 === '') {
        this.$Message.error('请检查是否填写完整')
      } else {
        console.log(this.content)
        globalDefault.user.subjectiveRiskPreference = 0.05 * this.content.value9 + 0.15 * this.content.value10 + 0.3 * this.content.value11 + 0.3 * this.content.value12 + 0.2 * this.content.value13
        globalDefault.user.plannedInvestmentCycle = 12 * this.content.value2
        globalDefault.user.plannedTotalInvestmentAccount = this.content.value1
        let economicStrength = 1 - (this.content.value1 / (10000 * this.content.value4 * (1 - this.content.value6)) + 3 * this.content.value3)
        globalDefault.user.objectiveInvestmentPreference = economicStrength * (this.content.value5 + this.content.value7 + this.content.value8)
        console.log(globalDefault.user)
        surveyReq(globalDefault.user.username, globalDefault.user.password, globalDefault.user.subjectiveRiskPreference,
          globalDefault.user.objectiveInvestmentPreference, globalDefault.user.plannedInvestmentCycle, globalDefault.user.plannedTotalInvestmentAccount)
        this.$Message.success('提交成功')
        this.$router.push('/userpanel')
      }
    }
  }
}
</script>
