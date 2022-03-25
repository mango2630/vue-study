<template>
    <div>
        <Student />
        <hr />
        <School />
    </div>
</template>

<script>
// 后来者居上【style】
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习VUE'
        }
    },
    components: {
        Student,
        School
    },
    methods: {

    }
}
</script>

<style>

</style>