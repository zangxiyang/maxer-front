<template>
  <div class="nav-item">
    <router-link :to="route" active-class="active">
      <icon-font :name="icon"/>
      <span>{{ text }}</span>
      <template v-if="isMore">
        <icon-font name="iconxiangxiafanye" size="10px" left="5px"/>
      </template>
    </router-link>
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
  props: {
    icon: String,      // 图标
    route: String,     // 路由
    text: String,      // 标题
    isMore: Boolean,   // 是否有二级菜单
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";

.nav-item {
  // 引入的iconfont图标需要外间距
  .icon {
    margin-right: 8px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100px;
    color: $maxer-nav-item-normal-color;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    &.active{
      color: $maxer-nav-item-active-color;
    }
    &:hover {
      color: $maxer-nav-item-active-color;
      transition: color .3s ease-out;
      -webkit-transition: color .3s ease-out;
    }
  }
}

</style>