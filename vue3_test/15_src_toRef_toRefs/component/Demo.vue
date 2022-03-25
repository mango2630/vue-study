<template>
    <h2>{{name}} ---- {{age}} -- {{job.js.salary}}</h2>
    <button @click="name += '!!' ">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.js.salary ++">修改薪水</button>
</template>

<script>
/* 
    toRef:
        - 创建一个ref对象，其value指向另一个对象中的某个属性。
        - 要将响应式对象中的某个属性单独提供给外部使用
*/
import { reactive, toRef, toRefs} from 'vue'
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

        const name1 = person.name;
        console.log(name1);
        const name2 = toRef(person, 'name');
        console.log(name2);

        const x = toRefs(person);
        console.log(x, '+++++++++');

        return {
            /* name: toRef(person, 'name'),
            age: toRef(person, 'age'),
            salary: toRef(person.job.js, 'salary') */

            ...toRefs(person)
        }
    },
}
</script>

<style>

</style>