<template>
  <header class="maxer-article-header" style="background-image: url('https://talk-1252562537.file.myqcloud.com/images/post/2020-08-14-ny-travel-cover.jpeg')">
    <div class="maxer-container article-content">
        <div class="info-container">
          <div class="category-tag flex al-c">
            <div class="category">分类</div>

            <div class="tag">标签</div>
          </div>
          <h2 class="title">文章标题</h2>
          <div class="desc mt-10">德国比赛的一些感想和记录。</div>
        </div>
    </div>
  </header>
</template>

<script lang="ts">
/**
 * 名称: 文章头图组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/11
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "ArticleHeader",
  props:{
    id: String,
    title: String
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.maxer-article-header{
  position: relative;
  height: 70vh;
  min-height: 480px;
  background-color: #929292;
  background-position: center center;
  background-size: cover;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=");
    background-color: rgba(86,86,86,.3);
  }

  .article-content{
    position: relative;
    height: 100%;
    .info-container{
      position: absolute;
      bottom: 8%;

      .category-tag{
        color: #fff;
        text-shadow: 0 0 1px #202020;
        .category{
          &:after{
            content: '/';
            margin: 0 2px;
          }
        }
      }
      .title{
        font-size: 2.3em;
        color: #fff;
        text-shadow: 0 1px 2px #202020;
      }
      .desc{
        color: #fff;
        text-shadow: 0 0 1px #202020;
      }


    }
  }
}

</style>