<template>
  <maxer-header/>
  <router-view v-slot="{ Component, route}">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive"/>
  </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerHeader from "@/layout/MaxerHeader.vue";

export default defineComponent({
  name: "HomeHeaderView",
  components: {MaxerHeader},
})
</script>

<style scoped>

</style>