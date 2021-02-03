<template>
  <maxer-header/>
  <div class="about">





    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1>This is an about page</h1>
    <h2 class="animate__animated animate__backInDown">官方推荐模式</h2>
    <el-button @click="login">登录</el-button>
    <span></span>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MaxerHeader from "@/layout/MaxerHeader.vue";


export default defineComponent({
  name: 'About',
  components: {MaxerHeader},
  data() {
    return {

    }
  },
  methods: {
    login() {
      this.$m.vuex("vuexIsLogin", true);
    }
  },
  mounted() {
    this.$m.vuex("vuexUser.name", "龚南柯")
  }
})
</script>

<style lang="scss" scoped>

</style>
