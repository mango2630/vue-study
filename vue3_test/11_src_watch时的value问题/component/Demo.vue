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
import {ref, watch} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0);
        let msg = ref('hello');
        let person = ref({
            name: 'denny',
            age: 12,
            job: {
                js: {
                    salary: 122222
                }
            }
        })

        console.log(sum, msg, person); // RefImpl

        watch(sum, (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        })

        // Proxy
        watch(person.value, (newValue, oldValue)=>{
            console.log('person', newValue, oldValue);
        })
        watch(person.value, (newValue, oldValue)=>{
            console.log('person', newValue, oldValue);
        },{deep: true})

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