<template>
  <div class="title-line-wrap">
    <div class="title-line"></div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: TitleLine动画组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/4
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "TitleLine"
})
</script>

<style lang="scss" scoped>
// title line
.title-line-wrap {
  box-sizing: border-box;
  width: 312px;
  margin: 0 auto;
  height: 2px;
  overflow: hidden;

  .title-line {
    box-sizing: inherit;
    width: 64px;
    height: 100%;
    background: linear-gradient(90deg, rgba(196, 175, 124,0) 0, #9c6328);
    transform: translateX(-64px);
    animation: titleLine 3s ease-in-out 1.5s infinite;
  }
}

@keyframes titleLine {
  0%,25% {
    transform: translateX(-64px)
  }

  75%,to {
    transform: translateX(376px)
  }
}
</style>