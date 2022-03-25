<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">点我+1</button>
    <hr>

    <!-- 点击页面拿到坐标 -->
    <h2>当前点击时坐标：{{point.x}}--{{point.y}}</h2>
</template>

<script>
/*  
    什么是hook?
        - 本质是一个函数。
        - 把setup函数中使用的Composition API进行了封装。
        - 类似于 mixin????? [我忘了！！！]
        - 优势：服用代码，让setup中的逻辑更简单易懂
*/
import {ref} from 'vue'
import useP from '../hooks/usePoint'

export default {
    name: 'Demo',
    setup() {
        let sum = ref(0);
        let point = useP()

        return {
            sum,
            point
        }

    },
}
</script>

<style>

</style>