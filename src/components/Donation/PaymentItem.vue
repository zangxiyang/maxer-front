<template>
  <div class="payment mt-10" @click="updateVal">
    <label class="sp-radio flex f-jc-c"
           :class="{'checked':modelValue===value,'disabled':disabled}">
      <label class="sp-payment-radio">
        <input type="hidden" ref="radio" :value="value">
      </label>
      <span v-if="isIcon">
      <icon-font :name="iconFontName" :size="size"/>
    </span>
    </label>
    <div class="info">
      <div class="title" :class="{'checked':modelValue===value,'disabled':disabled}">
        {{ title }}
        <template v-if="showBadge">
          <!--展示推荐标志-->
          <maxer-badge title="推荐" size="small" class="badge"></maxer-badge>
        </template>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import {defineEmits, ref, defineProps} from "vue";
import IconFont from "@/components/IconFont.vue";
import MaxerBadge from "@/components/MaxerBadge.vue";

const props = defineProps<{
  modelValue: string,
  value: string,
  title: string,
  showBadge?: boolean, // 是否展示推荐徽标
  disabled?: boolean
  isIcon?: boolean
  iconFontName?: string,
  size?: string
}>();
const emit = defineEmits(['update:modelValue']);

const radio = ref();

const updateVal = () => {
  if (!props.disabled) {
    //判断当前是否禁用
    emit('update:modelValue', radio.value.value);
  }
}
console.log('是否禁用：' +props.disabled)
console.log('是否展示徽标' + props.showBadge)
</script>

<style lang="scss" scoped>
.sp-radio {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  border: 1px solid #a8a8a8;
  background-color: #ffffff;
  padding: 0;
  height: 70px;
  width: 70px;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s linear;
  -webkit-transition: .3s linear;
}

.sp-radio.checked {
  border-color: #409EFF;
  transition: .2s ease-in;
  -webkit-transition: .2s ease-in;
}

.sp-radio.disabled {
  border-color: #ccc;
  color: #ccc;
}

.info {
  cursor: pointer;

  .title {
    position: relative;
    padding-top: 3px;
    font-size: 16px;
    text-align: center;

    &.checked {
      color: #409EFF;
    }

    &.disabled {
      color: #8a8a8a;
    }

    .badge{
      cursor: pointer;
      position: absolute;
      top: 3px;
      right: -20px;
    }
  }
}
</style>
