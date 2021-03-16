<template>
  <maxer-header title="留言板" static/>
  <div class="maxer-container">
    <div class="maxer-comment-container">
      <comment-list message-board/>
      <comment-content/>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 留言板组件
 * 说明: 自定义页面 留言板
 * 作者: Seale
 * 时间: 2021/3/16
 * 版本: V1
 */
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";
import CommentList from "@/components/Comment/CommentList.vue";
import CommentContent from "@/components/Comment/CommentContent.vue";

export default defineComponent({
  name: "Comment",
  components: {CommentContent, CommentList, MaxerHeader},
  provide(){
    return{
      commentReplyStatus: false,
      commentReplyUserName: '测试用户'
    }
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-container{
  margin: 20px 0;
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 20px;
}
</style>