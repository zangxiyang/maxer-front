<template>
  <div class="nav-item" @mouseenter="isHover = true" @mouseleave="isHover = false"
       @click="navOnClick" ref="nav-item">
    <router-link :to="route" active-class="active">
      <icon-font :name="icon"/>
      <span>{{ text }}</span>
      <template v-if="isMore">
        <icon-font name="iconxiangxiafanye" size="10px" left="5px"/>
      </template>
    </router-link>
    <div class="nav-item-more-container flex"
         ref="moreContainer"
         v-if="isMore" :class="{'show':isHover}">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "navItem",
  components: {
    IconFont
  },
  emits:['click'],
  props: {
    icon: String,      // 图标
    route: String,     // 路由
    text: String,      // 标题
    isMore: Boolean,   // 是否有二级菜单
    navIndex: Number,  // 索引
  },
  data(){
    return{
      isHover: false
    }
  },
  methods:{
    navOnClick(){
      this.$emit('click',this.navIndex, this.$refs['nav-item'])
    }
  },
  mounted() {
    //
  }

})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";

.on-top .nav-item a{
  &.active{
    color: $maxer-nav-item-normal-color;
  }
  &:hover{
    color: $maxer-nav-item-normal-color;
    transition: color .3s ease-out;
    -webkit-transition: color .3s ease-out;
  }

}
.nav-item {
  position: relative;
  // 引入的iconfont图标需要外间距
  .icon {
    margin-right: 8px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    min-width: 100px;
    color: $maxer-nav-dropdown-item-normal-color;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    // 暂不需要
    &.active{
      color: $maxer-nav-item-active-color ;
    }
    &:hover {
      color: $maxer-nav-item-active-color;
      transition: color .3s ease-out;
      -webkit-transition: color .3s ease-out;
    }
  }
  .nav-item-more-container{
    position: absolute;
    min-width: 120px;
    flex-direction: column;
    background-color: $maxer-normal-background-color;
    border-radius: 5px;
    box-shadow: 0 0 1em rgba(0,0,0,.1);
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transform: perspective(600px) rotateX(-20deg);
    transform-origin: top;
    transition: opacity .3s ease-out, transform .3s ease-out,visibility .3s ease-out;
    -webkit-transition: opacity .3s ease-out, transform .3s ease-out,visibility .3s ease-out;
    &.show{
      visibility: visible;
      opacity: 1;
      transform: perspective(600px) rotateX(0deg);
    }

  }
}
.on-top{
  .nav-item{
    a{
      color: $maxer-nav-item-normal-color;
      transition: all .3s ease-out;
      -webkit-transition: all .3s ease-out;
    }
  }
}

</style>