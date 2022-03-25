// 该文件专门用于额创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

// 暴露路由器
export default router