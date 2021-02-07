<template>
<div class="maxer-article-item">
  <template v-if="isSkeleton">
    <div class="article-header">
      <el-skeleton animated style="height: 100%;width: 100%;">
        <template v-slot:template>
          <el-skeleton-item variant="image" style="height: 100%;width: 100%;"/>
        </template>
      </el-skeleton>
    </div>
    <div class="article-content">
      <el-skeleton animated>
        <template v-slot:template>
          <div class="article-title flex al-c">
            <el-skeleton-item variant="text"/>
          </div>
          <div class="article-desc">
            <el-skeleton-item variant="text"/>
            <el-skeleton-item variant="text"/>

          </div>
          <div class="article-meta flex al-c">
            <el-skeleton-item variant="text"/>
          </div>
          <div class="article-others f-jc-sb al-c mt-10">
            <el-skeleton-item variant="text" style="width: 45%;"/>
            <el-skeleton-item variant="text" style="width: 10%;"/>
          </div>
        </template>
      </el-skeleton>
    </div>
  </template>
  <template v-else>
    <div class="article-header">
      <el-image
          style="height: 100%;width: 100%;"
          :src="imageUrl">
        <template v-slot:placeholder>
          <el-skeleton animated style="height: 100%;width: 100%;">
            <template v-slot:template>
              <el-skeleton-item variant="image" style="height: 100%;width: 100%;"/>
            </template>
          </el-skeleton>
        </template>
      </el-image>

    </div>
    <div class="article-content">
      <el-skeleton animated :loading="loading">
        <template v-slot:template>
          <div class="article-title flex al-c">
            <el-skeleton-item variant="text"/>
          </div>
          <div class="article-desc">
            <el-skeleton-item variant="text"/>
            <el-skeleton-item variant="text"/>

          </div>
          <div class="article-meta flex al-c">
            <el-skeleton-item variant="text"/>
          </div>
          <div class="article-others f-jc-sb al-c mt-10">
            <el-skeleton-item variant="text" style="width: 45%;"/>
            <el-skeleton-item variant="text" style="width: 10%;"/>
          </div>
        </template>
        <template v-slot:default>
          <div class="article-title flex al-c" :title="title">
            <maxer-badge title="置顶" color="danger" :right="10" class="badge" v-if="sticky"/>
            <h2>{{title}}</h2>
          </div>
          <div class="article-desc">
            {{desc}}
          </div>
          <div class="article-meta flex al-c">
            <div class="article-meta-date flex al-c">
              <icon-font name="iconshijian1" right="3px" size="16px"/>
              <span>{{ date }}</span>
            </div>
            <div class="article-meta-category flex al-c ml-10">
              <icon-font name="iconfenlei3" right="3px" size="15px"/>
              <span>{{ category }}</span>
            </div>
            <div class="article-meta-tag flex al-c ml-10">
              <icon-font name="iconbiaoqian2" right="3px" size="15px"/>
              <span>{{ tag }}</span>
            </div>
            <div class="article-meta-hot flex al-c ml-10">
              <icon-font name="iconredu2" right="1px" size="20px"/>
              <span>{{ hot }}°</span>
            </div>
            <div class="article-meta-hot flex al-c ml-10">
              <icon-font name="iconshouye9" right="1px" size="19px"/>
              <span>{{ comment }}</span>
            </div>
          </div>
          <div class="article-others f-jc-sb al-c">
            <div class="article-meta-read flex al-c">
              <icon-font name="iconyuedu1" right="3px" size="15px"/>
              <span>共 {{ words }} 字，阅读需要 {{ readMinutes }} 分钟</span>
            </div>
            <div class="article-meta-cc">
              <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh" target="_blank" class="flex al-c">
                <el-tooltip content="本作品遵循 CC BY-NC 4.0 协议" placement="top">
                  <icon-font name="iconcreative-commons-nc" size="18px" right="2px"/>
                </el-tooltip>
              </a>
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </template>
</div>
</template>

<script lang="ts">
/**
 * 名称: 文章item组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/6
 * 版本: V1
*/
import {defineComponent} from 'vue';
import MaxerBadge from "@/components/MaxerBadge.vue";
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "ArticleItem",
  components: {IconFont, MaxerBadge},
  props:{
    isSkeleton:{
      type: Boolean,
      default: false
    },
    imageUrl: String,
    title: String,
    sticky: Boolean,   // 是否置顶
    desc: String,
    comment: Number,
    date: String,
    category: String,
    tag: String,
    hot: Number,
    words: Number
  },
  data(){
    return{
      loading: true,
      readMinutes: Math.ceil((this.words as number) / 300)
    }
  },
  mounted() {
    setTimeout(()=>this.loading = false, 2000);
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.maxer-article-item{
  font-family: $maxer-article-font-family;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 35px;
  background: #fff;
  box-shadow: 0 0 6px #eeeeee;
  cursor: pointer;
  &:first-child{
    margin-top: 0;
  }
  .article-header{
    position: relative;
    background-color: #ababab;
  }
  .article-content{
    padding: 15px 30px;
    .article-title{
      padding-bottom: 15px;
      .badge{
        flex: none;
      }
      h2{
        display: block;
        color: #1c1f21;
        font-weight: bold;
        font-family: $maxer-article-font-family;
        letter-spacing: 1px;
      }
    }
    .article-desc{
      box-sizing: border-box;
      font-size: 1em;
      margin-bottom: 15px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 45px;
    }
    .article-meta{
      font-size: 13px;
      color: #1c1f21;
      padding-bottom: 5px;
    }
    .article-others{
      font-size: 13px;
      color: #1c1f21;
      .article-meta-cc{
        font-family: $maxer-code-font-family;
      }
    }
  }
}
</style>