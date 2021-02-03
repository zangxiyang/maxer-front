<template>
  <div class="maxer-we-chat">
    <we-chat-item/>
    <we-chat-item/>
    <we-chat-item/>
    <we-chat-item/>
    <we-chat-item/>
    <we-chat-item/>
    <we-chat-item/>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 首页微聊
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/3
 * 版本: V1
*/
import {defineComponent} from 'vue';
import WeChatItem from "@/components/WeChat/WeChatItem.vue";

export default defineComponent({
  name: "WeChat",
  components: {WeChatItem},
})
</script>

<style lang="scss" scoped>

</style>