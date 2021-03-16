<template>
  <maxer-header/>
  <router-view v-slot="{ Component}">
    <keep-alive :include="vuexCacheView">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";

export default defineComponent({
  name: "HomeHeaderLayout",
  components: {MaxerHeader},
})
</script>

<style scoped>

</style>