<template>
  <template v-if="route">
    <router-link :to="route">
      <div class="more-item flex al-c" ref="moreItem">{{title}}</div>
    </router-link>
  </template>
  <template v-else>
    <div class="more-item flex al-c" @click="onClick" ref="moreItem">{{title}}</div>
  </template>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "navMoreItem",
  props:{
    title: String,
    route: String,
  },
  data(){
    return{
      index: 0
    }
  },
  emits:['click'],
  methods:{
    onClick(){
      this.$emit('click',this.index)
    }
  },
  mounted() {
    const _this = this.$refs['moreItem'] as Element;
    const _parent = _this.parentElement as Element;
    _parent.childNodes.forEach((el,index)=>{
      if (el === _this) this.index = index
    })
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.more-item{
  display: flex;
  padding: 8px 12px;
  cursor: pointer;
  color: $maxer-text-normal-color;
  transition: background-color .3s ease-out, color .3s ease-out;
  -webkit-transition: background-color .3s ease-out, color .3s ease-out;
&:hover{
   color: $maxer-a-hover-color;
   background-color: $maxer-hover-default-background-color;
   transition: background-color .3s ease-out, color .3s ease-out;
   -webkit-transition: background-color .3s ease-out, color .3s ease-out;
 }
}
</style>