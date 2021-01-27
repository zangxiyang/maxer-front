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
        <div class="user-group flex al-c">
          <template v-if="vuexIsLogin">
            <!-- 已登录 -->
            <div class="message-container">
              <!-- 消息面板 -->
              <el-popover
                  placement="bottom"
                  :width="230"
                  trigger="hover"
                  :show-arrow="true"
                  popper-class="user-info-container import i"
                  :offset="10"
                  :show-after="300"
                  :close-delay="450"
              >
                <template #reference>
                  <el-badge is-dot type="danger" class="cur-p">
                    <span>消息</span>
                  </el-badge>
                </template>
                <div class="message-warp">
                  <pop-nav-item text="回复我的" icon="iconliaotian1" icon-size="16px" :dot-value="999"/>
                  <pop-nav-item text="我的消息" icon="iconyouxiang" icon-size="16px" :dot-value="10"/>
                  <pop-nav-item text="系统消息" icon="icontongzhi1" icon-size="16px" :dot-value="5"/>
                </div>
              </el-popover>

            </div>
            <!-- 用户面板 -->
            <el-popover
                placement="bottom"
                :width="230"
                trigger="hover"
                :show-arrow="false"
                popper-class="user-info-container import i"
                :offset="0"
                :show-after="300"
                :close-delay="450"
            >
              <template #reference>
                <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                           shape="circle" class="user-avatar cur-p"/>
              </template>
              <div class="info-wrap flex f-col">
                <div class="f-jc-c">
                  <el-avatar :src="require('@/assets/img/default_user_icon.png')"
                             shape="circle" class="info-avatar"/>
                </div>
                <div class="header-user-info f-jc-c al-c f-col">
                  <!-- 用户信息 -->
                  <div class="header-user-name super flex al-c">
                    {{user.nickName}}
                  </div>
                  <!-- 头衔Icon -->
                  <div class="header-user-icons">
                    <!-- 预留 -->
                  </div>
                  <div class="super-user-icon">
                    超级赞助用户
                  </div>
                </div>
                <div class="mid-user-info">
                  <!-- 积分信息 认证信息 -->
                  <div class="coin-auth f-jc-sb al-c">
                    <div class="coin-container flex al-c" title="M币">
                      <a href="JavaScript:">
                        <icon-font name="iconcoin-dollar" right="4px"/>
                        <span>48</span>
                      </a>
                    </div>
                    <div class="authentication-container flex al-c">
                      <div class="auth-phone">
                        <el-tooltip content="已绑定手机" effect="light" placement="left">
                          <icon-font name="iconyouxi" size="24px"/>
                        </el-tooltip>
                      </div>
                      <div class="auth-mail flex al-c">
                        <el-tooltip content="已绑定邮箱" effect="light" placement="right">
                          <icon-font name="iconduanxin" size="24px"/>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="bottom-navs flex f-col">

                  <pop-nav-item icon="iconshouye2" text="个人中心"
                                divider divider-top
                                icon-size="18px"/>
                  <pop-nav-item icon-size="18px" text="我的捐助" icon="iconfukuan"/>
                  <pop-nav-item text="我的微聊" icon="iconliaotian" icon-size="18px"/>
                  <pop-nav-item text="我的钱包" icon-size="18px" icon="iconqianbao1"/>
                  <pop-nav-item text="退出登录"
                                divider divider-top
                                icon="iconbianji"
                                icon-size="18px"
                                @click="logout"/>
                </div>
              </div>
            </el-popover>
          </template>
          <template v-else>
            <!-- 未登录 -->
            <mx-button :is-sub="true"
                       :subs="rightButtonSubs"
                       text="登录/注册"/>
          </template>

        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavItem from "@/components/navItem.vue";
