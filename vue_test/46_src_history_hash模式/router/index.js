// 该文件专门用于额创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes:[
        /* 一级路由 */
        {
            /* 路由命名 */
            name: 'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},

            /* 二级路由 */
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title:'新闻'},
                    /* beforeEnter: (to, from, next)=>{
                        console.log('beforeEnter', to, from);
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === 'atguigu'){
                                next();
                            }else{
                                alert('不对！！！')
                            }
                        }else{
                            next()
                        }
                    } */
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta:{title:'细节'},
                            props($route){
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

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next)=>{
//     console.log(to, from);
//     console.log('前置路由守卫');

//     // 设置title
//     // document.title = to.meta.title || '硅谷系统'

//     if(to.meta.isAuth){
//         if(localStorage.getItem('school') === 'atguigu'){
//             next();
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// 后置路由守卫
router.afterEach((to, from)=>{
    console.log('后置路由守卫');
    console.log(to, from);
    document.title = to.meta.title || '硅谷系统'
})

// 暴露路由器
export default router