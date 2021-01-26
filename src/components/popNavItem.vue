<template>
  <div class="bottom-nav-item f-jc-sb al-c"
       :class="[{'divider':divider},{'top':dividerTop}]">
    <div>
      <icon-font :name="icon" right="10px" :size="iconSize"/>
      <span>{{ text }}</span>
    </div>
    <template v-if="dotValue">
      <div class="maxer-dot maxer-dot-danger">
        {{dotValue}}
      </div>
<!--      <el-badge :value="10" type="warning"/>-->
    </template>
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
    dividerTop: Boolean,
    dotValue: Number
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

.maxer-dot{
  color: #fff;
  font-size: 12px;
  padding: 1px 7px;
  border-radius: 8px;
  text-align: center;
  &.maxer-dot-danger{
    background-color: $maxer-danger-color;
  }
}
</style>