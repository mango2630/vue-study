<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>studentName: {{name}}</h2>
        <h2>age: {{age}}</h2>
    </div>
</template>

<script>

export default {
    data(){
        return {
            msg: '我是一名学生',
            age: 12,
            name: 'deey'
        }
    },
}
</script>

<style scoped>
.demo{
    width: 300px;
    height: 150px;
    background-color: rgb(57, 20, 220);
}
</style>