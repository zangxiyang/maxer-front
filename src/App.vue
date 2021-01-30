<template>
  <HeaderNav/>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
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
  components:{Footer, HeaderNav}
})
</script>

<style>

</style>
