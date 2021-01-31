<template>
  <HeaderNav/>

  <!-- vue3.0配置 -->
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component"  v-if="route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component"  v-if="!route.meta.keepAlive"/>
  </router-view>

  <!-- 页脚 -->
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderNav from "@/components/HeaderNav.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {Footer, HeaderNav}
})
</script>

<style>

</style>
