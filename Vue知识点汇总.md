# Vue 汇总

1. 什么是Vue?

   一套用于构建用户界面的轻量级渐进式JavaScript框架。

2. Vue的特点：

   - 组件化模式
   - 声明式编码
   - 虚拟DOM+优秀的diff算法

---

## 一、基础

### 1. 数据绑定

- 单向数据绑定：`v-bind` 【数据只能从 data 流向页面】
- 双向数据绑定：`v-model` 

### 2. 事件处理

- v-on:xxx="fun"
- 默认事件形参: even
- 隐含属性对象: $event

- 事件修饰符：
  1. prevent 阻止默认事件
  2. stop 阻止事件冒泡
  3. once 事件只触发一次
  4. capture 使用事件的捕获模式
  5. self 只有event.target是当前操作的元素时才触发事件
  6. passive 事件的默认行为立即执行，无需等待事件回调执行完毕[移动端项目]

- 键盘事件：
  - @keyup
  - @keydown
  - event.keyCode

---

### 4. 计算属性

- 定义：要用的属性不存在，要通过已有属性计算得来

- 原理：借助`Object.defineproperty`方法提供的getter和setter.

  - **get函数什么时候执行？**

    > 当有人读取 fullName 时，get就会被调用，且返回值就作为 fullName 的值。

    - 初次读取 value 时
    - 所依赖的数据发生变化时

- 优势：与methods实现相比，内部有缓存机制，效率更高，调试方便。

- 备注：
  - 计算属性最终会出在vm上，直接读取使用即可。
  - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。

~~~ js
computed: {
    fullName: {
        get(){
            console.log('get---');
            return this.firstName + '-' + this.lastName;
        },
            // fullName被修改时调用 
            set(value){
                const arr = value.split('-');
                this.firstName = arr[0];
                this.lastName = arr[1];
            }
    }
}
~~~

---

### 5. 监视属性

监视属性watch:

- 当被监视的属性变化时，回调函数(handler)自动调用，进行相关操作

- 监视的属性必须存在，才能进行监视

- 监视的两种写法：
  - new Vue时传入watch配置
  - 通过vm.$watch()监视

**深度监视：**

- vue中的watch默认不监测对象内部值的改变（一层）

- 配置deep:true,可以检测对象内布值改变（多层）

- 备注：
  - Vue自身可以检测对象内部值的改变，但vue提供的watch默认不可以。 
  - 使用watch时根据数据的具体结构，决定是否采用深度监视。

~~~ js
watch:{/* 可以监视 属性、计算属性 */
    isHot: {
        // 初始化时让handler调用一下。
        immediate: true,
            /* 
                    handler 什么时候调用？
                        - 当isHot发生改变时调用。
                    */
            handler(newValue, oldValue){
            console.log('isHot被修改了');
            console.log(newValue, oldValue);
        }
    }
}
~~~



---

### 6. 条件渲染

- 如果需要频繁切换 v-show 较好
- 当条件不成立时, v-if 的所有子节点不会解析(项目中使用)

### 7. 列表渲染——VUE监视数据的原理

- 没有为【数组】准备的 get & set。

- 数组修改：

  - vm._data.student.hobby[0] = 'study' 【不认！】
  - 必须调用数组身上可以修改数组的方法，才会承认修改。
  - Vue.set(vm._data.student.hobby, 1, "打台球")

  - Vue.$set(vm._data.student.hobby, 1, "打台球")

- 修改数组会调用的方法：
  1. push()
  2. pop()
  3. shift()、
  4. unshift()
  5. splice()
  6. sort()
  7. reverse()

- Vue如何检测到用了 以上方法 ？
  - 包裹 !important
  - vm._data.student.hobby.push === Array.prototype.push   [false]
  - 此处的push是 Vue 写的push
    - 先调Array.prototype.push
    - 重新解析模板，生成虚拟DOM...

---

### 8. 过滤器

- 功能: 对要显示的数据进行特定格式化后再显示。
- 注意: 并没有改变原本的数据, 是产生新的对应的数据

~~~ html
<!-- 过滤器实现 -->
<h5>过滤器实现：{{time | timeFormater}}</h5>

<!-- 过滤器【传参】实现 -->
<h5>过滤器实现2：{{time | timeFormater2('YYYY_MM_DD')}}</h5>

<!-- 多个过滤器 -->
<h5>过滤器实现2：{{time | timeFormater2('YYYY_MM_DD') | mySlice}}</h5>
~~~

~~~ js
// 全局过滤器
Vue.filter('name', function(value){
    return value.slice(0, 4);
})

filters: {/* 局部过滤器 */
    timeFormater(value){
        return dayjs(value).format('YYYY/MM/DD HH:mm:ss')
    },
        timeFormater2(value, str='YYYY|MM|DD HH:mm:ss'){
            return dayjs(value).format(str)
        },
            mySlice(value){
                return value.slice(0, 4)
            }
}    
~~~

----

### 9. 自定义指令

配置对象中常用的3个回调：

- bind
- inserted
- update

