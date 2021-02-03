<template>
<Header title="文章" desc="描述信息" background="https://velas-1252562537.file.myqcloud.com/images/jakob-owens.jpg!header_thumbnail"/>



  文章页面
</template>

<script lang="ts">
/**
 * 名称: 文章 View
 * 作者: Seale
 * 时间: 2021/1/30
 * 版本: V1
*/
import {defineComponent} from 'vue';
import Header from "@/layout/MaxerHeader.vue";

export default defineComponent({
  name: "Article",
  components: {Header},
})
</script>

<style lang="scss" scoped>

</style>