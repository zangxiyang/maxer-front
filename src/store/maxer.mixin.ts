/**
 * @作者: Seale
 * @时间: 2021/1/23
 * @版本: V1.0
 * @说明: maxer Vue 全局混入
 * @网站: https://www.imsle.com
 */

import {mapState, useStore} from "vuex";
import store from '@/store/index.ts'
import {App} from 'vue'

// 将定义的state变量key全部加载到全局变量中
const $mStoreKey = store.state ? Object.keys(store.state) : [];
export class Maxer{
    vuex = (name: string, value: any): void=>{
        useStore().commit('$changeStore', {
            name, value
        })
    }
}

export default<T> (app: App<T>) => {
    // 进行全局混入
    // 将vuex方法挂载到$m中
    // 使用方法为：如果要修改vuex的state中的user.name变量为"x" => this.$m.vuex('user.name','x')
    app.config.globalProperties.$m = new Maxer();
    app.mixin({
        computed: {
            // 将vuex的state中的所有变量，解构到全局混入的mixin中
            ...mapState($mStoreKey)
        }
    })
}