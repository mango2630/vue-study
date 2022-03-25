// 该文件专门用于额创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
    routes:[
        /* 一级路由 */
        {
            /* 路由命名 */
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,

            /* 二级路由 */
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            /* :占位符 */
                            /* params参数需要占位！！！ */
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,

                            // props第三种写法，值为函数
                            props($route){
                                // this---->undefined

                                // console.log($route);

                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                    
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 暴露路由器
export default router