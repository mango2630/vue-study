<template>
    <h3>一个人信息:{{person.fullName}}</h3>
    姓：<input type="text" v-model="person.firstName"> <br>
    名：<input type="text" v-model="person.lastName">
    <hr>
    全名：<input type="text" v-model="person.fullName">

</template>

<script>
import {reactive, computed} from 'vue'
export default {
    name: 'Demo',
    // vue2计算属性写法
    /* computed:{
        fullName(){
            console.log('fullName', this);
            return this.person.firstName + '--' + this.person.lastName;
        }
    }, */
    setup() {
        let person = reactive({
            firstName: '张',
            lastName: '三',
        })
        
        // 计算属性--简写
        /* person.fullName = computed(()=>{
            return person.firstName + '--' + person.lastName
        }) */

        // 计算属性--完整写法
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const nameArr = value.split('-');
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            }
        })

        return {
            person,
        }
    },
}
</script>

<style>

</style>