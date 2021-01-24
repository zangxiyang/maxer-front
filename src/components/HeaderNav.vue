<template>
  <div id="header-nav" class="navbar" :class="{'on-top':isOnTop}">
    <nav class="nav-container">
      <div class="navigation maxer-container f-jc-sb al-c">
        <div class="logo-nav-group flex al-c">
          <div class="logo">
            <!-- Logo容器  -->
            <router-link to="/">
              <!--TODO判定是否是文字LOGO-->
              <span>LOGO</span>
            </router-link>
          </div>
          <div class="nav-group">
            <!-- 菜单容器  -->
            <div class="nav-lists flex al-c">
              <nav-item icon="iconshouye1"
                        text="首页"
                        route="/"/>
              <nav-item icon="iconzuopin"
                        text="分类"
                        route="/about"/>
              <nav-item icon="iconwenda"
                        text="微聊"
                        route="/"/>
              <nav-item icon="icongengduo"
                        text="更多"
                        route="/"
                        :is-more="true"/>
            </div>
          </div>
        </div>
        <!--  用户容器  -->
        <div class="user-group flex">
          <div>头像</div>
          <div>消息</div>
          <div>{{vuexIsLogin}}</div>
          <div>{{vuexUser.name}}</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavItem from "@/components/navItem.vue";
export default defineComponent({
  name: 'HeaderNav',
  components: {NavItem},
  data(){
    return{
      isOnTop: true
    }
  },
  methods:{
    // 监听滚动条
    handleScroll(){
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isOnTop = scrollTop <= 100;
    }
  },
  mounted() {
    // 注册滚动监听
    window.addEventListener("scroll",this.handleScroll);
    // test
    this.$m.vuex('vuexUser.test',"123321");
  },
  unmounted() {
    // 移除滚动监听
    window.removeEventListener("scroll",this.handleScroll);
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";
.navbar{
  position: fixed;
  width: 100%;
  min-height: 56px;
  z-index: 500;
  background: rgba(255,255,255,.8);
  backdrop-filter: saturate(180%) blur(15px);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  box-shadow: none;
  -webkit-box-shadow: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: padding-top .3s ease-out,background-color .3s ease-out;
  -webkit-transition: padding-top .3s ease-out ,background-color .3s ease-out;
  &.on-top{
    padding-top: 5px;
    background: rgba(0,0,0,0);
    backdrop-filter: saturate(100%) blur(0);
    -webkit-backdrop-filter: saturate(100%) blur(0);
  }
  .navigation{
    position: relative;
    min-height: 56px;
  }
}
.nav-container{
  position: relative;
  min-height: 56px;
  width: 100%;
  overflow: hidden;
}
.logo{
  padding: 12px 0;
  margin-right: 40px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 1px;
}
.nav-group{
  position: relative;
  font-size: 17px;
  >.nav-lists{

  }
}
</style>