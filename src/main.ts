import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element';
import installMaxerStore, {Maxer} from './store/maxer.mixin'
import {ElMessage, ElNotification} from "element-plus";
import './assets/scss/maxer.core.scss'
// 引入iconfont
import initIconFont from "@/utils/iconFontConfig";



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
app.use(store).use(router).mount('#app')