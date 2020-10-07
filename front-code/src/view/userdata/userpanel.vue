<template>
    <div class="demo-split">
        <Split v-model="split3">
            <div slot="left" class="demo-split-pane no-padding">
                <Split v-model="split4" mode="vertical">
                    <div slot="top" class="demo-split-pane">
                        Top Pane
                        <Avatar icon="ios-person" size="large" />
                    </div>
                    <div slot="bottom" class="demo-split-pane">
                        Bottom Pane
                        <p>昵称</p>
                        <p>绑定手机号</p>
                        <p>设置</p>
                        <p>我的测评</p>
                    </div>
                </Split>
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
                <br>
                <Button type="info">开始测评</Button>
            </div>
        </Split>
    </div>
</template>
<script>
export default {
  data () {
    return {
      split3: 0.3,
      split4: 0.5
    }
  }
}
</script>
<style>
    * {
        margin: 0 auto;
        padding: 0;
    }
    .demo-split{
        height: 600px;
        width: 100%;
        background-position: center center;
        position: relative;
        display: flex;
        justify-content: center;
        top: 50px;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 200px;
        padding: 0;
    }
</style>
