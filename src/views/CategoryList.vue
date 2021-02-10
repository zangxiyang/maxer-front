<template>
  <maxer-header static :title='categoryName'/>
  <div class="maxer-container maxer-article mt-20">
    <article-item title="测试标题 英文 「English SpringBoot」 Emoji 🚻 🤩"
                  tag="标签"
                  category="分类"
                  date="一周前"
                  :comment="10"
                  :hot="256"
                  :words="3000"
                  sticky
                  image-url="https://blog.monsterx.cn/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png"
                  desc="描述测试，可以自定义"/>
    <article-item title="测试标题 英文 「English SpringBoot」 Emoji 🚻 🤩"
                  tag="标签"
                  category="分类"
                  date="一周前"
                  :comment="10"
                  :hot="256"
                  :words="3000"
                  image-url="https://blog.monsterx.cn/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png"
                  desc="描述测试，可以自定义"/>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerHeader from "@/components/MaxerHeader.vue";
import ArticleItem from "@/components/ArticleItem.vue";

export default defineComponent({
  name: "CategoryList",
  components: {ArticleItem, MaxerHeader},
  props: {
    id: String,
    cateName: String
  },
  data() {
    return {
      categoryName: `分类${this.id}下的文章`
    }
  }
})
</script>

<style scoped>

</style>