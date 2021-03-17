<template>
  <maxer-header static title="友情链接"/>
  <div class="maxer-container">
    <div class="maxer-links-container">
      <div class="header">
        <h3>朋友们</h3>
        <title-line/>
      </div>
      <div class="content mt-15 pb1">
        <!--友情链接内容-->
        <el-row :gutter="20" type="flex">
          <el-col :lg="8">
            <link-item/>
          </el-col>
          <el-col :lg="8">
            <link-item/>
          </el-col>
          <el-col :lg="8">
            <link-item/>
          </el-col>
          <el-col :lg="8">
            <link-item/>
          </el-col>
          <el-col :lg="8">
            <link-item/>
          </el-col>
        </el-row>
      </div>
      <div class="desc">
        <!--说明-->
        <div class="header">
          <h3>友链说明</h3>
          <title-line/>
        </div>
        <div class="content">
          <m-d-content/>
        </div>
      </div>
    </div>
    <comment-view none-col/>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 友情链接 视图
 * 说明: Maxer 友情链接组件
 * 作者: Seale
 * 时间: 2021/3/17
 * 版本: V1
 */
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";
import TitleLine from "@/components/TitleLine.vue";
import LinkItem from "@/components/Link/LinkItem.vue";
import MDContent from "@/components/MDContent.vue";
import CommentList from "@/components/Comment/CommentList.vue";
import CommentView from "@/components/Comment/CommentView.vue";

export default defineComponent({
  name: "Links",
  components: {CommentView, CommentList, MDContent, LinkItem, TitleLine, MaxerHeader},
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.maxer-links-container {
  margin: 20px 0;
  border-radius: 10px;
  min-height: 300px;
  background-color: #fff;
  .header,.desc .header{
    h3 {
      padding: 15px 0;
      text-align: center;
    }
  }
  .desc .content{
    padding: 15px;
  }
}
</style>