<template>
  <el-row type="flex" :gutter="10">
    <el-col :lg="19">
      <div class="maxer-comment" style="min-height: 300px;">
        <!--发布评论-->
        <comment-to-write/>
        <!--评论列表-->
        <comment-list/>
      </div>
    </el-col>
  </el-row>

</template>

<script lang="ts">
/**
 * 名称: 评论组件视图
 * 说明:
 * 作者: Seale
 * 时间: 2021/3/3
 * 版本: V1
*/

import {defineComponent, ref} from 'vue';
import CommentToWrite from "@/components/Comment/CommentToWrite.vue";
import CommentList from "@/components/Comment/CommentList.vue";

export default defineComponent({
  name: "CommentView",
  components: {CommentList, CommentToWrite},
  data() {
    return {

    }
  },
  provide(){
    return{
      commentReplyStatus: ref(false),              // 当前回复的状态
      commentReplyUserName: ref('测试姓名'),        // 当前回复的用户名

    }
  }
})
</script>

<style lang="scss" scoped>
  .maxer-comment{
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 80px;
    box-sizing: border-box;
  }
</style>