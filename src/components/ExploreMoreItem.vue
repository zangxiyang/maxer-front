<template>
  <router-link :to="route" v-if="route">
    <div class="explore-item" @mouseenter="onHover" @mouseleave="onDisHover">
      <div class="f-jc-c al-c none-select">
        <div class="flex f-col">
          <div class="cover">
            <img :src="imageUrl" alt="" :class="{'animate__animated animate__heartBeat animate__slow':isHover}">
          </div>
          <div class="content">
            <div class="title">{{ title }}</div>
            <div class="desc">{{ desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
  <div class="explore-item" @mouseenter="onHover" @mouseleave="onDisHover" v-else>
    <div class="f-jc-c al-c none-select">
      <div class="flex f-col">
        <div class="cover">
          <img :src="imageUrl" alt="" :class="{'animate__animated animate__heartBeat animate__slow':isHover}">
        </div>
        <div class="content">
          <div class="title">{{ title }}</div>
          <div class="desc">{{ desc }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "ExploreMoreItem",
  props: {
    imageUrl: String,
    route: String,
    title: String,
    desc: String
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    onHover() {
      this.isHover = true
    },
    onDisHover() {
      this.isHover = false
    }
  }
})
</script>

<style lang="scss" scoped>
.explore-item {
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 1px 1px 0 #4c4c4c;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .cover:before {
      background-color: transparent;
      transition: background-color .3s ease-in-out;
      -webkit-transition: background-color .3s ease-in-out;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;

    .title {
      font-size: 1.5rem;
      width: 230px;
    }

    .desc {
      width: 230px;
      font-size: 15px;
      padding-top: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .cover {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .2);
      transition: background-color .3s ease-in-out;
      -webkit-transition: background-color .3s ease-in-out;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
}
</style>