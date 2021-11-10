<template>
  <HeaderNav/>
  <router-view v-slot="{ Component}">
    <keep-alive :include="vuexCacheView">
      <component :is="Component"/>
    </keep-alive>
  </router-view>

  <!-- 页脚 -->
  <Footer/>
</template>

<script lang="ts" setup>
import HeaderNav from "@/layout/HeaderNav.vue";
import Footer from "@/layout/Footer.vue";

</script>

<style>

</style>
