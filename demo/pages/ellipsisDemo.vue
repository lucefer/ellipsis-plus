<template>
  <div class="page-more">
    <div style = "color:#FFF;font-size:14px;background-color:#000;">
      <h6>无按钮</h6>
      <ellipsis-demo style="color:chartreuse" ref="moreDemo" :text="text" :line="2" :show-button="false">
      </ellipsis-demo>
    </div>
    <div>
      <h6>采用组件默认按钮</h6>
      <ellipsis-demo  ref="moreDemo" :text="text" :line="2">
      </ellipsis-demo>
    </div>
    <div>
      <h6>自定义按钮文字</h6>
      <ellipsis-demo ref="noButton" expand-text='哈哈'   :text="text" :line="2">
      </ellipsis-demo>
    </div>
    <div>
      <h6>在组件外部定义按钮</h6>
      <ellipsis-demo ref="noButton"   :show-button="false" :text="text" :line="2">
      </ellipsis-demo>
      <button class="outer-button" @click="expand">{{btnTxt}}</button>
    </div>
    <div>
      <h6>自定义省略符</h6>
      <ellipsis-demo  ref="moreDemo" :ellipsis="'。。。'" :text="text" :line="2">
      </ellipsis-demo>
    </div>
    <div>
      <h6>不带省略符</h6>
      <ellipsis-demo  ref="moreDemo" :ellipsis="''" :text="text" :line="2">
      </ellipsis-demo>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ellipsis',
    data() {
      return {
        text: '文本截断是我们前端经常会碰到的需求，有些字段文本比较长，设计师往往会在有限的空间内限制字符数量，以确保界面的美观性，设计师会在一些字符后面加上省略号来表示，这个时候我们前端往往就会使用',
        btnTxt: '',
        btnTxtExpand: '收起',
        btnTxtCollapse: '展开全部'
      }
    },
    created() {
      this.btnTxt = this.btnTxtCollapse
    },
    methods: {
      expand() {
        this.$refs.noButton.handleClick()
        this.btnTxt = this.$refs.noButton.show ? this.btnTxtExpand : this.btnTxtCollapse
      }
    }
  }
</script>

<style>
.page-more{
  padding: 15px;
  width: 375px;
  margin: 0 auto;
  font-family:Helvetica Neue,Microsoft Yahei,sans-serif;
  background: #000

}
.page-more >div {
  margin-bottom: 15px;
  border:1px solid #26a2ff;
  padding:15px;
  border-radius: 4px;
  box-shadow:0 0 5px #aaa
}
h6{
  margin:0;
  padding-bottom: 10px;
  text-align: center;
  font-size: 14px;
  color: #FFF;
}
.ellipsis-plus {
  font-size: 16px;
  color: chartreuse
}
.outer-button{
  margin-top: 10px;
}
</style>
