<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>studentName: {{name}}</h2>
        <h2>age: {{age}}</h2>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
import {mixin} from '../mixin'

export default {
    data(){
        console.log(this);
        return {
            msg: '我是一名学生',
            age: 12,
            name: 'deey'
        }
    },
    mixins: [mixin]
}
</script>

<style>
.demo{
    width: 300px;
    height: 300px;
    background-color: crimson;
}
</style>