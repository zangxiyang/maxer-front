<template>
  <div class="maxer-comment-writer">
    <h2 class="header">发布评论</h2>
    <div class="comment-write-container">
      <!--发布评论容器-->
      <div class="maxer-comment-content">
        <div class="title mb-10 maxer-require">评论内容</div>
        <div class="content">
          <textarea class="maxer-input" id="comment" type="text" placeholder="居然什么都不说，哼！"></textarea>
        </div>
        <div class="comment-info">
          <el-row type="flex" :gutter="15">
            <el-col :lg="8">
              <div class="info-nickname">
                <div class="title mb-5 maxer-require">昵称</div>
                <input class="maxer-input small auto" name="name" />
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
          <button class="maxer-border-button large">
            <icon-font name="iconziyuan" right="5px"/>
            <span>发布</span>
          </button>
        </div>
      </div>
      <div></div>
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
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "CommentToWrite",
  components: {IconFont},
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.maxer-comment-writer{
  .header{
    padding: 20px 30px;
    font-size: 1.3em;
  }
  .maxer-comment-content{
    padding: 0 30px;
    margin: 0 15px;
    .content #comment{
      min-width: 100%;
      width: 100%;
      min-height: 260px;
      resize: none;
      font-size: 17px;
      line-height: 17px;
    }
  }
}
</style>