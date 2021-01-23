<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>官方推荐模式</h2>
    <TestComponent/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";
export default defineComponent({
  name: 'About',
  components:{
    TestComponent
  }
})
</script>