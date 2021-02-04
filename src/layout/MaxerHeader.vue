<template>
  <header id="maxer-header">
    <div class="header-content">
      <div class="maxer-container" style="height: 100%">
        <div class="f-jc-c f-col" style="height: 100%">
          <div class="f-jc-c al-c">
            <span id="typed" class="typed-text"></span>
          </div>
          <div class="mt-15 f-jc-c al-c">
            <div id="hitokoto" class="typed-text hitokoto"></div>
          </div>
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

interface Hitokoto {
  hitokoto: string;
  from: string;
  from_who: string;
}

export default defineComponent({
  name: "MaxerHeader",
  components: {},
  props: {},
  data() {
    return {
      typedStrings: [
        '群星闪耀，^1000 终不过一曲清欢',
        '群星闪耀，^1000 我是一个Coder'
      ],
      hitokotos: [] as Array<string>,
      hitokoto: {} as Hitokoto
    }
  },
  mounted() {
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
        strings: [`<div>${this.hitokoto.hitokoto}</div><div class="f-jc-r al-c mt-15"><div style="height: 2px;width: 30px;background: #fff;"></div><span>${this.hitokoto.from_who ? this.hitokoto.from_who + '^500':''} 「${this.hitokoto.from}」</span></div>`],
        typeSpeed: 50,
        showCursor: false,
      })

    })
  },
})
</script>

<style lang="scss" scoped>

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
    height: 50vh;
    z-index: 1;

    .typed-text {
      font-family: -apple-system, serif, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Serif SC", "PingFang SC", "Microsoft Yahei UI", "Microsoft Yahei", serif;
      height: 38px;
      font-weight: 600;
      color: #eeeeee;
      font-size: 30px;
      text-shadow: 0 0 .3125rem #1c1f21;

      &.hitokoto{
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
  font-size: 30px;
  color: #eee;
}
</style>