import MxButton from "@/components/MxButton.vue";
import IconFont from "@/components/IconFont.vue";
import PopNavItem from "@/components/popNavItem.vue";
export default defineComponent({
  name: 'HeaderNav',
  components: {PopNavItem, IconFont, MxButton, NavItem},
  data() {
    return {
      isOnTop: true,
      // 右侧登录按钮子菜单配置项
      rightButtonSubs: [
        {
          text: "登录",
          icon: "iconmima"
        },
        {
          text: "注册",
          icon: "icongeren"
        }
      ],
      // 用户信息 todo vuex保存
      user: {
        nickName: "Seale"
      }
    }
  },
  methods: {
    // 监听滚动条
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isOnTop = scrollTop <= 100;
    },
    // 退出登录
    logout(){
      //TODO
      this.$m.vuex('vuexIsLogin',false);
    }
  },
  mounted() {
    // 注册滚动监听
    window.addEventListener("scroll", this.handleScroll);
    // test
    // this.$m.vuex('vuexIsLogin', true);
  },
  unmounted() {
    // 移除滚动监听
    window.removeEventListener("scroll", this.handleScroll);
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/maxer.variables";

.navbar {
  color: $maxer-nav-dropdown-item-normal-color;
  position: fixed;
  width: 100%;
  min-height: 56px;
  z-index: 500;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: saturate(180%) blur(15px);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  box-shadow: none;
  -webkit-box-shadow: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: padding-top .3s ease-out, background-color .3s ease-out;
  -webkit-transition: padding-top .3s ease-out, background-color .3s ease-out;

  &.on-top {
    color: $maxer-nav-item-normal-color;
    padding-top: 5px;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: saturate(100%) blur(0);
    -webkit-backdrop-filter: saturate(100%) blur(0);
  }

  .navigation {
    position: relative;
    min-height: 56px;
  }
}

.nav-container {
  position: relative;
  min-height: 56px;
  width: 100%;
}

.logo {
  padding: 12px 0;
  margin-right: 40px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color .3s ease-out;
  -webkit-transition: color .3s ease-out;
}

// 用户容器
.user-group {
  .message-container{
    margin-right: 25px;
  }
}

// 当没有移出可滑动区域时
.on-top {
  .logo {
    color: $maxer-nav-item-normal-color;

    a {
      color: $maxer-nav-item-normal-color;
    }
  }
}

.nav-group {
  position: relative;
  font-size: 17px;
}
</style>

<style lang="scss">
@import "src/assets/scss/maxer.variables";
// 用户面板
.user-info-container {

  // 强制覆盖原始样式
  &.import.i {
    box-sizing: border-box;
    padding: 0;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid $maxer-dropdown-border-normal-color;
    color: $maxer-dropdown-text-normal-color;
  }
  // 消息信息面板
  .message-warp{
    position: relative;
    padding: 10px 0;
  }


  // 用户信息面板
  .info-wrap{
    position: relative;
    padding-top: 20px;
    .info-avatar{
      position: absolute;
      top: -48px;
      width: 64px;
      height: 64px;
    }
    // 用户名，头衔？
    .header-user-info{
      .header-user-name{
        font-size: 18px;
        font-weight: 600;
        color: $maxer-userName-default-color;
        &.super{
          color: $maxer-userName-super-color;
        }
      }
      .super-user-icon{
        color: #fff;
        padding: 3px 5px;
        border-radius: 3px;
        user-select: none;
        -webkit-user-select: none;
        background: $maxer-userName-super-color;
      }
    }
    // 用户面板中间信息
    .mid-user-info{
      .coin-auth{
        padding: 5px 10px;
        .coin-container{
          cursor: pointer;
          a{
            transition: color .3s ease-out;
            -webkit-transition: color .3s ease-out;
            &:hover{
              color: $maxer-a-hover-color;
              transition: color .3s ease-out;
              -webkit-transition: color .3s ease-out;
            }
          }

        }
      }
      .authentication-container{
        .auth-mail{
          cursor: pointer;
        }
        .auth-phone{
          cursor: pointer;
        }
      }
    }
    // 用户面板底部快捷菜单
    .bottom-navs{
      margin-top: 10px;
    }
  }
}
</style>