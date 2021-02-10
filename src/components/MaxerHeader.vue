<template>
  <header id="maxer-header" :class="{'static':static}">
    <div class="header-content">
      <div class="maxer-container" style="height: 100%">
        <div v-if="static" class="title f-jc-c al-c none-select" style="height: 100%">
          <h2>{{title}}</h2>
        </div>
        <div class="f-jc-c f-col" style="height: 100%" v-else>
          <div class="f-jc-c al-c">
            <span id="typed" class="typed-text flex al-c"></span>
          </div>
          <div id="hitokoto" class="typed-text hitokoto mt-15"></div>
        </div>
      </div>
    </div>
    <svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="130"
         viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
    </svg>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Typed from "typed.js";
import {Methods, request} from "@/utils/request";

// 接口结构 TODO 提出 model层
interface Hitokoto {
  hitokoto: string;
  from: string;
  from_who: string;
}

export default defineComponent({
  name: "MaxerHeader",
  components: {},
  props: {
    static: {
      type: Boolean,
      default: false
    },                    // 是否为静态显示
    title: String,        // 静态显示时有效
    bgUrl: String,        // 背景图片url

  },
  data() {
    return {
      // TODO 后端数据
      typedStrings: [
        '群星闪耀，^1000 终不过一曲清欢',
        '群星闪耀，^1000 我是一个Coder'
      ],
      hitokotos: [] as Array<string>,
      hitokoto: {} as Hitokoto
    }
  },
  mounted() {
    if (!this.static){
      new Typed('#typed', {
        strings: this.typedStrings,
        typeSpeed: 50,
        smartBackspace: true,
        backSpeed: 30,
        loop: true,
        startDelay: 500
      })
      request('/proxy/hitokoto', Methods.GET).then(({data}) => {
        this.hitokoto = (data as any).data
        this.hitokotos.push(`${this.hitokoto.hitokoto} ^1000`)
        new Typed('#hitokoto', {
          strings: [`<div class="f-jc-c al-c">${this.hitokoto.hitokoto}</div><div class="f-jc-r al-c mt-15"><div style="height: 2px;width: 30px;background: #fff;"></div><span>${this.hitokoto.from_who ? this.hitokoto.from_who + '^500' : ''} 「${this.hitokoto.from}」</span></div>`],
          typeSpeed: 50,
          showCursor: false,
        })

      })
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/maxer.variables";
// header 样式
#maxer-header {
  box-sizing: border-box;
  position: relative;
  height: 50vh;
  width: 100%;
  overflow: hidden;
  background-image: url("https://imgcdn.imsle.com/images/2021/01/31/wallhaven-rd3xvm.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  &.static{
    height: 38vh;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=");
  }

  .header-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .title{
      font-family: $maxer-article-font-family;
      letter-spacing: 2px;
      font-weight: normal;
      font-size: 1.5em;
      color: #eee;
    }

    .typed-text {
      font-family: -apple-system, serif, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Serif SC", "PingFang SC", "Microsoft Yahei UI", "Microsoft Yahei", serif;
      height: 38px;
      font-weight: 600;
      padding: 0 15px;
      color: #eeeeee;
      text-shadow: 0 0 .3125rem #1c1f21;

      &.hitokoto {
        font-size: 24px;
      }
    }
  }

  #bigHalfCircle {
    position: absolute;
    left: 0;
    bottom: 0;

    path {
      fill: #f5f5f5;
    }
  }
}
</style>

<style>
.typed-cursor {
  color: #eee;
  margin-left: -15px;
}
</style>