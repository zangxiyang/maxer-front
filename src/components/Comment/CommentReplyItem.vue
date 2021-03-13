<template>
  <div class="maxer-comment-reply-item flex">
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
        <span class="header none-select">回复@测试用户:&nbsp;</span>
        又看了一遍 配合着bgm体验太好了 看哭了 感觉又找回了当时刚玩时候的感动 最近被海灯节的任务整的很难受 都没怎么玩了 感谢您让我找回了刚入坑时的感觉 谢谢你
      </div>
    </div>
  </div>
  <comment-content v-if="reply"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";
import MaxerBadge from "@/components/MaxerBadge.vue";
import CommentContent from "@/components/Comment/CommentContent.vue";

export default defineComponent({
  name: "CommentReplyItem",
  components: {CommentContent, MaxerBadge, IconFont},
  inject:['commentReplyStatus','commentReplyUserName'],
  data() {
    return {
      reply: false
    }
  },
  methods:{
    replyOnClick(){
      // 首先将data状态进行改变
      this.reply = !this.reply;
    }
  }
})
</script>

<style lang="scss" scoped>

.content {
  padding: 10px 0;
  font-size: 14px;
  .header{
    letter-spacing: 1px;
    color: #8a8a8a;
  }
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

.maxer-comment-reply-item {
  padding: 10px;
  margin-top: 10px;
  margin-left: 15px;
  border-radius: 5px;
  background-color: rgba(238, 238, 238, .5);

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
</style>