~~~ js
directives: {
            /*  
                big函数何时会被调用？
                    - 指令与元素成功绑定时(一上来)
                    - 指令所在的模板被重新解析时。
            */
            'big-number': function(element, binding){
                console.log('big-number', this); // window
                element.innerText = binding.value * 10;
            },
            'fbind':{
                // 指令与元素成功绑定时（一上来）
                bind(element, binding){
                    element.value = binding.value;
                },
                inserted(element, binding){
                    element.focus();
                    console.log(this); // window
                },
                update(element, binding){
                    element.value = binding.value;
                }
            } 
        }
~~~

---

### 10. 生命周期

#### 10.1 VUE2

<img src="img/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png" style="zoom: 50%;" />

---

#### 10.2 VUE3

![](img/02_%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.png)

---

### 11. 非单文件组件

- 关于this指向：
  - 组件配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
  - new Vue(options)配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】

~~~ js
VueComponent.prototype.__proto__ === Vue.prototype   [!important]
vm.__proto__ === Vue.prototype
~~~

- 非单文件组件： 一个文件中包含有n各组件。
- 单文件组件：  一个文件中包含有1个组件。[开发为单文件组件]

---



## 二 、VUE2

### 1. ref 属性

- 被用来给给元素或子组件注册引用信息（id的替代者）。

- 应用在html标签上获取的是真DOM元素。

- 应用在组件标签上是获取组件实例对象。

~~~ vue	
<template>
    <div>
        <h1 v-text='msg' ref='title' id='title'></h1>
        <button @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch" />
    </div>
</template>

<script>
import School from './components/School'
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习VUE'
        }
    },
    components: {
        School
    },
    methods: {
        showDOM(){
            // document.getElementById('title')

            // this[vc实例对象]
            console.log(this.$refs.title);

            // school组件的实例对象
            console.log(this.$refs.sch);
        }
    }
}
</script>
~~~

### 2. props 属性

- 作用：用于父组件给子组件传递数据

- props: ['name', 'age', 'setName']

- ~~~ js
  props: {
      name: String, 
      age: Number, 
      setNmae: Function
  }
  ~~~

- 读取方式三: 指定名称/类型/必要性/默认值

  ~~~ js
  props: {
  	name: {
          type: String, 
          required: true, 
          default:xxx}, 
  }
  ~~~

### 3. 混入mixin

- 把多个组件共用的配置提取成一个混入对象

~~~ js
mixins: [mixin]
~~~

### 4. 插件 plugins

通过 install 方法给 Vue 或 Vue 实例添加方法, 定义全局指令。

~~~ js
const obj = {
    install(Vue){
        console.log('@@@instal', Vue);

        // 全局过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.demo = () => {
            console.log('hello Vue');
        }
    }
}

export default obj;
~~~

~~~ js
// 使用
import plugins from './plugins'
Vue.use(plugins)
~~~

---

### 5. scoped

让样式在布局生效。

~~~shell
npm i less-loader

npm view webpack versions

npm view less-loader versions

npm i less-loader@7
~~~

### 6. 浏览器本地存储

~~~ js
sessionStorage.setItem('msg', 'hello!!')
sessionStorage.getItem('msg')
sessionStorage.removeItem('msg')
sessionStorage.clear();

localStorage.setItem('per', JSON.stringify(p));
JSON.parse(localStorage.getItem('per'))
localStorage.removeItem('msg')
localStorage.clear();
~~~

---

### 7. 父子传参

1. props 父串子 , 子通过函数给 父传递参数

   ~~~ js
   // 父 App.vue
   <MyHeader :addTodo='addTodo'></MyHeader>
   
   addTodo(todoObj){
       this.todos.unshift(todoObj)
   },
   ~~~

   ~~~ js
   // 子
   props:['addTodo'],
   methods:{
           add(event){
               const todoObj = {
                   id: nanoid(),
                   title: event.target.value,
                   done: false
               }
               this.addTodo(todoObj);
           }
   }
   ~~~

---

2. **自定义事件** 子传父

   ~~~ js
   // App
   <Student v-on:atguigu='demo' @test='getSchoolName'/>
    
   methods: {
           getSchoolName(name){
               console.log('yess!!!!', name);
               this.schoolName = name;
           },
           demo(name){
               console.log('demo被调用了', name);
               this.studentName = name;
           },
    },
   ~~~

   ~~~ js
   // 子组件
   <button @click='sendStudentName'>传递学生name</button>
   <button @click='unbind'>解绑atguigu事件</button>
   <button @click="death">销毁student组件</button>
   
    methods: {
           sendStudentName(){
               this.$emit('atguigu', this.name)
           },
           unbind(){
               // 解绑一个自定义事件
               // this.$off('atguigu');
   
               // 解绑多个自定义事件
               this.$off(['atguigu', 'test']);
   
               // 解绑所有自定义事件
               // this.$off();
           },
           death(){
               // 销毁vc组件实例后，绑定在自身上的自定义事件都是不奏效的。
               this.$destroy()
           }
       }
   ~~~

---

