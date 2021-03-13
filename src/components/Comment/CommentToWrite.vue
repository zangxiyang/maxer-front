<template>
  <div class="maxer-comment-writer">
    <h2 class="header">发布评论</h2>
    <div class="comment-write-container">
      <!--发布评论容器-->
      <comment-content/>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 评论组件 - 写评论
 * 说明:
 * 作者: Seale
 * 时间: 2021/3/3
 * 版本: V1
 */
import {defineComponent} from 'vue';
import CommentContent from "@/components/Comment/CommentContent.vue";

export default defineComponent({
  name: "CommentToWrite",
  components: {CommentContent},
  data() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-writer {
  .header {
    padding: 20px 30px;
    font-size: 1.3em;
  }

  }
</style>