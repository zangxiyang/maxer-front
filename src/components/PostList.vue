<template>
  <div class="maxer-post-lists flex f-wrap animate__animated animate__fadeIn">
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <post-item/>
    <template v-if="loading">
      <post-item is-skeleton/>
      <post-item is-skeleton/>
      <post-item is-skeleton/>
    </template>
  </div>
  <div class="maxer-post-loadMore f-jc-c al-c" v-show="!loading">
    <div class="maxer-border-button" @click="loadMore">
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
  components: {IconFont, PostItem},
  data() {
    return {
      loading: false
    }
  },
  methods: {
    loadMore(): void {
      console.log("点击了加载更多")
      this.loading = true;
      setTimeout(() => this.loading = false, 3000)
    }
  }
})
</script>

<style lang="scss" scoped>
.maxer-post-lists {
  padding-top: 10px;
  position: relative;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  align-content: space-between;
}

.maxer-post-loadMore {
  margin-top: 30px;

}

</style>