<template>
  <HeaderNav/>
  <div class="maxer-container">
    测试容器大小
  </div>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderNav from "@/components/HeaderNav.vue";

export default defineComponent({
  name: 'App',
  components:{HeaderNav}
})
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss">


.flex{
  display: flex;
  a{
    margin-right: 10px;
  }
}
.flex.jc-c{
  justify-content: center;
}
.mr-10{
  margin-right: 10px;
}
</style>