<template>

  <home-aside-container
      icon="iconjingdongjinrongjinzhu"
      icon-size="30px"
      title="金主"
      class="aside-ads"
  >
    <template v-slot:default>
      <img src="https://cdn.sspai.com/article/cdf22533-05ec-c066-f95d-8e8f3315d09a.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!548x264r/gravity/Center/crop/548x264/interlace/1" alt="">
    </template>
  </home-aside-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import HomeAsideContainer from "@/components/homeAsideContainer.vue";

export default defineComponent({
  name: "asideAds",
  components: {HomeAsideContainer}
})
</script>

<style lang="scss" scoped>
.aside-ads{
  img{
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
}
</style>