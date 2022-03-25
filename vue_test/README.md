## 一、关于不同版本的Vue:
1. vue.js 与 vue.runtime.xxx.js 的区别：
   - vue.js 是完整版，包含核心功能 + 模板解析器。
   - vue.runtime.xxx.js 是运行版的vue，只包含核心功能，没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容。

## 二、Vue默认配置
1. 输出vue的默认配置：
   vue inspect > output.js

## 三、ref属性
1. 被用来给给元素或子组件注册引用信息（id的替代者）。
2. 应用在html标签上获取的是真是DOM元素。
3. 应用在组件标签上是获取组件实例对象。


## 四、props属性

1. 让组件接收外部传来的数据
2. 接收到的props是不能修改的
~~~js
props: {
      name: {
         type: String,
         required: true // name是必要的
      },
      age: {  
         type: Number,
         default: 18 // 默认值
      }
   }
~~~

## 五、mixin

1. 功能：把多个组件共用的配置提取成一个混入对象。
2. 定义方式：
   ~~~ js
   export const mixin = {
      methods: {
         showName(){
               console.log(this.name)
         }
      }
   }
   ~~~

3. 使用方式：
   - 全局混合：
      ~~~ js
      import {mixin} from './mixin'
      Vue.mixin(mixin)
      ~~~
   - 局部混合
      ~~~ js
      mixins: [mixin, datamixin]
      ~~~

备注：
- data、methods当 个人 和 混合 都有时，个人为主。
- 但生命周期 两个都执行，且混合中的先执行。

## 六、插件

用于增强Vue
~~~ js
export defalut{
    install(Vue){
        // 全局过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        // 定义全局指令
        // Vue.directive('fbind',{})

        // 定义混入
        Vue.mixin({})
        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.demo = () => {
            console.log('hello Vue');
        }
    }
}
~~~

~~~ js
// 使用
import plugins from './plugins'
Vue.use(plugins)
~~~

## 七、scoped

让样式在局部生效，防止冲突。

~~~ shell
npm i less-loader
npm view webpack versions
npm view less-loader versions
npm i less-loader@7
~~~

## 八、To Do List 案例

1. uuid -- nanoid
   ~~~ shell
   npm i nanoid
   ~~~

2. 父传子 & 子传父


## 九、WebStorage
- localStorage.setItem()
- localStorage.getItem()
- localStorage.removeItem()
- localStorage.clear()


- sessionStorage.setItem()
- sessionStorage.getItem()
- sessionStorage.removeItem()
- sessionStorage.clear()


## 十、【组件的】自定义事件
1. 内置事件：给html元素用。
2. 自定义事件：给组件用。
3. def:一种组件间通信方式，适用于 子组件 ===> 父组件。
---
1. 绑定自定义事件

~~~ html
<!-- 绑定一个自定义事件【v-on】，实现子给父传递数据 -->
<Student v-on:atguigu='demo' @test='getSchoolName'/>

<!-- 绑定一个自定义事件【refs】 -->
<Student ref='student' />

<!-- 防止把原生dom事件当作自定义事件 -->
<Student ref='student' @click.native = 'demo' />
~~~ 

~~~ js
this.$emit('atguigu', this.name)
~~~

~~~ js
mounted(){
   this.$refs.student.$on('atguigu', this.demo);

   // this.$refs.student.$once('atguigu', this.demo);
}
~~~

2. 解绑自定义事件

~~~ js
// 解绑一个自定义事件
// this.$off('atguigu');

// 解绑多个自定义事件
this.$off(['atguigu', 'test']);

// 解绑所有自定义事件
// this.$off();
~~~


## 十一、全局事件总线GlobalEventBus

1. 实现任意组件间通信。

~~~ js
VueComponent.prototype.__proto__ === Vue.prototype
~~~

2. 安装全局事件总线
~~~ js
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    }
})
~~~

## 十二、消息订阅与发布

1. 订阅消息：消息名【~手机号、ID】
2. 发布消息：消息内容
3. 第三方库：
   ~~~ shell
   npm i pubsub-js
   ~~~
   ~~~ js
   // 订阅
   this.id = pubsub.subscribe('hello', (msgName, data)=>{
      console.log('有人发布了hello', msgName, data);
   })

   // 发布
   pubsub.publish('hello', this.studentName);

   // 取消订阅
   pubsub.unsubscribe(this.id);
   ~~~

## 十三、this.$nextTick

1. 语法：this.$nextTick(回调函数)
2. 作用：在下一次DOM更新结束后执行其指定的回调。
3. 当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## 十四、动画效果

~~~ html
<transition :appear="true">
   <h1 v-show='isShow'>你好啊！！</h1>
</transition>
<transition name='hello' appear>
   <h1 v-show='isShow'>你好啊！！</h1>
</transition>
~~~
~~~ css
.v-enter-active{
    animation: atguigu 1s;
}
.v-leave-active{
    animation: atguigu 1s reverse;
}

.hello-enter-active{
    animation: atguigu 1s;
}
.hello-leave-active{
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from{ transform: translateX(-100%);}
    to{ transform: translateX(0px);}
}
~~~

