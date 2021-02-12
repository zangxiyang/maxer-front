import {createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import About from "@/views/Category.vue";
import HomeHeaderLayout from "@/layout/HomeHeaderLayout.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
     {
        path: '/',
        component: HomeHeaderLayout,
        name: 'index',
         children:[
             {
                 path: '/home',
                 alias: '/',
                 name: 'Home',
                 component: Home
             },
             {
                 path: '/category',
                 name: 'Category',
                 component: About
             },
             {
                 path: '/article',
                 name: 'Article',
                 component: () => import('../views/Article.vue')
             },
             {
                 path: '/wechat',
                 name: 'Wechat',
                 component: () => import('../views/WeChat.vue')
             },
             {
                 path: '/more',
                 name: 'More',
                 component: () => import('../views/More.vue')
             }
         ]
    },
    {
        path: '/category/:id',
        name: 'CategoryList',
        component: () => import('../views/CategoryList.vue'),
        props: true,
        meta:{
            keepAlive: true
        }
    },
    {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: ()=> import('../views/ArticleDetail.vue'),
        props: true,
        meta:{
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta:{
            keepAlive: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
        meta:{
            keepAlive: true
        }
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path !== from.path) nProgress.start();

    next();
})
router.afterEach((to, from) => {
    if (to.path !== from.path) setTimeout(() => nProgress.done(), 300);
})
export default router
