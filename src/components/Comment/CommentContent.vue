<template>
  <div class="maxer-comment-content">
      <template v-if="commentReplyStatus.value">
        <!--回复-->
        <div class="title mt-10 mb-10">
          正在回复@{{commentReplyUserName.value}}
        </div>
      </template>
      <template v-else>
        <div class="title mt-10 mb-10 maxer-require">
          评论内容
        </div>
      </template>
    <div class="content">
      <textarea
          class="maxer-input"
          id="comment"
          v-model="replyText"
          placeholder="居然什么都不说，哼！"></textarea>
    </div>
    <div class="comment-info">
      <el-row type="flex" :gutter="15">
        <el-col :lg="8">
          <div class="info-nickname">
            <div class="title mb-5 maxer-require">昵称</div>
            <input class="maxer-input small auto" name="name"/>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="info-email">
            <div class="title mb-5 maxer-require">邮箱</div>
            <input class="maxer-input small auto" name="email"/>
          </div>
        </el-col>
        <el-col :lg="8">
          <div class="info-website">
            <div class="title mb-5 maxer-un-require">个人站点</div>
            <input class="maxer-input small auto" name="url"/>
          </div>
        </el-col>
      </el-row>
      <div class="operation-container flex al-c mt-15 mb-10">
        <el-checkbox v-model="commentInfo.remember">
          <span>记住我</span>
          <el-tooltip placement="top" content="我们将根据Html5中的新特性LocalStorage来进行数据的保存，您可以随时进行清除">
            <i class="el-icon-warning-outline ml-5"></i>
          </el-tooltip>
        </el-checkbox>
        <el-checkbox v-model="commentInfo.emailNotify">
          <span>邮件通知</span>
          <el-tooltip placement="top" content="如果您的评论有了新的回复，我们将发送邮件通知您预留的邮箱">
            <i class="el-icon-warning-outline ml-5"></i>
          </el-tooltip>
        </el-checkbox>
      </div>
      <button class="maxer-border-button large mt-10">
        <icon-font name="iconziyuan" right="5px"/>
        <span>发布</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "CommentContent",
  inject:['commentReplyStatus','commentReplyUserName'],
  components: {IconFont},
  data() {
    return {
      commentInfo: {
        remember: false,    // 记住我
        emailNotify: false, // 邮箱通知
      },
      replyText: ""         // 回复内容
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-content {
  padding: 10px 30px;
  margin: 0 15px;

  .content #comment {
    min-width: 100%;
    width: 100%;
    min-height: 260px;
    resize: none;
    font-size: 17px;
    line-height: 17px;
  }

  .operation-container {
    ::v-deep {
      .el-checkbox__inner {
        transition: .3s ease-out;
        -webkit-transition: .3s ease-out;
        &:hover {
          border-color: #505050;
        }

        &:focus {
          border-color: #505050;
          outline: none;
        }

        &:active {
          border-color: #505050;
        }

        &:visited {
          border-color: #505050;
          outline: none;
        }
      }

      .el-checkbox {
        &:hover .el-checkbox__inner {
          border-color: #505050;
          transition: .3s ease-out;
          -webkit-transition: .3s ease-out;
        }
      }

      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #505050;
        border-color: #505050;
      }

      .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #505050;
      }

      .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #111111;
      }
    }
  }
}



</style>