3. 全局事件总线GlobalEventBus  实现任意组件间通信。

   ~~~ js
   VueComponent.prototype.__proto__ === Vue.prototype
   ~~~

   - 安装全局事件总线

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

   ~~~ js
   $on(eventName, listener): 绑定自定义事件监听
   $emit(eventName, data): 分发自定义事件
   $off(eventName): 解绑自定义事件监听
   $once(eventName, listener): 绑定事件监听, 但只能处理一次
   ~~~

   ~~~ js
   beforeDestroy(){
       this.$bus.$off('checkTodo');
       this.$bus.$off('deleteTodo');
   }
   ~~~

---

4. 消息订阅与发布

   - 订阅消息 --对应绑定事件监听 
   - 发布消息 --分发事件 
   - 取消消息订阅 --解绑事件监

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

---

### 8. nextTick

1. 语法：this.$nextTick(回调函数)
2. 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

2. 作用：在下一次DOM更新结束后执行其指定的回调。

3. 当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
4. [掘金](https://juejin.cn/post/6844903843197616136)

---

### 9. 动画效果

![](img/03_VUE_ANIMATION.png)

---

### 10. 代理

#### 10.1 发送 ajax 请求： 

- new XMLHttpRequest()
- jQuery
- axios
- fetch[window内置有，promise风格]
- vue-resource

#### 10.2 解决跨域

- CORS（跨域资源共享）

  Access-Control-Allow-Origin

- jsonp (只能解决get请求)

- 配置代理服务器

  - ngix
  - vue-cli (devServer.proxy)

---

### 11. 插槽 slot ？？？

让父组件向子组件指定位置插入html结构，也是一种组件间通信方式。

- 默认插槽

- 具名插槽

- 作用域插槽

- 数据在组件(定义插槽)的自身,但根据数据生成的结构需要组件的使用者来决定。
- 插槽内容是在父组件中编译后, 再传递给子组件的



## 三、VUEX

- 专门在Vue中实现 **集中式状态（数据）管理**的一个Vue插件。

- 对vue应用中多个组件的共享状态进行集中式的管理（读/写）。

- 也是一种组件间通信的方式。

- 多组件共享数据：

  - 全局事件总线实现

  - Vuex

- 什么时候使用Vuex:

  - 多个组件依赖同一状态。

  - 来自不同组件的行为需要变更同一状态。

---

实现：

~~~ js
// store/index.js
// 该文件用于传创建vuex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 准备actions---用于响应组件中的动作
const actions = {};
// 准备mutations---用于操作数据
const mutations = {};
// 准备state---用于存储数据
const state = {};
// 准备getters---用于将state中的数据进行加工
const getters = {}

const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters
});

// 暴露store
export default store;
~~~

~~~ js
// main.js

// 引入store
import store from './store/index'
// 创建 vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),
    store: store,
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
})
~~~



## 四、Vue-router

- 路由route & 路由器router

- 路由就是一组key-value的对应关系。
  - key：路径
  - value: component(前端路由) \ function(后端路由)

- 多个路由，需要经过路由器（router）管理。

---

### 1. 路由参数

- query 参数

  ~~~ vue
  <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>
  ~~~

  ~~~ vue
  <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: message.id,
                        title: message.title
                    }
           }">
      {{message.title}}
  </router-link>
  ~~~

  

- params 参数

  ~~~ vue
  <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>
  ~~~

  ~~~ vue
  <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: message.id,
                        title: message.title
                    }
           }">
      {{message.title}}
  </router-link>
  <!-- 路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！！！ -->
  ~~~

  ~~~ js
  // router.js
  /* params参数需要占位！！！ */
  path: 'detail/:id/:title',
  ~~~

---



### 2. 编程式路由导航 & 声明式路由导航



### 3. 缓存路由组件



### 4. 路由钩子

- actived
- deactived



### 5. 路由守卫





## 五、VUE3





## 六、面试题整理

#### 1. MVC & MVVM

- MVC即模型、视图、控制器（Model View Controller）

  - View 接受用户交互请求
  - View 将请求转交给**Controller**处理
  - Controller 操作Model进行数据更新保存
  - 数据更新保存之后，Model会通知View更新
  - View 更新变化数据使用户得到反馈

- MVVM即模型（data中的数据）、视图（模板）、视图模型（Model-View-ViewModel）（Vue实例对象）

  <img src="img/01_mvvm.png" style="zoom:60%;" />

  - View 接收用户交互请求
  - View 将请求转交给**ViewModel**
  - ViewModel 操作Model数据更新
  - Model 更新完数据，通知ViewModel数据发生变化
  - ViewModel 更新View数据

---

- 不同点：
  1. ViewModel 替换了 Controller，在UI层之下
  2. ViewModel 向 View 暴露它所需要的数据和指令对象
  3. ViewModel 接收来自 Model 的数据

---

#### 2. v-if v-show v-html

- v-if 会调用 `addIfCondition` 方法，生成 vnode 的时候会忽略对应节点，render 的时候就不会渲染。
- v-show 会生成 vnode ，render 的时候也会渲染成真实的节点，只是在render 过程中会在节点的属性中修改 show 属性值，即 display。
- v-html 会先移除节点下所有节点，调用html方法，通过 addProp 添加 innerHTML 属性。





## 七、插件库

- dayjs 格式化时间。
- 
