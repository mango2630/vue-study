<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">点我+1</button>

    <h2>当前求和为：{{msg}}</h2>
    <button @click="msg += '!!' ">点我+1</button>

    <h2>{{person.name}} ---- {{person.age}} -- {{person.job.js.salary}}</h2>
    <button @click="person.name += '!!' ">修改姓名</button>
    <button @click="person.age ++">修改年龄</button>
    <button @click="person.job.js.salary ++">修改薪水</button>
</template>

<script>
import {ref, watch, reactive} from 'vue'
export default {
    name: 'Demo',
    watch:{
        // 简单写法
        /* sum(newValue, oldValue){
            console.log(newValue, oldValue);
        } */

        // 完整写法
        /* sum: {
            immediate: true, // 上来就监视
            deep: true, //深度监视
            handler(newValue, oldValue){
                console.log(newValue, oldValue);
            }
        } */
    },
    setup() {
        let sum = ref(0);
        let msg = ref('hello');
        let person = reactive({
            name: 'denny',
            age: 12,
            job: {
                js: {
                    salary: 122222
                }
            }
        })

        // 监视属性
        // case1: 监视ref所定义的一个响应式数据
        /* watch(sum, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }, {
            // 监视的配置
            immediate: true,
            // deep: true
        }) */

        // case2: 监视ref所定义的多个响应式数据
        /* watch([sum, msg], (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }) */

        
        // case3: 监视reactive, 注意：此处无法正确获得oldValue!!! ;;; 强制开启了深度监视（deep配置无效）【！！！！！！！！！！！】
        /* watch(person, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }) */

        // case4: 监视reactive 所定义的一个响应式数据的某个属性
        /* watch(()=>person.name, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }) */

        // case5: 监视reactive 所定义的一个响应式数据的某些属性
        /* watch([()=>person.name, ()=>person.age], (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }) */

        // 特殊情况
        watch(()=>person.job.js.salary, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }, {
            deep: true
        })

        return {
            sum,
            msg,
            person
        }
    },
}
</script>

<style>

</style>