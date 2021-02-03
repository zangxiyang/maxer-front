<template>
  <el-skeleton animated :loading="isLoading">
    <template v-slot:template>
      <div class="we-chat-item-container flex" loading @mouseenter="onHover" @mouseleave="onDisHover">
        <div class="avatar">
          <el-skeleton-item variant="circle" style="height: 52px;width: 52px"/>
        </div>
        <div class="we-container flex f-col">
          <div class="userName flex al-c">
            <el-skeleton-item variant="text" style="width: 100px;margin-right: 10px"/>
            <el-skeleton-item variant="text" style="width: 200px"/>
          </div>
          <div class="content">
            <el-skeleton-item variant="text"/>
            <el-skeleton-item variant="text"/>
            <el-skeleton-item variant="text"/>
            <el-skeleton-item variant="text"/>
          </div>
        </div>
        <div class="hover-mask">
          <!-- hover 蒙版 -->
          <div class="mask-container f-jc-c al-c" :class="{'animate__animated animate__bounceIn':isHover}">
            <icon-font name="iconyanjing" right="5px" size="25px"/>
            <span>查看详情</span>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:default>
      <div class="we-chat-item-container flex" @mouseenter="onHover" @mouseleave="onDisHover">
        <div class="avatar">
          <el-avatar :size="52">小美</el-avatar>
        </div>
        <div class="we-container flex f-col">
          <div class="userName flex al-c">
            <span style="font-weight: 600" class="none-select">小美</span>
            <maxer-badge title="创始人"
                         :left="5"
                         is-icon
                         content="由 Maxer 颁发的创世🎖"
                         color="danger"
                         icon="iconicon_user"/>
            <maxer-badge title="超级赞助用户" :left="5" content="由 Maxer 颁发的炒鸡赞助用户🎖"/>
            <maxer-badge title="贵宾"
                         :left="5"
                         is-icon
                         content="由 Maxer 颁发的贵宾🎖"
                         color="warning"
                         icon="icongeren"/>
          </div>
          <div class="content">
            过年不回家了，今年是第二年不跟父母一起过（去年疫情严重就果断没回家），给爸妈的新年礼物是买了Amazfit Pop
            Pro智能手表套装。我爸妈回家喜欢把手机扔房间里，经常接不到电话和通知，戴块表就可以无障碍提醒了，而且可以记录心率、睡眠健康以及50米防水（我爸喜欢游泳、打球等运动），该有的功能都有，比起智能手环，还是选手表更适合长辈吧，毕竟手环的字号真的太小了，显示内容也不多，待机时间超过一周也是我选择这款的原因。
          </div>
        </div>
        <div class="hover-mask">
          <!-- hover 蒙版 -->
          <div class="mask-container f-jc-c al-c" :class="{'animate__animated animate__jackInTheBox':isHover}">
            <icon-font name="iconyanjing" right="5px"/>
            <span class="none-select">查看详情</span>
          </div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerBadge from "@/components/MaxerBadge.vue";
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "WeChatItem",
  components: {IconFont, MaxerBadge},
  data() {
    return {
      isHover: false,
      isLoading: true
    }
  },
  methods: {
    onHover() {
      this.isHover = true;
    },
    onDisHover() {
      this.isHover = false;
    }
  },
  mounted() {
    setTimeout(() => this.isLoading = false, 4000);
  }
})
</script>

<style lang="scss" scoped>
.we-chat-item-container {
  position: relative;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
  transition: background-color .3s ease-out;
  -webkit-transition: background-color .3s ease-out;

  &[loading]:hover{
    background-color: transparent;
    cursor: not-allowed;
    .hover-mask{
      opacity: 0;
      visibility: hidden;
    }
  }

  &:hover {
    background-color: #eee;
    cursor: pointer;

    .hover-mask {
      opacity: 1;
      visibility: visible;
      transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
      -webkit-transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  .hover-mask {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(238, 238, 238, .6);
    overflow: hidden;
    transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
    -webkit-transition: opacity .3s ease-in-out, visibility .3s ease-in-out;

    .mask-container {
      height: 100%;
      font-size: 20px;
    }
  }

  .avatar {
    user-select: none;
    -webkit-user-select: none;
  }

  .we-container {
    padding: 0 10px;
    flex: 1;

    .userName {
      font-size: 17px;
      padding: 8px 0;
    }

    .content {
      font-size: 15px;
      line-height: 160%;
      color: #343a40;
    }
  }
}
</style>