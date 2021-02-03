<template>
  <el-tooltip effect="light" :content="content" placement="top">
    <span
        class="maxer-badge none-select"
        :style="[{marginLeft: `${left ? left:0}px`},
        {marginRight: `${right? right:0}px`},
        {backgroundColor: themeColor}]">
      <icon-font :name="icon" :size="iconSize+'px'" right="3px" v-if="isIcon"/>
    <span>{{ title }}</span>
  </span>
  </el-tooltip>
</template>

<script lang="ts">
/**
 * 名称: Badge 组件
 * 说明: 用于标识用户组标识等
 * 作者: Seale
 * 时间: 2021/2/3
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "MaxerBadge",
  components: {IconFont},
  props: {
    title: String,
    isIcon:{
      type: Boolean,
      default: false
    },
    icon: String,
    iconSize: Number,
    left: Number,
    right: Number,
    content: String,
    color: {
      type: String,
      default: 'super'
    }
  },
  setup(props: any){
    const themeColor = ref<string>(props.color);
    switch (themeColor.value){
      case 'danger':
        themeColor.value = '#F56C6C';
        break;
      case 'warning':
        themeColor.value = '#dea832';
        break;
      case 'normal':
        themeColor.value = '#ac633b';
        break;
      case 'success':
        themeColor.value = '#35b92c';
        break;
      case 'super':
        themeColor.value =  '#fb7299';
        break;
    }
    return {themeColor}
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";

.maxer-badge {
  font-size: 13px;
  padding: 3px 5px;
  background-color: $maxer-userName-super-color;
  color: #fff;
  border-radius: 5px;

}
</style>