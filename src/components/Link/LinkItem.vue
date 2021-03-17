<template>
  <div class="maxer-link-item flex al-c cur-p">
    <div class="link-content flex al-c">
      <div class="link-avatar flex-none">
        <el-avatar :size="48" shape="square" src="https://www.imsle.com/seale.jpg"/>
      </div>
      <div class="link-meta flex-auto">
        <div class="link-name">
          名称
        </div>
        <div class="link-desc" title="描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述">
          描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 友情链接 Item 卡片组件
 * 说明: maxer 中 友情链接系组件
 * 作者: Seale
 * 时间: 2021/3/17
 * 版本: V1
 */
import {defineComponent} from 'vue';

export default defineComponent({
  name: "LinkItem",
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.maxer-link-item{
  height: 95px;
  padding: 15px;
  box-shadow: 0 0 8px 2px rgba(238,238,238,.7);
  margin: 0 10px 20px 10px ;
  border-radius: 10px;
  transition: .3s ease-out;
  -webkit-transition: .3s ease-out;
  &:hover{
    box-shadow: 0 0 8px 3px rgba(238,238,238,.9);
    transition: .3s ease-out;
    -webkit-transition: .3s ease-out;
  }
  .link-content{
    .link-meta{
      margin-left: 10px;
      // link 中右侧信息
      .link-name{
        font-size: 15px;
        padding: 0 0 3px 0;
      }
      .link-desc{
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>