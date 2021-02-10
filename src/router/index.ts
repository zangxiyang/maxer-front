import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import HomeHeaderView from "@/layout/HomeHeaderView.vue";
import About from "@/views/Category.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: HomeHeaderView,
        children:[
            {
                path: '/home',
                component: Home,
                name: 'Home',
                alias: '/',
                meta:{
                    keepAlive: true,
                    indexName: 'Home'
                }
            },
            {
                path: '/category',
                name: 'Category',
                component: About,
                meta:{
                    indexName: 'Category'
                }
            },
            {
                path: '/article',
                name: 'Article',
                component:() => import('../views/Article.vue'),
                meta:{
                    indexName: 'Article'
                }
            },
            {
                path: '/wechat',
                name: 'Wechat',
                component: ()=> import('../views/WeChat.vue'),
                meta:{
                    indexName: 'Wechat'
                }
            },
            {
                path: '/more',
                name: 'More',
                component: ()=> import('../views/More.vue'),
                meta:{
                    indexName: 'More'
                }
            }
        ]
    },/*
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/Category.vue')
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('../views/Article.vue')
    }*/
    {
        path: '/category/:id',
        name: 'CategoryList',
        component: ()=> import('../views/CategoryList.vue'),
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: ()=> import('../views/Register.vue')
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
