<template>
  <div class="maxer-carousel">
    <swiper
        @swiper="initSwiper"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'maxer-pagination-bullet-active',
        bulletClass: 'maxer-pagination-bullet'
      }"
        :navigation="{
        nextEl: '.maxer-carousel-button-next',
        prevEl: '.maxer-carousel-button-prev'
      }"
        :loop="false"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false
        }"
        :speed="900"
        @activeIndexChange="indexChange"
        :spaceBetween="0"
        :lazy="{
          loadPrevNext: true,
          loadPrevNextAmount: 1
        }"
        :preloadImages="false"
        @lazyImageLoad="lazyImageLoadingStart"
        @lazyImageReady="lazyImageLoadingReady"
        class="animate__animated animate__fadeIn animate__slow"
    >
      <swiper-slide class="maxer-carousel-item" v-for="item in items" :key="item.id">
        <div class="item-back swiper-lazy"
             :data-background="`${item.image}`"
             :maxer-carousel-index="item.id"></div>
        <template v-if="!loadedFlags[item.id]">
          <el-skeleton animated style="position: absolute;z-index: 9999">
            <template v-slot:template>
              <el-skeleton-item variant="image" style="width: 100%; height: 280px;"/>
            </template>
          </el-skeleton>
        </template>
        <div class="item-container">

          <div class="content f-jc-c f-col al-c">
            <h4 class="title" :title="item.title">
              {{ item.title }}
            </h4>
            <button class="maxer-border-button light mt-10">
              点击前往
            </button>
          </div>
        </div>
      </swiper-slide>
      <!-- add navigation -->
      <div class="maxer-carousel-button-next f-jc-c al-c">
        <icon-font name="iconRight-" size="25px"/>
      </div>
      <div class="maxer-carousel-button-prev f-jc-c al-c">
        <icon-font name="iconLeft-" size="25px"/>
      </div>
      <!-- add pagination -->
      <div class="swiper-pagination"></div>
    </swiper>

  </div>
</template>

<script lang="ts">
/**
 * 名称: Maxer 轮播图组件
 * 说明: 首页轮播图
 * 作者: Seale
 * 时间: 2021/1/26
 * 版本: V1
 */
import {defineComponent, PropType, reactive, ref} from 'vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import SwiperCore, {Pagination, Navigation, Autoplay, Lazy} from "swiper";
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import IconFont from "@/components/IconFont.vue";

SwiperCore.use([Pagination, Navigation, Autoplay, Lazy])

export interface CarouselItems {
  id: number;
  title: string;
  image: string;
}

export default defineComponent({
  name: "MaxerCarousel",
  props: {
    items: {
      type: Array as PropType<CarouselItems[]>,
      default: () => []
    },
    carouselIndex: Number
  },
  emits: ['update:carouselIndex'],
  components: {
    IconFont,
    Swiper, SwiperSlide
  },
  setup(props) {
    // 初始化懒加载标识序列
    const loadedFlags: boolean[] = reactive([]);

    props.items.forEach(() => {
      loadedFlags.push(false)
    });


    const isFirst = ref(false)
    return {loadedFlags, isFirst}
  },
  data() {
    return {
      swiper: undefined
    }
  },
  mounted() {
    console.log("初始化加载标识")
    console.log(this.loadedFlags)
  },
  methods: {
    initSwiper(swiper: any) {
      this.swiper = swiper;
    },
    // index 被改变的时候
    indexChange(swiper: any) {
      const index = swiper.activeIndex; // 获取当前的 swiper index
      this.$emit('update:carouselIndex', index);
    },
    // 图片延迟加载开始
    lazyImageLoadingStart(swiper: any, slideEl: any) {
      console.log("----延迟加载开始----")
      const index = slideEl.childNodes[0].getAttribute('maxer-carousel-index');
      this.loadedFlags[index] = false
    },
    // 图片延迟加载结束
    lazyImageLoadingReady(swiper: any, slideEl: any) {
      console.log("----延迟加载完成----")
      const index = slideEl.childNodes[0].getAttribute('maxer-carousel-index');
      console.log(index)
      this.loadedFlags[index] = true
      // 更改标识为 true 代表已经加载完成
      console.log("---- 完成标识序列 ----")
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-carousel {
  position: relative;
  box-sizing: border-box;
  height: 280px;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;

  .maxer-carousel-item {
    position: relative;
    height: 280px;
    background-color: #eeeeee;

    .item-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      z-index: 0;
      background-repeat: no-repeat;
    }

    .item-container {
      position: absolute;
      width: 100%;
      height: 100%;
      color: #fff;
      background-color: rgba(0,0,0,.3);
      z-index: 1;
      .content{
        width: 100%;
        height: 100%;
        .title{
          font-weight: 600;
          font-size: 1.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          width: 60%;
          cursor: default;
        }
      }
    }
  }

  &:hover {
    .maxer-carousel-button {
      opacity: 1;
      visibility: visible;
    }
  }

  .maxer-carousel-button {
    position: absolute;
    cursor: pointer;
    top: 50%;
    width: 70px;
    height: 40px;
    margin-top: -30px;
    z-index: 1000;
    color: #fefefe;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s ease-out, visibility .3s ease-out;
    -webkit-transition: opacity .3s ease-out, visibility .3s ease-out;

    &.swiper-button-disabled {
      opacity: 0;
      visibility: hidden;
      transition: opacity .3s ease-out, visibility .3s ease-out;
      -webkit-transition: opacity .3s ease-out, visibility .3s ease-out;
    }
  }

  .maxer-carousel-button-next {
    position: absolute;
    right: 0;
    @extend .maxer-carousel-button
  }

  .maxer-carousel-button-prev {
    position: absolute;
    left: 0;
    @extend .maxer-carousel-button
  }

}
</style>
<style lang="scss">
.maxer-pagination-bullet {
  display: inline-block;
  cursor: pointer;
  margin: 0 6px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: rgba(239, 239, 239, .5);
  z-index: 99;

  &.maxer-pagination-bullet-active {
    background-color: rgb(17, 17, 17, .5) !important;

  }

  &:hover {
    background-color: rgba(212, 212, 212, .5);

  }
}
</style>