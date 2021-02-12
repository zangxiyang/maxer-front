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

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderNav from "@/layout/HeaderNav.vue";
import Footer from "@/layout/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {Footer, HeaderNav},
  mounted() {
    //
  }
})
</script>

<style>

</style>
