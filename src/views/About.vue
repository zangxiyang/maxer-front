<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="animate__animated animate__backInDown">官方推荐模式</h2>
    <TestComponent/>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";
export default defineComponent({
  name: 'About',
  components:{
    TestComponent
  },
  methods:{
    login(){
      this.$m.vuex("vuexIsLogin",true);
    }
  },
  mounted() {
    this.$m.vuex("vuexUser.name","龚南柯")
  }
})
</script>