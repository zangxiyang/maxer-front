<template>
  <article-header/>
  <div class="maxer-article-content">
    <div class="maxer-container mt-10">
      <el-row type="flex" :gutter="10">
        <el-col :lg="19">
          <div class="maxer-article-container">
            <m-d-content/>
          </div>
        </el-col>
        <el-col :lg="5">
          <div class="maxer-article-catalog ml-10">
            <el-affix target=".maxer-article-content" :offset="80">
              <div class="toc-list none-select">
                <div class="toc-header flex al-c">
                  <icon-font name="icongengduo" size="14px" right="5px"/>
                  <span>目录</span>
                </div>
                <div class="toc-content">
                  <div class="toc-title" v-for="(title,index) in anchorTitles"
                       :key="title.titleName"
                       :class="{'active':title.isActive}"
                       @click="goToTop(title.topOffset,index)">
                    {{title.titleName}}
                  </div>
                </div>
              </div>
            </el-affix>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
  <div style="height: 900px">评论容器</div>
</template>

<script lang="ts">
/**
 * 名称: 文章详情页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/11
 * 版本: V1
 */
import {defineComponent} from 'vue';

import ArticleHeader from "@/components/ArticleHeader.vue";
import IconFont from "@/components/IconFont.vue";
import MDContent from "@/components/MDContent.vue";

import {AnchorTitle} from "@/utils/InterFacesUtils";

export default defineComponent({
  name: "ArticleDetail",
  components: {MDContent, IconFont, ArticleHeader},
  props: {
    id: String
  },
  data() {
    return {
      anchorTitles: [] as Array<AnchorTitle>
    }
  },
  mounted() {
    // 当页面渲染完成的时候 进行anchorTitle的读取
    this.$nextTick(()=>{
      const titles = document.getElementsByClassName('md-content')[0].getElementsByClassName('maxer-anchor-title');
      for (let i = 0 ; i < titles.length ; i ++){
        const anchorTitle = {
          titleName: titles[i].textContent,
          topOffset: this.getElementTop(titles[i] as HTMLElement) - 71, // 这里需要减去一个头部导航的高度
          isActive: false
        } as AnchorTitle
        this.anchorTitles.push(anchorTitle);
      }
      // 加入滚动监听
      document.addEventListener('scroll',this.scrollListener)
    })
  },
  methods:{
    // 获取页面元素距离顶部的距离
    getElementTop(ele: any): number{
      let eleTop = ele.offsetTop; // 获取元素距离相对定位的父元素的top
      ele = ele.offsetParent
      while (ele !== null){
        eleTop += ele.offsetTop;
        ele = ele.offsetParent;
      }
      return eleTop;
    },
    goToTop(top: number, index: number){
      // 首先移除滚动监听
      document.removeEventListener('scroll',this.scrollListener);
      // 全部置空
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
      this.anchorTitles.forEach((value)=>{
        value.isActive = false;
      });
      this.anchorTitles[index].isActive = true;
      // 延迟添加滚动监听 [需要等待平滑滚动完成后]
      setTimeout(()=>{
        document.addEventListener('scroll',this.scrollListener);
      },1000);

    },
    scrollListener(){
      const top = document.body.scrollTop || document.documentElement.scrollTop;
      // 全部置空
      this.anchorTitles.forEach((value)=>{
        value.isActive = false;
      })
      for (let i = 0 ; i < this.anchorTitles.length; i ++){
        if (i === this.anchorTitles.length - 1 && top > this.anchorTitles[i].topOffset){
          // 当前为最后一个
          this.anchorTitles[i].isActive = true;
          break;
        }
        if (top > this.anchorTitles[i].topOffset && top < this.anchorTitles[i+1].topOffset){
          this.anchorTitles[i].isActive = true;
          break;
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-article-container {
  flex: 1;
  border-radius: 5px;
  padding: 15px;
  background-color: #e9e9e9;
}

.maxer-article-catalog {
  width: 210px;
  background-color: transparent;
  flex: none;

  .toc-list {
    .toc-header {
      padding: 5px 15px 5px 0;
      font-size: 18px;
    }

    .toc-content {
      margin-top: 10px;
      border-left: 2px solid #dfdfdf;
      .toc-title{
        margin-left: -2px;
        padding: 8px 7px;
        border-left: 2px solid transparent;
        font-size: 15px;
        font-weight: 600;
        line-height: 25px;
        color: #797979;
        cursor: pointer;
        transition: border-left-color .5s ease-out,color .5s ease-out;
        -webkit-transition: border-left-color .5s ease-out,color .5s ease-out;

        &:hover{
          border-left: 2px solid #8a8a8a;
          color: #343434;
          transition: border-left-color .5s ease-out,color .5s ease-out;
          -webkit-transition: border-left-color .5s ease-out,color .5s ease-out;
        }
        &.active{
          border-left: 2px solid #8a8a8a;
          color: #4c4c4c;
        }
      }
    }
  }
}
</style>