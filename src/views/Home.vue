<template>
  <header id="maxer-home-header" style="background: rgb(64,78,90)">
    <div class="header-bg-mask-container">
      <div class="bg-mask animate__animated animate__fadeIn animate__slow"
           v-for="item in carousel.items" :key="item.id"
           :style="[{backgroundImage:`url(${item.image})`}
           ,{display: carousel.index === item.id? 'block':'none'}]"></div>
    </div>
    <div class="header-bg-mask-container over">

    </div>

    <div class="maxer-container">
      <div class="carousel-wrap">
        <maxer-carousel
            v-model:carousel-index="carousel.index"
            :items="carousel.items"/>
      </div>
    </div>
  </header>
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
        <!-- 金主 -->
        <aside-ads/>
      </div>
    </div>
  </main>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{ flag }}

  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import MaxerCarousel, {CarouselItems} from "@/components/MaxerCarousel.vue";
import PostList from "@/components/PostList.vue";
import AsideAds from "@/components/asideAds.vue";
import AsideDaySentence from "@/components/asideDaySentence.vue"; // @ is an alias to /src


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
    AsideDaySentence,
    AsideAds,
    PostList,
    MaxerCarousel,
    HelloWorld
  }
})
</script>
<style lang="scss" scoped>
$maxer-home-header-height: 480px +  20px;
// header 样式
#maxer-home-header {
  box-sizing: border-box;
  position: relative;
  height: $maxer-home-header-height;
  width: 100%;
  overflow: hidden;

  .header-bg-mask-container {
    height: $maxer-home-header-height;
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: #eeeeee;

    $header-mask-dark: linear-gradient(0deg, #09203f 0, #537895);
    $header-mask-light: linear-gradient(135deg, #fdfcfb, #e2d1c3);

    &.over {
      background-image: $header-mask-light;
      opacity: .7;
      z-index: 1;
    }

    .bg-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center top 5%;
      z-index: 0;
      filter: blur(50px);
      background-repeat: no-repeat;
      transition: .8s ease-in-out;
    }
  }

  .carousel-wrap {

    padding-top: 100px;
    z-index: 5;
  }
}

// main 样式
#maxer-home-main{
  padding-top: 32px;
  // 主容器
  .main-container{
    width: 700px;
    padding:24px;
    border-radius: 10px;
    background-color: #ececec;

  }
  // 侧边栏
  .aside-container{
    max-width: 324px;
    padding: 0 24px;
    flex: 1;
  }
}
</style>
