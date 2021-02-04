<template>
  <div class="maxer-tab-container">
    <div class="title-wrap f-jc-c al-b" style="height: 40px">
      <div class="tab-item" v-for="(tab,i) in tabs"
           :key="i"
           :class="{'active': index === i}"
           @click="tabOnClick(i)">
        {{ tab }}
      </div>
    </div>
    <title-line/>
  </div>
  <div class="maxer-tab-content-container">
    <div class="tab-item" v-for="(tab,i) in tabs" :key="i" :index="i" v-show="index === i">
      <slot :name="i"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import TitleLine from "@/components/TitleLine.vue";

export default defineComponent({
  name: "MaxerTab",
  components: {TitleLine},
  props: {
    tabs: Array as PropType<Array<string>>,
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:index','click'],
  data() {
    return {}
  },
  methods: {
    tabOnClick(index: number){
      this.$emit('update:index',index)
      this.$emit('click',index)
    }
  }
})
</script>

<style lang="scss" scoped>

// tab 标题容器
.maxer-tab-container {
  position: relative;

  .tab-item {
    position: relative;
    color: #585858;
    height: 40px;
    font-size: 15px;
    margin-right: 15px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition: font-size .3s ease-out;
    -webkit-transition: font-size .3s ease-out;
    &.active {
      font-size: 20px;
      color: #202020;
      font-weight: 600;
      transition: color .3s ease-out, font-size .3s ease-out;
      -webkit-transition: color .3s ease-out,font-size .3s ease-out;
    }
    &:last-child{
      margin-right: 0;
    }
  }
}

// tab 内容容器
.maxer-tab-content-container{
  .tab-item{

  }
}

</style>