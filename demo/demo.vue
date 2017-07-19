<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <router-link
        v-for="item in group.list" class="nav"
        :to="item.path" :href="item.path"
        is-link>{{ item.name }}
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style>
/*
test
 */
  .page-demo .nav{
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 15px;

  }
  .page-demo {
    padding-bottom: 50px;
    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
  }
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }

    @component part {
      margin-bottom: 15px;
    }
  }
</style>

<script type="text/babel">
  import { navs } from './route'

  export default {
    data() {
      return {
        navs: []
      }
    },

    created() {
      this.navs = navs
    }
  }
</script>
