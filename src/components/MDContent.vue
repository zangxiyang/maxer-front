<template>
  <textarea v-model="mdText" style="min-height: 300px; width: 100%;"/>
  <div class="md-content" v-html="mdHtml"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {MaxerMarkdownIt} from '@/utils/MaxerMarkdownIt';

export default defineComponent({
  name: "MDContent",
  setup(){
    //初始化
    // 初始化marked
    return {
      md: MaxerMarkdownIt.getInstance()
    }
  },
  data() {
    return {
      mdText: '```java\n' +
          'public static void main(String[] args){\n' +
          '    System.out.println("hello world");\n' +
          '}\n' +
          '```' + `\n### 测试标题\n## 测试\n[maxertip]assd[/maxertip]`,
      mdHtml: '',
    }
  },
  mounted() {
    this.mdHtml = this.md.render(this.mdText as string);
  },
  watch:{
    mdText(){
      //
      this.mdHtml = this.md.render(this.mdText);
    }
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.md-content{
  ::v-deep{
    pre{
      padding: 15px;
      padding-left: 30px;
      margin: 0 -15px;
      color: #fff;
      background-color: #343a40;
      code{
        font-size: 14px;
        font-family: $maxer-code-font-family;
      }
    }
  }
}
</style>