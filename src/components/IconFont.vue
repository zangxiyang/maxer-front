<template>
  <svg class="icon" aria-hidden="true" :style="{fontSize:size,marginLeft:left,marginRight:right}">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "IconFont",
  props:{
    name:String,  // iconfont库对应的name
    size:String,  // 图标的大小
    left:String,  // 图标的左外间距
    right:String  // 图标的右外间距
  }
})
</script>
