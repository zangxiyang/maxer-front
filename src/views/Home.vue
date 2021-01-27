<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{flag}}
    <div class="maxer-container">
      <maxer-carousel v-model:carousel-index="carousel.index"
                      :items="carousel.items"/>
    </div>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import MaxerCarousel, {CarouselItems} from "@/components/MaxerCarousel.vue"; // @ is an alias to /src


export default defineComponent({
  name: 'Home',
  data(){
    return{
      flag: '这是一个标识',
      carousel:{
        index: 0, // 走马灯起始索引 - 双向绑定
        items:[
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
  components:{
    MaxerCarousel,
    HelloWorld
  }
})
</script>
<style lang="scss" scoped>

</style>
