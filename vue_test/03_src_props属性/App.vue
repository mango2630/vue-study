<template>
    <div>
        <Student name='danny' :age='12' />
        <hr />
        <Student name='jenny' />
    </div>
</template>

<script>
import Student from './components/Student'
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习VUE'
        }
    },
    components: {
        Student
    },
    methods: {

    }
}
</script>

<style>

</style>