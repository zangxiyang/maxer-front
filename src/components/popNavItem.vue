<template>
  <div class="bottom-nav-item flex al-c"
       :class="[{'divider':divider},{'top':dividerTop}]">
    <icon-font :name="icon" right="10px" :size="iconSize"/>
    <span>{{ text }}</span>
    <slot/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import IconFont from "./IconFont.vue";

export default defineComponent({
  name: "popNavItem",
  components: {IconFont},
  props: {
    text: String,
    icon: String,
    iconSize: String,
    divider: Boolean,
    dividerTop: Boolean
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";

.bottom-nav-item {
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color .3s ease-out;
  -webkit-transition: background-color .3s ease-out;

  &:hover {
    background: $maxer-hover-default-background-color;
    transition: background-color .3s ease-out;
    -webkit-transition: background-color .3s ease-out;
  }

  &.divider {
    border-bottom: 1px solid #eee;

    &.top {
      border-bottom: none;
      border-top: 1px solid #eee;
    }
  }
}
</style>