2. 集成动画库
   - animate.css
   - https://animate.style/



## 十五、代理
### 15.1 发送ajax请求

1. xhr [鼻祖，不用]
   ~~~ js
   new XMLHttpRequest()
   ~~~
2. jQuery: $.get $.post 【专业操作DOM】
3. axios[体积小,对xhr的封装]
   ~~~ shell
   npm i axios
   ~~~
4. fetch[window内置有，promise风格]
   - 兼容性问题 
   - 两层promise
5. vue-resource

### 15.2 解决跨域方法：
1. CORS[跨域资源贡献]
   - Access-Control-Allow-Origin
2. jsonp [只能解决get请求]
3. 配置代理服务器
   - nginx
   - vue-cli: [devServer.proxy]
   ~~~ js
   // vue.config.js 
   // 方式一
   // 只能配置一个代理 & 如果自己有，就不会请求目的服务器
   devServer: {
      proxy: 'http://localhost:5000'
   }
   ~~~


## 十六、Vue-resource
- Vue的插件库
- 发送请求
- 对xhr的封装
  ~~~shell
  npm i vue-resource

   $http: ƒ ()
      $options: {}
      delete: ƒ (url, options$$1)
      get: ƒ (url, options$$1)
      head: ƒ (url, options$$1)
      headers: {put: {…}, post: {…}, patch: {…}, delete: {…}, common: {…}, …}
      interceptor: {before: ƒ, method: ƒ, jsonp: ƒ, json: ƒ, form: ƒ, …}
      interceptors: (7) ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors']
      jsonp: ƒ (url, options$$1)
      options: {}
      patch: ƒ (url, body, options$$1)
      post: ƒ (url, body, options$$1)
      put: ƒ (url, body, options$$1)
  ~~~

   ~~~ js
   // main.js
   import vueResource from 'vue-resource'
   Vue.use(vueResource)

   // example.vue
   this.$http.get(`http://api.github.com/search/users?q=${this.keyWord}`)
   ~~~


## 十七、插槽

让父组件向子组件指定位置插入html结构，也是一种组件间通信方式。
- 默认插槽
- 具名插槽
- 作用域插槽
  - 数据在组件(定义插槽)的自身,但根据数据生成的结构需要组件的使用者来决定。

## 十八、Vuex

- 专门在Vue中实现 集中式状态（数据）管理的一个Vue插件。
- 对vue应用中多个组件的共享状态进行集中式的管理（读/写）。
- 也是一种组件间通信的方式。

---
多组件共享数据：
- 全局事件总线实现
- Vuex

---
什么时候使用Vuex:
- 多个组件依赖同一状态。
- 来自不同组件的行为需要变更同一状态。

---
将字符串转换为数字：
~~~js
<!-- 收集到的东西强制转换为number, 解决字符串问题！！！ -->
<select v-model.number='n'>

   <!-- 当作js表达式解析，解决问题！！ -->
   <option :value="1">1</option>
   <option :value="2">2</option>
   <option :value="3">3</option>
</select>
~~~

---
Vuex工作原理：
~~~ shell
npm i vuex

vue2 ---> vuex3
vue3 ----> vuex4
~~~
1. npm 
2. Vue.use(Vuex)
3. store
4. vc ===> store

---
- getters配置项：
- mapState
- mapGetters
- mapActions
- mapMutations

## 十九、路由route & 路由器router
- 路由就是一组key-value的对应关系。
  - key：路径
  - value: component(前端路由) \ function(后端路由)
- 多个路由，需要经过路由器（router）管理。

#### 1. Vue-router
- vue的一个插件库。
- 专门实现SPA应用。

~~~ shell
npm i vue-router
~~~

#### 2. 路由参数
1. query参数
2. params参数

#### 3. 路由命名

#### 4. router-link的 replace属性
1. 浏览器默认为push
2. 可以修改为repalce 记录

## 二十、编程式路由导航

## 二十一、缓存路由组件
~~~ html
<!-- 避免走销毁路程！！！！ -->
<!-- 加入include, 只保持News！！，其余message正常销毁 -->
<keep-alive include="News">
      <router-view></router-view>
</keep-alive>
~~~

## 二十二、路由钩子
- actived
- deactived

## 二十三、路由守卫

~~~ js
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
    console.log(to, from);

    // to.name === 'xinwen' || to.name === 'xiaoxi'
    if(to.path === '/home/news' || to.path === '/home/message'){
        if(localStorage.getItem('school') === 'atguigu'){
            next();
        }
    }else{
        next()
    }
})
~~~

~~~ js
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
    console.log(to, from);
    console.log('前置路由守卫');

    // 设置title
    // document.title = to.meta.title || '硅谷系统'

    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
            next();
        }
    }else{
        next()
    }
})

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// 后置路由守卫
router.afterEach((to, from)=>{
    console.log('后置路由守卫');
    console.log(to, from);
    document.title = to.meta.title || '硅谷系统'
})
~~~

---
- 独享路由守卫

## history模式 & hash模式
- /#/xx/xxx/，#后边的不会被发送 【hash值】
- history模式，不带 #

## 服务器上线
npm run build