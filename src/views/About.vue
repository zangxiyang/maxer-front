<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>官方推荐模式</h2>
    <TestComponent/>
  </div>
</template>

<script lang="ts">
import {Vue,Options} from "vue-class-component";
import TestComponent from "@/components/TestComponent.vue"
@Options({
  components:{
    TestComponent
  }
})
export default class About extends Vue{

}
</script>