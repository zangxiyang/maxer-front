<template>
  <div class="maxer-post-lists-title flex al-c">
    <icon-font name="iconshuqian" left="10px" right="8px" size="30px"/>
    <span>精选</span>
  </div>
  <div class="maxer-post-lists f-jc-sb f-wrap">
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
  </div>
  <div class="maxer-post-loadMore f-jc-c al-c">
    <div class="maxer-button-loadMore f-jc-c al-c">
      <icon-font name="icondownarrow" right="3px"/>
      <span>加载更多</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PostItem from "@/components/PostItem.vue";
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "PostList",
  components: {IconFont, PostItem}
})
</script>

<style lang="scss" scoped>
.maxer-post-lists-title{
  font-size: 20px;
  font-weight: 600;
  color: #8e8787;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #dedede;
  user-select: none;
  -webkit-user-select: none;
}
.maxer-post-lists{
  padding-top: 10px;
  position: relative;
}
.maxer-post-loadMore{
  margin-top: 30px;
  .maxer-button-loadMore{
    font-size: 13px;
    padding: 3px 8px;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    border-radius: 5px;
    color: #888;
    border: 2px solid #888;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    &:hover{
      border-color: #111;
      color: #111;
    }
  }
}

</style>