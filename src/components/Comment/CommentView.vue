<template>
  <el-row type="flex" :gutter="10" v-if="!noneCol">
    <el-col :lg="19">
      <div class="maxer-comment" style="min-height: 300px;">
        <!--发布评论-->
        <comment-to-write/>
        <!--评论列表-->
        <comment-list/>
        <div class="maxer-pagination f-jc-c">
          <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
  <template v-else>
    <div class="maxer-comment" style="min-height: 300px;">
      <!--发布评论-->
      <comment-to-write/>
      <!--评论列表-->
      <comment-list/>
      <div class="maxer-pagination f-jc-c">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </div>
  </template>

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
  props:{
    noneCol: {
      type: Boolean,
      default: false
    }
  },
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
    .maxer-pagination{
      padding: 20px 30px;
      ::v-deep{
        .el-pagination{
          .btn-prev,.btn-next{
            background-color: transparent;
            transition: background-color .3s linear, color .3s linear;
            -webkit-transition: background-color .3s linear, color .3s linear;
            &:hover{
              background-color: #505050;
              color: #eee;
            }
            &[disabled]{
              background-color: #f4f4f5;
              color: #606266;

            }
          }
          .el-pager li:not(.disabled).active{
            background-color: #505050;
            color: #eee;
          }
          .el-pager{
            .number{
              background-color: transparent;
              transition: background-color .3s linear;
              -webkit-transition: background-color .3s linear;
              &:hover{
                background-color: #f4f4f5;
                color: #606266;
              }
            }
            li{
              background-color: transparent;
              transition: background-color .3s linear;
              -webkit-transition: background-color .3s linear;
              &:hover{
                background-color: #f4f4f5;
                color: #606266;
              }
            }
          }
        }
      }
    }
  }
</style>