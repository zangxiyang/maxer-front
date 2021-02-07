<template>
  <div class="category-item">
    <div class="item-container f-jc-c al-c">
      <icon-font :name="iconName" :size="iconSize+'px'" :right="iconOffset+'px'"/>
      <div style="width: 60%">
        <p class="cate-title">{{title}}</p>
        <p class="cate-desc">{{desc}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "CategoryItem",
  components: {IconFont},
  props:{
    title: String,
    desc: String,
    iconName: {
      type: String,
      default: 'iconicon3'
    },
    iconOffset: {
      type: Number,
      default: 10
    },
    iconSize: {
      type: Number,
      default: 30
    }
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.category-item {
  cursor: pointer;

  .item-container {
    position: relative;
    margin-top: 10px;
    padding: 15px 5px;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid #e1e1e1;
    color: #585858;
    z-index: 1;
    overflow: hidden;
    transition: color .5s ease,background-color .3s ease-out;
    -webkit-transition: color .5s ease,background-color .3s ease-out;
    &:hover{
      background-color: #eaeaea;
      transition: color .5s ease,background-color .3s ease-out;
      -webkit-transition: color .5s ease,background-color .3s ease-out;
    }

    .cate-title {
      font-size: 18px;
      font-weight: 600;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .cate-desc {
      font-size: 13px;
      color: #8e8787;
      margin-top: 10px;
      height: 35px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

  }
}
</style>