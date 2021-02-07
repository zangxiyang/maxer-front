<template>
  <div class="maxer-category">
    <div class="maxer-main-container maxer-container">
      <div class="maxer-title-container none-select">
        <div class="title-wrap">
          分类
        </div>
        <title-line/>
      </div>
      <div class="category-container none-select">
        <el-row type="flex" :gutter="25">
          <el-col :lg="6" :md="8" :sm="12">
            <category-item
                @click="testClickCategoryItem"
                title="开发"
                desc="这是一个没有技术含量的分类这是一个没有技术含量的分类"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <category-item
                @click="testClickCategoryItem"
                title="开发"
                desc="这是一个没有技术含量的分类这是一个没有技术含量的分类"/>

          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <category-item
                @click="testClickCategoryItem"
                title="开发"
                desc="这是一个没有技术含量的分类这是一个没有技术含量的分类"/>

          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <category-item
                @click="testClickCategoryItem"
                title="开发"
                desc="这是一个没有技术含量的分类这是一个没有技术含量的分类"/>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12">
            <category-item
                @click="testClickCategoryItem"
                title="开发"
                desc="这是一个没有技术含量的分类这是一个没有技术含量的分类"/>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TitleLine from "@/components/TitleLine.vue";
import CategoryItem from "@/components/CategoryItem.vue";

/**
 * 名称: 分类页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/4
 * 版本: V1
 */
export default defineComponent({
  name: 'About',
  components: {CategoryItem, TitleLine},
  data() {
    return {}
  },
  methods: {
    login() {
      this.$m.vuex("vuexIsLogin", true);
    },
    testClickCategoryItem() {
      const id = Math.ceil(Math.random()*10);
      this.$router.push('/category/'+id);
    }
  },
  mounted() {
    this.$m.vuex("vuexUser.name", "龚南柯")
  }
})
</script>

<style lang="scss" scoped>
.maxer-category {
  padding: 30px 0;
}

.category-container {
  margin-top: 10px;

}
</style>
