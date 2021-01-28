<template>
<home-aside-container
    icon="iconbianxie"
    icon-size="30px"
    title="每日一言"
    class="aside-hitokoto"
>
  <template v-slot:default>
    <div class="hitokoto">
      <p>{{hitokoto.hitokoto}}</p>
      <p>{{hitokoto.from}}</p>
      <p>{{hitokoto.from_who}}</p>
    </div>
  </template>
</home-aside-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HomeAsideContainer from "@/components/homeAsideContainer.vue";
import {Methods, request} from '@/utils/request'

interface Hitokoto{
  hitokoto: string;
  from: string;
  from_who: string;
}

export default defineComponent({
  name: "asideDaySentence",
  components: {HomeAsideContainer},
  data(){
    return{
      hitokoto:{} as Hitokoto
    }
  },
  beforeCreate() {
    request('http://localhost:8080/api/proxy/hitokoto',Methods.GET).then(({data})=>{
      this.hitokoto = (data as any).data;
      console.log(typeof data)
      console.log(data)
    })
  }
})
</script>

<style lang="scss" scoped>
.aside-hitokoto{
  .hitokoto{
    padding: 5px 10px;
    letter-spacing: 1px;
  }
}
</style>