<template>
  <div class="maxer-comment-list">
    <h2 class="header" :style="{textAlign: messageBoard? 'center':''}">当前共有{{ commentsCount }}条<template v-if="messageBoard">留言</template><template v-else>评论</template></h2>
    <div class="comment-list-container">
      <comment-item/>
      <comment-item/>
      <comment-item/>
      <comment-item/>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 评论组件 - 评论列表
 * 说明:
 * 作者: Seale
 * 时间: 2021/3/3
 * 版本: V1
 */
import {defineComponent} from 'vue';
import CommentItem from "@/components/Comment/CommentItem.vue";

export default defineComponent({
  name: "CommentList",
  components: {CommentItem},
  props: {
    messageBoard: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      commentsCount: 0,
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-list {
  .header {
    padding: 20px 30px;
    font-size: 1.3em;
  }

  .comment-list-container {
    padding: 20px 30px;
    margin: 0 15px;
  }
}
</style>