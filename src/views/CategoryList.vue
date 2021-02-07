<template>
  <maxer-header static :title='categoryName'/>
<div>

</div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerHeader from "@/layout/MaxerHeader.vue";

export default defineComponent({
  name: "CategoryList",
  components: {MaxerHeader},
  props:{
    id: String,
    cateName: String
  },
  data(){
    return{
      categoryName: `分类${this.id}下的文章`
    }
  }
})
</script>

<style scoped>

</style>