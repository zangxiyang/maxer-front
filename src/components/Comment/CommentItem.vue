<template>
  <div class="maxer-comment-item flex">
    <div class="avatar none-select">
      <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                 shape="circle" class="user-avatar"/>
    </div>
    <div class="comment-body">
      <div class="meta none-select">
        <div class="username">
          <span>用户名</span>
          <maxer-badge title="访客"
                       :left="5"
                       is-icon
                       icon="iconfangke"
                       color="warning"/>
        </div>
        <div class="date">三天前</div>
        <div class="reply flex al-c" @click="replyOnClick">
          <template v-if="reply">
            <icon-font name="iconguanbi" right="5px"/>
            <span>取消回复</span>
          </template>
          <template v-else>
            <icon-font name="iconhuifu" right="5px"/>
            <span>回复</span>
          </template>
        </div>
      </div>
      <div class="content">
        又看了一遍 配合着bgm体验太好了 看哭了 感觉又找回了当时刚玩时候的感动 最近被海灯节的任务整的很难受 都没怎么玩了 感谢您让我找回了刚入坑时的感觉 谢谢你
      </div>
    </div>
  </div>
  <comment-content v-if="reply"/>

  <div class="maxer-comment-reply-container">
    <!-- 回复容器 -->
    <comment-reply-item/>
    <comment-reply-item/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";
import MaxerBadge from "@/components/MaxerBadge.vue";
import CommentReplyItem from "@/components/Comment/CommentReplyItem.vue";
import CommentContent from "@/components/Comment/CommentContent.vue";

export default defineComponent({
  name: "CommentItem",
  components: {CommentContent, CommentReplyItem, MaxerBadge, IconFont},
  inject: ['commentReplyStatus', 'commentReplyUserName'],
  data() {
    return {
      reply: false
    }
  },
  methods: {
    /**
     * 回复被点击
     */
    replyOnClick() {
      this.reply = !this.reply;
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-item {
  padding: 5px 0;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    .meta > .reply {
      opacity: 1;
      transition: opacity .3s ease-out;
      -webkit-transition: opacity .3s ease-out;
    }
  }
}

.content {
  padding: 10px 0;
  font-size: 14px;
}

.avatar {
  .user-avatar {
    margin-right: 10px;
  }
}

.meta {
  position: relative;

  .date {
    font-size: 14px;
    color: #8a8a8a;
  }

  .reply {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    opacity: 0;
    cursor: pointer;
    color: #676767;
    transition: opacity .3s ease-out;
    -webkit-transition: opacity .3s ease-out;

    &:hover {
      color: #111;
    }
  }
}
</style>