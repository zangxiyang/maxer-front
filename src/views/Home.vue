<template>
  <main id="maxer-home-main">
    <!-- 内容区域 -->
    <div class="maxer-container">
      <maxer-carousel :items="carousel.items" v-model:carousel-index="carousel.index"/>


      <div class="main-container mt-10">
        <maxer-tab :tabs="['文章','微聊']" v-model:index="tab.index" @click="homeTabOnClick">
          <template v-slot:0>
            <post-list/>
          </template>
          <template v-slot:1>
            <div class="animate__animated animate__fadeIn" style="min-height: 200px">
              <we-chat/>
            </div>
          </template>
        </maxer-tab>
      </div>

      <div class="explore-container mt-20">
        <!--探索更多-->
        <explore-more/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, provide, reactive} from 'vue';
import MaxerCarousel, {CarouselItems} from "@/components/MaxerCarousel.vue";
import PostList from "@/components/PostList.vue";
import MaxerTab from "@/components/MaxerTab.vue";
import WeChat from "@/components/WeChat/WeChat.vue";
import ExploreMore from "@/components/ExploreMore.vue";

interface Wechat{
  isLoading: boolean;
}
export default defineComponent({
  name: 'Home',
  setup(){

    // 微聊
    const wechat = reactive({
      isLoading: true
    } as Wechat)
    provide("wechat",wechat)
    return {wechat}
  },
  data() {
    return {
      flag: '这是一个标识',
      carousel: {
        index: 0, // 走马灯起始索引 - 双向绑定
        items: [
          {
            id: 0,
            title: '群星闪耀，终不过一曲清欢，长度测试长度测试长度测试长度测试长度测试',
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
      },
      tab: {
        index: 0
      },

    }
  },
  components: {
    ExploreMore,
    WeChat,
    MaxerTab,
    MaxerCarousel,
    PostList,
  },
  methods: {
    homeTabOnClick(index: number) {
      console.log(index + "被点击了")
      switch (index){
        case 0:
          // 首页文章tab
              break;
        case 1:
          // 首页微聊tab
            // 模拟加载
            this.wechat.isLoading = true
            setTimeout(()=>this.wechat.isLoading = false,3000)
              break;
      }
    }
  },
  mounted() {
    setTimeout(()=> this.wechat.isLoading = false,5000)
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
    padding: 24px;
    border-radius: 10px;
    //background-color: #ececec;
    background-color: #f9f9f9;
  }
  // 探索更多
  .explore-container{
    background-color: #f9f9f9;
    padding: 24px;
    border-radius: 10px;
  }

}
</style>
