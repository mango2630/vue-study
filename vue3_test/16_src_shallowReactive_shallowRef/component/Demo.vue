<template>
    <h2>{{person}}</h2>
    <h2>{{x.y}}</h2>
    <button @click="x.y ++">+1</button>

    <hr>
    <h2>{{name}} ---- {{age}} -- {{job.js.salary}}</h2>
    <button @click="name += '!!' ">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.js.salary ++">修改薪水</button>
</template>

<script>
/* 
    shallowReactive ：只处理对象最外层属性的响应式
    shallowRef：只处理基本数据类型的响应，不进行对象的响应式处理
    
*/
import { reactive, shallowReactive, shallowRef, toRefs} from 'vue'
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

        let x = shallowRef({
            y: 0
        });
        console.log('@@@2', x); // object

        return {
            x,
            person,
            ...toRefs(person)
        }
    },
}
</script>

<style>

</style>