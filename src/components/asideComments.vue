<template>
  <home-aside-container
      icon-size="30px"
      title="最新评论"
      class="aside-comments"
      icon="iconliaotian">
    <div class="comments-list flex f-col">
      <div class="comments-item flex">
        <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                   shape="circle" class="user-avatar cur-p"/>
        <div class="comments" v-random-comments-back>
          <div class="info f-jc-sb al-c">
            <div class="author">
              评论者名称
            </div>
            <div class="date">
              几天前
            </div>
          </div>
          <div class="content">
            最新的评论内容内容内容
            最新的评论内容内容内容
            最新的评论内容内容内容
          </div>
        </div>
      </div>
      <div class="comments-item flex">
        <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                   shape="circle" class="user-avatar cur-p"/>
        <div class="comments" v-random-comments-back>
          <div class="info f-jc-sb al-c">
            <div class="author">
              评论者名称
            </div>
            <div class="date">
              几天前
            </div>
          </div>
          <div class="content">
            最新的评论内容内容内容
            最新的评论内容内容内容
            最新的评论内容内容内容
          </div>
        </div>
      </div>
      <div class="comments-item flex">
        <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                   shape="circle" class="user-avatar cur-p"/>
        <div class="comments" v-random-comments-back>
          <div class="info f-jc-sb al-c">
            <div class="author">
              评论者名称
            </div>
            <div class="date">
              几天前
            </div>
          </div>
          <div class="content">
            最新的评论内容内容内容
            最新的评论内容内容内容
            最新的评论内容内容内容
          </div>
        </div>
      </div>
      <div class="comments-item flex">
        <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                   shape="circle" class="user-avatar cur-p"/>
        <div class="comments" v-random-comments-back>
          <div class="info f-jc-sb al-c">
            <div class="author">
              评论者名称
            </div>
            <div class="date">
              几天前
            </div>
          </div>
          <div class="content">
            最新的评论内容内容内容
            最新的评论内容内容内容
            最新的评论内容内容内容
          </div>
        </div>
      </div>
    </div>

  </home-aside-container>
</template>

<script lang="ts">
/**
 * 名称: 侧边栏 - 评论
 * 说明: 侧边栏评论组件
 * 作者: Seale
 * 时间: 2021/1/29
 * 版本: V1
 */
import {defineComponent} from 'vue';
import HomeAsideContainer from "@/components/homeAsideContainer.vue";

export default defineComponent({
  name: "asideComments",
  components: {HomeAsideContainer},
  directives:{
    randomCommentsBack:{
      mounted(el: Element){
        const colors = ['rgba(85, 185, 255, .3)',
          'rgba(157,126,255,.3)',
          'rgba(251,122,212,.3)',
          'rgba(255,153,0,.3)',
          'rgba(114,185,78,.3)',
          'rgba(224,67,54,.3)'];
        el.setAttribute('style',`background-color: ${colors[Math.round(Math.random() * (colors.length - 1))]}`);
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.comments-list {
  .comments-item {
    margin-top: 10px;
    &:first-child{
      margin-top: 0;
    }
    .comments{
      position: relative;
      border-radius: 8px;
      flex: 1;
      padding-left: 30px;
      padding-right: 20px;
      z-index: 1;
      .info{
        padding: 13px 0;
        font-size: 13px;
        color: #545454;
      }
      .content{
        padding-bottom: 13px;
      }
    }
    .user-avatar {
      margin-right: -20px;
      z-index: 2;
    }

  }
}
</style>