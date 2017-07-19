<template>
  <div>
    <router-link class="page-back"  :to="'/'">
      <i class="phoneui phoneui-back"></i>
    </router-link>

    <router-view></router-view>
  </div>
</template>
<style>
  @reset-global mobile;

  html, body {
    background-color: #000;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

<script type="text/babel">

  export default {
    computed: {
      visible() {
        return true
      }
    }
  }
</script>
