<template>
    <h3>当前求和为{{sum}}</h3>
    <button @click="sum ++">+1</button>

    <hr>
    <h2>{{name}} ---- {{age}} -- {{job.js.salary}}</h2>
    <button @click="name += '!!' ">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.js.salary ++">修改薪水</button>
</template>

<script>
/* 
    普通数据 --> 响应式数据： ref reactive

    响应式数据 ---> 普通数据: toRaw markRaw
        toRaw: 只能处理 reactive的响应式数据
        markRaw
*/
import { reactive, ref, toRefs, toRaw} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name: 'denny',
            age: 12,
            job: {
                js: {
                    salary: 122222
                }
            }
        })
        let sum = ref(0);

        console.log(toRaw(person));

        return {
            person,
            sum,
            ...toRefs(person)
        }
    },
}
</script>

<style>

</style>