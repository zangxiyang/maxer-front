<template>
  <article-header/>
  <div class="maxer-article-content">
    <div class="maxer-container mt-10">
      <el-row type="flex" :gutter="10">
        <el-col :lg="19">
          <div class="maxer-article-container">
            <m-d-content/>
            <h2 class="maxer-anchor-title" id="测试标题">测试标题</h2>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <h2 class="maxer-anchor-title" id="测试标题2">测试标题2</h2>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <h2 class="maxer-anchor-title" id="测试标题3">测试标题3</h2>
          </div>
        </el-col>
        <el-col :lg="5">
          <div class="maxer-article-catalog ml-10">
            <el-affix target=".maxer-article-content" :offset="80">
              <div class="toc-list none-select">
                <div class="toc-header flex al-c">
                  <icon-font name="icongengduo" size="14px" right="5px"/>
                  <span>目录</span>
                </div>
                <div class="toc-content">
                  <div class="toc-title">
                    2020年德国一日游等等等等等等
                  </div>
                  <div class="toc-title">
                    一级标题
                  </div>
                  <div class="toc-title">
                    一级标题
                  </div>
                  <div class="toc-title">
                    一级标题
                  </div>
                </div>
              </div>
            </el-affix>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
  <div style="height: 900px">评论容器</div>
</template>

<script lang="ts">
/**
 * 名称: 文章详情页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/11
 * 版本: V1
 */
import {defineComponent} from 'vue';

import ArticleHeader from "@/components/ArticleHeader.vue";
import IconFont from "@/components/IconFont.vue";
import MDContent from "@/components/MDContent.vue";

export default defineComponent({
  name: "ArticleDetail",
  components: {MDContent, IconFont, ArticleHeader},
  props: {
    id: String
  },
  data() {
    return {}
  },
  mounted() {
    //
  }
})
</script>

<style lang="scss" scoped>
.maxer-article-container {
  flex: 1;
  border-radius: 5px;
  min-height: 900px;
  padding: 15px;
  background-color: #e9e9e9;
}

.maxer-article-catalog {
  width: 210px;
  background-color: transparent;
  flex: none;

  .toc-list {
    .toc-header {
      padding: 5px 15px 5px 0;
      font-size: 18px;
    }

    .toc-content {
      margin-top: 10px;
      border-left: 2px solid #dfdfdf;
      .toc-title{
        margin-left: -2px;
        padding: 8px 7px;
        border-left: 2px solid transparent;
        font-size: 15px;
        font-weight: 600;
        line-height: 25px;
        color: #797979;
        cursor: pointer;
        transition: border-left-color .5s ease-out,color .5s ease-out;
        -webkit-transition: border-left-color .5s ease-out,color .5s ease-out;

        &:hover{
          border-left: 2px solid #8a8a8a;
          color: #343434;
          transition: border-left-color .5s ease-out,color .5s ease-out;
          -webkit-transition: border-left-color .5s ease-out,color .5s ease-out;
        }
        &.active{
          border-left: 2px solid #8a8a8a;
        }
      }
    }
  }
}
</style>