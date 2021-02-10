<template>
  <div class="maxer-button-container" @mouseenter="hoverIn" @mouseleave="hoverOut">
    <div class="maxer-button f-jc-c al-c">
      <span>{{text}}</span>
      <template v-if="isSub">
        <icon-font name="iconxiangxiafanye" size="10px" left="5px"/>
      </template>
    </div>
    <div class="maxer-sub-menu f-jc-c" :class="{'show':isMenuShow}" v-if="isSub">
      <div class="menu-item flex al-c" v-for="(item,index) in subs" :key="item.text" @click="subClick(index)">
        <icon-font :name="item.icon" right="10px"/>
        <span>{{item.text}}</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "MxButton",
  components: {IconFont},
  emits:['subClick'],
  data(){
    return{
      isMenuShow: false,
      isIn: false,
    }
  },
  props: {
    subs: Array,
    isSub: Boolean,
    text: String
  },
  methods:{
    hoverIn(): void{
      this.isMenuShow = true;
    },
    hoverOut(): void{
        this.isMenuShow = false;
    },
    subClick(index: number){
      this.$emit('subClick',index)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.maxer-button-container{
  position: relative;
  padding:3px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  .maxer-sub-menu{
    position: absolute;
    top: 95%;
    margin-top: 4px;
    left: 0;
    min-width: 120px;
    padding: 3px 0;
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
    .menu-item{
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
  }
}
</style>