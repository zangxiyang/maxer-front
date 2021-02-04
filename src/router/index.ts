import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import HomeHeaderView from "@/layout/HomeHeaderView.vue";
import About from "@/views/About.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: HomeHeaderView,
        children:[
            {
                path: '/',
                component: Home,
                name: 'Home',
                meta:{
                    keepAlive: true
                }
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/article',
                name: 'Article',
                component:() => import('../views/Article.vue')
            }
        ]
    }/*,
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('../views/Article.vue')
    }*/
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
