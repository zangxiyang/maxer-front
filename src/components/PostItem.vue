<template>
  <el-col :lg="8" :md="12">
  <div class="maxer-post-item flex f-col" :loading="postInfoLoading">
    <div class="post-cover">
      <el-skeleton animated :loading="coverLoading || isSkeleton">
        <template #template>
          <el-skeleton-item variant="image" class="cover"/>
        </template>
        <template v-slot:default>
          <img
              src="https://cdn.sspai.com/2021/01/26/cbf92318a60f7e152a42fe850e7208b7.png?imageMogr2/auto-orient/quality/95/thumbnail/!640x400r/gravity/Center/crop/640x400/interlace/1"
              alt="" class="cover">
        </template>
      </el-skeleton>

    </div>
    <el-skeleton animated :loading="postInfoLoading || isSkeleton">
      <template v-slot:template>
        <div class="post-info">
          <div class="post-title">
            <el-skeleton-item variant="text"/>
          </div>
          <div class="post-other-info">
            <div class="f-jc-sb al-c">
              <div class="flex al-c" style="min-width: 50%">
                <el-skeleton-item variant="circle" style="width: 50px"/>
                <el-skeleton-item variant="text" class="post-author-name"/>
              </div>

              <el-skeleton-item variant="text" style="width: 20%"/>


            </div>
            <div class="f-jc-sb al-c mt-10">

              <el-skeleton-item variant="text" style="width: 30%"/>

              <el-skeleton-item variant="text" style="width: 20%;"/>

            </div>

          </div>
        </div>
      </template>
      <template v-slot:default>
        <div class="post-info">
          <div class="post-title">
            这是一个测试标题测试标题测试标题标题标题标题
          </div>
          <div class="post-other-info">
            <div class="f-jc-sb al-c">
              <div class="flex al-c" style="max-width: 50%">
                <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                           shape="circle"
                           class="cur-p"
                           size="small"/>
                <span class="post-author-name">Seale</span>
              </div>
              <div class="flex al-c">
                <div class="post-category-tag flex al-c" v-random-color>
                  <span class="cate">分类</span>
                  <span class="tag">标签</span>
                </div>
              </div>
            </div>
            <div class="f-jc-sb al-c mt-5">
              <div class="post-h-c flex al-c">
                <div class="post-hot mr-5">
                  <icon-font name="iconicon8" right="4px"/>
                  <span>200</span>
                </div>
                <div class="post-comments">
                  <icon-font name="iconshouye9" right="4px"/>
                  <span>10</span>
                </div>
              </div>
              <div class="post-date flex al-c">
                <icon-font name="iconshouye10" right="4px"/>
                <span>几天前</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
  </el-col>
</template>

<script lang="ts">
/**
 * 名称: Article Item Component
 * 说明: 文章子项组件
 * 作者: Seale
 * 时间: 2021/1/28
 * 版本: V1
 */
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "PostItem",
  components: {IconFont},
  props: {
    isSkeleton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      coverLoading: true,
      postInfoLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.coverLoading = false;
      this.postInfoLoading = false;
    }, 3000)
  },
  directives: {
    randomColor: {
      mounted(el: Element) {
        const colorsLight = ['#ff5722', '#795548', '#9c27b0', '#e91e63', '#ff9800']
        const randomNum = Math.ceil(Math.random() * (colorsLight.length - 1))
        el.setAttribute('style', `background-color:${colorsLight[randomNum]}`)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-post-item[loading='true']:hover {
  background-color: transparent;
  cursor: not-allowed;
}

.maxer-post-item-container {
  position: relative;
  max-width: 33.3%;
  padding: 5px;
  flex: 1 1 auto;
}

.maxer-post-item {
  box-sizing: border-box;
  border-radius: 16px;
  max-width: 320px;
  margin: 8px auto;
  padding: 18px 12px;
  transition: all .3s ease-out;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  // 文章头图
  .post-cover {
    .cover {
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin-bottom: 16px;
      border: 1px solid #f7f7f8;
      box-sizing: border-box;
      transition: all .3s ease-out;
    }
  }

  //  文章信息
  .post-info {
    width: 100%;

    .post-title {
      font-size: 17px;
      letter-spacing: 1px;
      margin-bottom: 12px;

    }

    // 卡片底部信息
    .post-other-info {


      .post-category-tag {
        // 分类 标签
        font-size: 13px;
        border-radius: 5px;
        color: #fff;
        overflow: hidden;

        .cate {
          padding: 3px 5px;
          background: rgba(0, 0, 0, .5);
        }

        .tag {
          padding: 3px 5px;

        }
      }

      .post-author-name {
        font-size: 15px;
        margin-left: 10px;
        letter-spacing: .5px;
        color: #292925;
      }

      .post-h-c, .post-date {
        color: #8e8787;
        font-size: 12px;
      }

    }
  }
}

</style>