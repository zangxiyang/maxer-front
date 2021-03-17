<template>
  <div id="header-nav" class="navbar" :class="[{'on-top':isOnTop},{'safari':isSafari}]">
    <nav class="nav-container hidden-md-and-down">
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
            <div class="nav-lists flex al-c" ref="navs">
              <nav-item icon="iconshouye1"
                        text="首页"
                        route="/"
                        :nav-index="0"
                        name="Home"
                        @click="navItemOnClick"/>
              <nav-item icon="iconicon9"
                        :nav-index="1"
                        route="/article"
                        text="文章"
                        name="Article"
                        @click="navItemOnClick"/>
              <nav-item icon="iconzuopin"
                        text="分类"
                        route="/category"
                        name="Category"
                        :nav-index="2"
                        is-more
                        @click="navItemOnClick">
                <nav-more-item title="分类1" @click="navCategoryMoreItemClick"/>
                <nav-more-item title="分类2" @click="navCategoryMoreItemClick"/>
                <nav-more-item title="分类3" @click="navCategoryMoreItemClick"/>
                <nav-more-item title="分类4" @click="navCategoryMoreItemClick" route="/category/1"/>
              </nav-item>
              <nav-item icon="iconwenda"
                        text="微聊"
                        route="/wechat"
                        name="Wechat"
                        :nav-index="3"
                        @click="navItemOnClick"/>
              <nav-item icon="icongengduo"
                        text="更多"
                        route="/more"
                        name="More"
                        is-more
                        :nav-index="4"
                        @click="navItemOnClick">
                <nav-more-item title="友情链接" route="/links"/>
                <nav-more-item title="留言板" route="/comment"/>
                <nav-more-item title="关于"/>
              </nav-item>
            </div>
            <!-- 指示器 -->
            <div class="nav-bottom-indicator animate__animated animate__fadeIn"
                 :style="[{left: `${indicator.left}px`},{width: `${indicator.width}px`}]" v-if="indicator.show"></div>


          </div>
        </div>
        <!--  用户容器  -->
        <div class="user-group flex al-c">
          <template v-if="vuexIsLogin">
            <!-- 已登录 -->
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
                    {{ user.nickName }}
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

          </template>
          <template v-else>
            <!-- 未登录 -->
            <mx-button :is-sub="true"
                       :subs="rightButtonSubs"
                       text="登录/注册"
                       @subClick="loginOrRegisterOnClick"/>
          </template>

        </div>
      </div>
    </nav>
    <nav class="nav-container hidden-lg-and-up">
      <div>TODO 手机端</div>
      <ul style="display: flex;justify-content: space-around;list-style: none"
          :style="{'color':isOnTop?'#fff':''}">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/article">文章</router-link>
        </li>
        <li>
          <router-link to="/category">分类</router-link>
        </li>
        <li>
          <router-link to="/wechat">微聊「本版本不开放」</router-link>
        </li>
        <li>
          <router-link to="/more">更多</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useRouter} from "vue-router";
import NavItem from "@/components/navItem.vue";
import MxButton from "@/components/MxButton.vue";
import IconFont from "@/components/IconFont.vue";
import PopNavItem from "@/components/popNavItem.vue";
import NavMoreItem from "@/components/navMoreItem.vue";

