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
  <div class="maxer-we-chat-go-more f-jc-c mt-15">
    <button class="maxer-border-button">
      <icon-font name="iconicon1" size="20px" right="3px"/>
      <span>探索更多</span>
    </button>
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
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "WeChat",
  components: {IconFont, WeChatItem},
})
</script>

<style lang="scss" scoped>

</style>