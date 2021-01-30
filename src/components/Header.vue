<template>
  <header id="maxer-home-header" style="background: rgb(64,78,90)">
    <div class="header-bg-mask-container">
      <template v-if="isCarousel">
        <!--当前存在轮播图-->
        <div class="bg-mask animate__animated animate__fadeIn animate__slower"
             v-for="item in carousel" :key="item.id"
             :style="[{backgroundImage:`url(${item.image})`}
           ,{display: carouselIndex === item.id? 'block':'none'}]"></div>
        <div class="header-bg-mask-container over"></div>
      </template>
      <template v-else>
        <!--当前不存在轮播图-->
        <div class="header-bg-mask"></div>
        <div :style="{backgroundImage: `url(${background})`}"
            class="header-bg-image">
        </div>
      </template>
    </div>


    <div class="maxer-container">

      <template v-if="isCarousel">
        <!--当前存在轮播图-->
        <div class="carousel-wrap">
          <maxer-carousel
              v-model:carousel-index="carouselIndex"
              :items="carousel"/>
        </div>
      </template>
      <template v-else>
        <!--当前不存在轮播图-->
        <div class="header-container">
          <div class="content">

          </div>
          <div class="header-bg" :style="{backgroundImage: `url(${background})`}"></div>
        </div>
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import MaxerCarousel, {CarouselItems} from "@/components/MaxerCarousel.vue";

export default defineComponent({
  name: "Header",
  components: {MaxerCarousel},
  props:{
    carousel:{
      type: Array as PropType<Array<CarouselItems>>,
      require: true
    },
    isCarousel: {
      type: Boolean,
      default: false
    },
    background: {
      type: String
    },
    title: String,
    desc: String
  },
  data(){
    return{
      carouselIndex: 0
    }
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
      top: -20px;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center top 5%;
      z-index: 0;
      filter: blur(50px);
      background-repeat: no-repeat;
      transition: .8s ease-in-out;
    }
    // 不是首页的背景遮罩
    .header-bg-mask{
      position: absolute;
      width: 100%;
      height: 100%;
      background: -webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));
      background: -o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);
      background: linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);
      z-index: 2;
      opacity: 1;
    }
    .header-bg-image{
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      filter: blur(20px);
      -webkit-filter: blur(20px);
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
    }
  }

  .carousel-wrap {
    padding-top: 100px;
    z-index: 5;
  }
  .header-container{
    position: relative;
    padding: 100px 0;
    overflow: hidden;
    z-index: 5;
    .content{
      position: absolute;
      height: 240px;
    }
    .header-bg{
      height: 240px;
      background-repeat: no-repeat;
      border-radius: 10px;
      background-size: cover;
      background-position: center center;
      margin: 0 auto;
    }
  }
}

</style>