import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import {ElMessage, ElNotification} from "element-plus";
import './assets/scss/maxer.core.scss'

// 声明全局组件
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: typeof ElMessage; // 加入全局message
        $notify: typeof  ElNotification; // 加入全局notify
    }
}

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')