export default defineComponent({
  name: 'HeaderNav',
  components: {NavMoreItem, PopNavItem, IconFont, MxButton, NavItem},
  setup() {
    // 是否为 Safari 浏览器
    const isSafari = ref<boolean>(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent));

    return {isSafari}
  },
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
      },
      // navItems宽度
      navItemsWidth: [] as Array<number>,
      // navItems hash
      navItemsHash: new Map<string, number>(),
      // 指示器相关参数
      indicator: {
        width: 0,
        left: 0,
        index: '',
        show: true
      }

    }
  },
  methods: {
    // 监听滚动条
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isOnTop = scrollTop <= 50;
    },
    // 登录
    login() {
      console.log("模拟登录");
      this.$m.vuex('vuexIsLogin', true);
    },
    // 注册
    register() {
      //TODO 注册
      console.log("注册被点击")
    },
    // 退出登录
    logout() {
      //TODO
      this.$m.vuex('vuexIsLogin', false);
    },
    // item被点击
    navItemOnClick(index: number) {
      // 计算指示器width
      const widthIndicator = (this.navItemsWidth[index] - 20);
      let leftIndicator = 0;
      leftIndicator += (this.navItemsWidth[index] - widthIndicator) / 2;
      for (let i = 0; i < index; i++) {
        leftIndicator += this.navItemsWidth[index];
      }
      this.indicator.width = widthIndicator;
      this.indicator.left = leftIndicator;
    },
    // 分类菜单下的子菜单被点击
    navCategoryMoreItemClick(index: number) {
      console.log(`第${index}个被点击了`);
    },
    //登录注册被点击
    loginOrRegisterOnClick(index: number) {
      switch (index) {
        case 0:
          // 登录
            this.$router.push('/login');
          break;
        case 1:
          // 注册
            this.$router.push('/register');
          break;
      }
    }
  },
  mounted() {
    // 注册滚动监听
    window.addEventListener("scroll", this.handleScroll);
    // test
    // this.$m.vuex('vuexIsLogin', true);
    (this as any).$refs.navs.childNodes.forEach((nav: Element, index: number) => {
      // 计算 header nav item 宽度
      this.navItemsWidth.push(nav.clientWidth);
      // console.log(nav.getAttribute('name'));
      // 绑定 nav item 的hashMap
      this.navItemsHash.set(nav.getAttribute('name') as string, index)
    })

    // 默认指向首页
    this.indicator.width = this.navItemsWidth[0] - 20;
    this.indicator.left = (this.navItemsWidth[0] - this.indicator.width) / 2;

    // 获取Route meta 信息来确定指针的位置
    const router = useRouter();
    router.beforeEach(async (to, from, next) => {
      this.indicator.index = to.meta.indicator as string;
      // 更改路由的时候立即通知指示器更新
      if (this.navItemsHash.get(this.indicator.index) === undefined){
        // 当不在hash内时，取消显示指示器
        this.indicator.show = false;
      }else{
        this.indicator.show = true;
        this.navItemOnClick(this.navItemsHash.get(this.indicator.index) as number);
      }
      next();


    })


  },
  unmounted() {
    // 移除滚动监听
    window.removeEventListener("scroll", this.handleScroll);
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/maxer.variables";


// TODO 手机端
ul > li > a {
  color: inherit;
}


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

  &.safari {
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0 0 6px #c9c9c9;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  &.on-top {
    color: $maxer-nav-item-normal-color;
    padding-top: 5px;
    border: none;
    box-shadow: none;
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
  .message-container {
    margin-left: 28px;
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

  .nav-bottom-indicator {
    background-color: $maxer-nav-item-normal-color !important;
  }
}

.nav-group {
  position: relative;
  font-size: 17px;

  .nav-bottom-indicator {
    position: absolute;
    left: 0;
    width: 0;
    bottom: 0;
    height: 2px;
    background-color: $maxer-nav-item-active-color;
    opacity: .7;
    border-radius: 2px;
    transition: left .3s ease, width .3s ease, background-color .3s ease;
    -webkit-transition: left .3s ease, width .3s ease, background-color .3s ease;
  }
}
</style>

<style lang="scss">
@import "../assets/scss/maxer.variables";
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
  .message-warp {
    position: relative;
    padding: 10px 0;
  }


  // 用户信息面板
  .info-wrap {
    position: relative;
    padding-top: 20px;

    .info-avatar {
      position: absolute;
      top: -48px;
      width: 64px;
      height: 64px;
    }

    // 用户名，头衔？
    .header-user-info {
      .header-user-name {
        font-size: 18px;
        font-weight: 600;
        color: $maxer-userName-default-color;

        &.super {
          color: $maxer-userName-super-color;
        }
      }

      .super-user-icon {
        color: #fff;
        padding: 3px 5px;
        border-radius: 3px;
        user-select: none;
        -webkit-user-select: none;
        background: $maxer-userName-super-color;
      }
    }

    // 用户面板中间信息
    .mid-user-info {
      .coin-auth {
        padding: 5px 10px;

        .coin-container {
          cursor: pointer;

          a {
            transition: color .3s ease-out;
            -webkit-transition: color .3s ease-out;

            &:hover {
              color: $maxer-a-hover-color;
              transition: color .3s ease-out;
              -webkit-transition: color .3s ease-out;
            }
          }

        }
      }

      .authentication-container {
        .auth-mail {
          cursor: pointer;
        }

        .auth-phone {
          cursor: pointer;
        }
      }
    }

    // 用户面板底部快捷菜单
    .bottom-navs {
      margin-top: 10px;
    }
  }
}
</style>