<template>
  <HeaderNav/>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
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

</style>
