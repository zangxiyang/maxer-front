<template>
  <HeaderNav/>

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
body{
  background: #ff9999;
}
</style>
