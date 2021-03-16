<template>
  <maxer-header title="留言板" static/>
  <div class="maxer-container">
    测试
  </div>
</template>

<script lang="ts">
/**
 * 名称: 留言板组件
 * 说明: 自定义页面 留言板
 * 作者: Seale
 * 时间: 2021/3/16
 * 版本: V1
 */
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";

export default defineComponent({
  name: "Comment",
  components: {MaxerHeader},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>