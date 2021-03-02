import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element';
import installMaxerStore, {Maxer} from './store/maxer.mixin'
import initStorePersistence from './store/store.persistence'
import {ElMessage, ElNotification} from "element-plus";
// 引入 yue.css 排版 css
import 'yue.css/yue.css'
// 引入 maxer 核心 scss
import './assets/scss/maxer.core.scss'
// 引入iconfont
import initIconFont from "@/utils/iconFontConfig";
// 引入animate css
import 'animate.css';
// 引入懒加载
import vueLazyLoad from 'vue3-lazyload';
// 替换 nprogress 默认样式
import '@/assets/css/nprogress.css';



// 声明全局组件
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: typeof ElMessage; // 加入全局message
        $notify: typeof  ElNotification; // 加入全局notify
        $m: Maxer;  // 声明全局方法
    }
}

const app = createApp(App)
installElementPlus(app)
installMaxerStore(app) // 全局混入vuex
initIconFont() // 初始化iconfont
initStorePersistence(store) // 初始化持久化vuex
app.use(store)
    .use(router)
    .use(vueLazyLoad)
    .mount('#app')
