<template>
  <footer id="maxer-footer">
    <div class="maxer-container">

        <div class="f-jc-c al-c">
          <icon-font name="iconcopyright" right="3px"/>
          <span class="mr-5">{{ date }}</span>
          <a href="JavaScript:" class="website-name mr-5">站点名称vuex首屏加载</a>
          <span>All Rights Reserved.</span>
        </div>
        <div class="f-jc-c al-c mt-5">
          <icon-font name="iconICP" right="3px"/>
          <a href="">渝ICP备16011563号-3</a>
        </div>
        <div class="f-jc-c al-c mt-5">
          <span>Powered by</span>
          <a href="Javascript:" class="ml-5">Maxer</a>
        </div>
        <div class="bottom-state f-jc-c al-c mt-5">
          <div class="state-item">
            <el-tooltip placement="top" effect="light" content="本站托管于阿里云" :offset="20">
              <a href="https://www.aliyun.com/">
                <icon-font name="iconaliyun" size="30px"/>
              </a>
            </el-tooltip>
          </div>
          <div class="state-item">
            <el-tooltip placement="top" effect="light" content="本站每日一言由 'Hitokoto' 提供">
              <a href="https://hitokoto.cn/">
                一言
              </a>
            </el-tooltip>
          </div>
          <div class="state-item">
            <el-tooltip placement="top" effect="light" content="本站CDN加速由又拍云提供" :offset="30">
              <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">
                <icon-font name="iconyoupaiyun-copy-copy-copy" size="70px"/>
              </a>
            </el-tooltip>
          </div>
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import IconFont from "@/components/IconFont.vue";

export default defineComponent({
  name: "Footer",
  components: {IconFont},
  setup() {
    const date = ref<string>(new Date().getFullYear().toString());
    return {date}
  }
})
</script>

<style lang="scss" scoped>
#maxer-footer {
  background-color: rgba(255,255,255,.8);
  font-size: 14px;
  padding: 25px 0;
  user-select: none;
  -webkit-user-select: none;
  a{
    color: #ac633b;
  }
  .website-name{

  }
  .bottom-state{
    max-height: 40px;
    overflow: hidden;
    .state-item{
      margin-left: 5px;
      a{
        font-family: serif;
        font-weight: 600;
      }
    }
  }
}
</style>