<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">点我+1</button>
    <h2>当前求和为：{{msg}}</h2>
    <button @click="msg += '!!' ">点我+1</button>
</template>

<script>
import {ref, watch} from 'vue'
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

        // 监视属性
        // case1: 监视ref所定义的一个响应式数据
        watch(sum, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        }, {
            // 监视的配置
            immediate: true,
            // deep: true
        })
        // case2: 监视ref所定义的多个响应式数据
        watch([sum, msg], (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        })

        return {
            sum,
            msg
        }
    },
}
</script>

<style>

</style>