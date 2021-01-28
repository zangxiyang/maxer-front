<template>
  <div class="home-aside-container">

    <div class="header f-jc-c al-c">
      <icon-font :name="icon" :size="iconSize" right="6px"/>
      <span>{{ title }}</span>
    </div>
    <div class="content">
      <slot/>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "homeAsideContainer",
  components: {IconFont},
  props:{
    title: String,
    icon: String,
    iconSize: String
  }
})
</script>

<style lang="scss" scoped>
.home-aside-container {
  padding: 10px;
  position: relative;
  border-radius: 10px;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  background-color: #ececec;
  margin-bottom: 15px;

  &:last-child{
    margin-bottom: 0;
  }
  .header{
    user-select: none;
    -webkit-user-select: none;
    padding: 6px;
    border-bottom: 1px solid #dedede;
    span{
      font-size: 18px;
      font-weight: 600;
      color: #8e8787;
    }
  }
  .content{
    margin-top: 10px;
    padding: 5px 0;
    width: 100%;
    overflow: hidden;

  }

}


</style>