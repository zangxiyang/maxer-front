<template>
  <div class="maxer-border-button" @click="emit('click')">
    <icon-font :name="icon" right="3px" v-if="showIcon"/>
    <span><slot/></span>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, withDefaults} from "vue";
import IconFont from "@/components/IconFont.vue";


const props = withDefaults(defineProps<{
  icon?: string,
  showIcon?: boolean
}>(),{
  showIcon: false,
})
const emit = defineEmits(['click'])

</script>

<style scoped>

</style>
