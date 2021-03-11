<template>
  <div class="maxer-article-container mt-20">
    <div class="maxer-container maxer-article">
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
      <article-item title="测试标题 英文 「English SpringBoot」 Emoji 🚻 🤩" tag="标签" category="分类" date="一周前" :comment="10"
                    :hot="256" :words="3000"
                    image-url="https://blog.monsterx.cn/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png"
                    desc="描述测试，可以自定义"
                    @click="gotoArticleDetail"
      />

      <article-item is-skeleton v-if="loading"/>
      <div class="mt-20">
        <el-button @click="loadMore">加载更多</el-button>
      </div>
    </div>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
/**
 * 名称: 文章 View
 * 作者: Seale
 * 时间: 2021/1/30
 * 版本: V1
 */
import {defineComponent} from 'vue';
import ArticleItem from "@/components/ArticleItem.vue";


export default defineComponent({
  name: "Article",
  components: {ArticleItem},
  data() {
    return {
      loading: false
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => this.loading = false, 3000);
    },
    gotoArticleDetail(): void{
      this.$router.push("/article/1")
    }
  }
})
</script>

<style lang="scss" scoped>

</style>