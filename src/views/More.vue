<template>
  <div class="maxer-more">
    <div class="maxer-main-container maxer-container">
      <div class="maxer-title-container none-select">
        <div class="title-wrap">
          更多
        </div>
        <title-line/>
      </div>
      <div class="maxer-more-container none-select mt-20">
        <el-row type="flex" :gutter="20">
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务asdasdasdasda器获取的从服务器获取的从服务器获取的从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <explore-more-item title="从服务器获取的" desc="从服务器获取的" image-url="https://imgcdn.imsle.com/images/2021/02/04/wallhaven-dpgdmj.md.jpg"/>
          </el-col>

        </el-row>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TitleLine from "@/components/TitleLine.vue";
import ExploreMoreItem from "@/components/ExploreMoreItem.vue";

export default defineComponent({
  name: "More",
  components: {ExploreMoreItem, TitleLine},
})
</script>

<style lang="scss" scoped>
.maxer-more{
  padding: 30px 0;
}
.maxer-more-container{

}
</style>