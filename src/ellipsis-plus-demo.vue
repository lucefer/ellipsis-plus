<template>
  <div class="ellipsis-plus" ref="container">
    <span class="ellipsis-plus-txt" ref="txt">中</span><span class="ellipsis-plus-ellipsis" ref="ellipsis" :style="{'display':show?'none':'inline-block'}">{{ ellipsis }}</span><button class="ellipsis-plus-button" v-if="showButton" :style="{ 'margin-left' : (show ? (marginLeft+'px'):collapseMarginLeft+'px')}" ref="more" @click="handleClick">{{ show ? collapseText: expandText }}</button>
  </div>
</template>
<script>
  export default {
    name: 'ellipsis-demo',
    props: {
      text: String,
      line: {
        type: Number,
        default: 2
      },
      ellipsis: {
        type: String,
        default: '...'
      },
      showButton: {
        type: Boolean,
        default: true
      },
      expandText: {
        type: String,
        default: '展开全部',
        validator(value) {
          return value && value.trim().length
        }
      },
      collapseText: {
        type: String,
        default: '收起',
        validator(value) {
          return value && value.trim().length
        }
      }
    },
    data() {
      return {
        tmpTxt: '',
        show: false,
        marginLeft: 0,
        collapseMarginLeft: 0
      }
    },
    created() {

    },
    mounted() {
      if (!this.line) {
        return
      }
      let everywidth = this.$refs.txt.offsetWidth
      let lineHeight = this.$refs.container.offsetHeight
      this.$refs.txt.innerHTML = this.text
      let containerWidth = this.$refs.container.offsetWidth
      let btnWidth = 0
      let btnWidthExpand = 0
      let ellipsisWidth = this.$refs.ellipsis.offsetWidth
      if (this.showButton) {
        btnWidthExpand = btnWidth = Math.ceil(parseFloat(getComputedStyle(this.$refs.more, null)['width'].replace('px', '')))
        this.$refs.ellipsis.style.display = 'none'
        let left = 0
        let btnClone = this.$refs.more.cloneNode()
        if (this.expandText !== this.collapseText) {
          this.$refs.more.style.display = 'none'
          btnClone.innerHTML = this.collapseText
          btnClone.style.display = 'inline-block'
          this.$refs.container.appendChild(btnClone)
          btnWidthExpand = Math.ceil(parseFloat(getComputedStyle(btnClone, null)['width'].replace('px', '')))
          left = btnClone.offsetLeft
        }
        // 魔法数字 5
        if (btnClone.offsetTop <= this.$refs.ellipsis.offsetTop + 5) {
          this.marginLeft = (containerWidth - btnWidthExpand - left + ellipsisWidth)
        } else {
          this.marginLeft = containerWidth - btnWidthExpand - left
        }
        btnClone.remove()
        this.$refs.more.style.display = 'inline-block'
        this.$refs.ellipsis.style.display = 'inline-block'
      }

      let style = getComputedStyle(this.$refs.container, null)
      // let lineHeight = parseFloat(style['lineHeight'].replace('px', ''))

      this.$refs.txt.innerHTML = this.text
      if (Math.floor(this.$refs.container.offsetHeight / lineHeight) <= this.line) {
        this.tmpTxt = this.text
        this.show = true
        this.showButton = false
        return
      }
      let initNum = Math.floor((containerWidth * this.line - btnWidth - ellipsisWidth) / everywidth)
      let increase = 1
      initNum = 1
      this.$refs.txt.innerHTML = this.text.substr(0, initNum)

      if (Math.round(this.$refs.container.offsetHeight / lineHeight) > this.line) {
        increase = -1
      }
      let i
      i = initNum
      let ready = false
      let timer = setInterval(() => {

        if (i > this.text.length) {
          clearInterval(timer)
          return
        }
        i = i + increase

        if (i < 0 || i > this.text.length) {
          return
        }
         this.$refs.txt.innerHTML =  this.text.substr(0, i)
        if (increase === 1 && Math.round(this.$refs.container.offsetHeight / lineHeight) > this.line) {
          if (!ready) {
            ready = true
            // return
          } else {
            this.tmpTxt = this.text.substr(0, i - 2)
            this.$refs.txt.innerHTML = this.tmpTxt
            if (this.showButton) {
              let left = this.$refs.more.offsetLeft
              this.collapseMarginLeft = containerWidth - btnWidth - left - 1
            }
            clearInterval(timer)
           return
          }

        } else if (increase === -1 && Math.round(this.$refs.container.offsetHeight / lineHeight) === this.line) {
          if (!ready) {
            ready = true
            // return
          } else {
            this.tmpTxt = this.text.substr(0, i + 1)
            this.$refs.txt.innerHTML = this.tmpTxt
            if (this.showButton) {
              let left = this.$refs.more.offsetLeft
              this.collapseMarginLeft = containerWidth - btnWidth - left - 1
            }
            clearInterval(timer)
            return
          }

        }
      }, 300)
    },
    methods: {
      handleClick() {
        if (this.show) {
          this.collapse()
        } else {
          this.expand()
        }
      },
      expand() {
        if (!this.show) {
          this.show = true
          this.$refs.txt.innerHTML = this.text
        }
      },
      collapse() {
        if (this.show) {
          this.show = false
          this.$refs.txt.innerHTML = this.tmpTxt
        }
      }
    }
  }
</script>

<style>
@component-namespace ellipsis {
  @component plus{
    width:100%;
    position: relative;
    line-height: 1.5;
    @descendent button {
      padding-top:0;
      padding-bottom:0;
      border:0;
      font-size: 1em;
      vertical-align: middle;
      color: #8590a6;
      outline: none;
      line-height: 1;
      background-color: transparent
    }
    @descendent ellipsis{
      display: inline-block
    }
    @descendent txt {
      font-size: inherit;
    }
  }

}
</style>
