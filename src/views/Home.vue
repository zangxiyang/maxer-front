<template>
  <Header is-carousel :carousel="carousel.items" />
  <main id="maxer-home-main">
    <!-- 内容区域 -->
    <div class="maxer-container f-jc-sb">
      <div class="main-container">
        <post-list></post-list>
      </div>
      <div class="aside-container">
        <!-- 侧边栏 -->
        <!-- 每日一言 -->
        <aside-day-sentence/>
        <!-- 最新评论 -->
        <aside-comments/>
        <!-- 金主 -->
        <aside-ads/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {CarouselItems} from "@/components/MaxerCarousel.vue";
import PostList from "@/components/PostList.vue";
import AsideAds from "@/components/asideAds.vue";
import AsideDaySentence from "@/components/asideDaySentence.vue";
import AsideComments from "@/components/asideComments.vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src


export default defineComponent({
  name: 'Home',
  data() {
    return {
      flag: '这是一个标识',
      carousel: {
        index: 0, // 走马灯起始索引 - 双向绑定
        items: [
          {
            id: 0,
            title: '群星闪耀，终不过一曲清欢',
            image: 'https://talk-1252562537.file.myqcloud.com/images/post/2020-10-11-root-film-slide.png!slide_thumbnail'
          },
          {
            id: 1,
            title: '群星闪耀，终不过一曲清欢1',
            image: 'https://talk-1252562537.file.myqcloud.com/images/post/2020-08-14-ny-travel-slide.jpeg!slide_thumbnail'
          },
          {
            id: 2,
            title: '群星闪耀，终不过一曲清欢2',
            image: 'https://talk-1252562537.file.myqcloud.com/images/post/2019-07-24-74746222_p0-1.jpg!slide_thumbnail'
          }
        ] as Array<CarouselItems>
      }

    }
  },
  components: {
    Header,
    AsideComments,
    AsideDaySentence,
    AsideAds,
    PostList,
  }
})
</script>
<style lang="scss" scoped>

// main 样式
#maxer-home-main {
  padding-top: 32px;
  padding-bottom: 20px;
  // 主容器
  .main-container {
    min-width: 700px;
    flex: 1;
    margin-right: 24px;
    padding: 24px;
    border-radius: 10px;
    //background-color: #ececec;
    background-color: #f9f9f9;
  }

  // 侧边栏
  .aside-container {
    max-width: 350px;
    flex: 1;
  }
}
</style>
