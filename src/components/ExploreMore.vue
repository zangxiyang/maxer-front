<template>
  <div class="maxer-title-container">
    <div class="title-wrap">
      探索更多
    </div>
    <title-line/>
  </div>
  <div class="explore-content mt-20">
    <el-row type="flex" :gutter="10">
      <el-col :lg="6" :md="8" :sm="12">
        <explore-more-item title="留言板" desc="说你想说，做你想做" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
      </el-col>
      <el-col :lg="6" :md="8" :sm="12">
        <explore-more-item title="关于我" desc="关于本站和本人的介绍" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-l3mkzl.md.jpg"/>
      </el-col>
      <el-col :lg="6" :md="8" :sm="12">
        <explore-more-item title="友情链接" desc="站长的朋友们" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-pk8r7p.md.jpg"/>
      </el-col>
      <el-col :lg="6" :md="8" :sm="12">
        <explore-more-item title="点赞" desc="点个赞再走吧" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-e7yd6l.md.jpg"/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TitleLine from "@/components/TitleLine.vue";
import ExploreMoreItem from "@/components/ExploreMoreItem.vue";

export default defineComponent({
  name: "ExploreMore",
  components: {
    ExploreMoreItem,
    TitleLine
  }
})
</script>

<style lang="scss" scoped>



.explore-content{

}


</style>