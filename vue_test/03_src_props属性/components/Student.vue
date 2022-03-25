<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>studentName: {{name}}</h2>
        <h2>studentAge：{{age + 1}}</h2>
        <h2>changeAge: {{myAge}}</h2>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
export default {
    data(){
        console.log(this);
        return {
            msg: '我是一名学生',
            // props优先级高于 data ！！！ important
            myAge: this.age
        }
    },
    // 简单接受
    // props: ['name', 'age']
    
    // 接受的同时对数据进行类型限制
    /* props: {
        name: String,
        age: Number,
    } */

    // 类型限制+默认值指定+必要性限制
    props: {
        name: {
            type: String,
            required: true // name是必要的
        },
        age: {  
            type: Number,
            default: 18 // 默认值
        }
    },
    methods:{
        changeAge(){
            this.myAge = 3
        }
    }
}
</script>

<style>
.demo{
    width: 300px;
    height: 300px;
    background-color: crimson;
}
</style>