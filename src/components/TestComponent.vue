<template>
  <div>{{count}}</div>
  <div>{{year}}</div>
  <el-button @click="add">+1</el-button>
</template>

<script lang="ts">

import {defineComponent,ref} from 'vue'
import {request,Methods} from "@/utils/request";

export default defineComponent({
  name: 'TestComponent',
  setup(){
    const year = ref(1000);
    return {year}
  },
  data(){
    return{
      count: 1
    }
  },
  methods:{
    add(){
      this.count ++;
      this.year++;
    }
  },
  mounted() {

    request('http://localhost:8080/api/article/articles?page=1',Methods.GET).then((res)=>{
      console.log(res)
      this.$notify({
        title: '请求成功',
        message: '请求接口成功',
        type: 'success'
      });
    })
  }
})
</script>

<style lang="sass" scoped>

</style>