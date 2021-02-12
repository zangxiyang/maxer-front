<template>
  <maxer-header static title="出错了"/>
  <div class="maxer-container">404</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";

export default defineComponent({
  name: "NotFound",
  components: {MaxerHeader},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>