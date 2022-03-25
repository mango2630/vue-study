<template>
    <div>
        <h3>学生名字：{{studentName}}</h3>
        <h3>学生年龄{{studentAge}}</h3>
        <button @click="sendStudentName" >把学生名给School组件</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return {
            studentName: 'Danny',
            studentAge: 18,
        }
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello', 123)
        }
    }
}
</script>

<style>

</style>