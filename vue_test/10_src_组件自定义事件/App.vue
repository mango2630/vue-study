<template>
    <div class='rootbg'>
        <h1>{{msg}} || {{studentName}} || {{schoolName}} </h1>

        <!-- 传递函数类型的props实现 -->
        <School :getSchoolName="getSchoolName"></School>

        <!-- 绑定一个自定义事件【v-on】，实现子给父传递数据 -->
        <Student v-on:atguigu='demo' @test='getSchoolName'/>

        <!-- 绑定一个自定义事件【refs】 -->
        <Student ref='student' />

        <!-- 防止把原生dom事件当作自定义事件 -->
        <Student ref='student' @click.native = 'demo' />
    </div>
</template>

<script>
import School from "./components/School";
import Student from './components/Student'

export default {
    name: 'App',
    data() {
        return {
            msg: '你好啊！！！',
            studentName: '',
            schoolName: ''
        }
    },
    components: {
        School,
        Student
    },
    methods: {
        getSchoolName(name){
            console.log('yess!!!!', name);
            this.schoolName = name;
        },
        demo(name){
            console.log('demo被调用了', name);
            this.studentName = name;
        },
        /* demo(name, ...params){
            console.log('demo被调用了', name, params);
        } */
    },
    mounted(){
        this.$refs.student.$on('atguigu', this.demo);

        /* this.$refs.student.$on('atguigu', function () {
            // this 为 student'vc
        }) */

        // 箭头函数没有自己的 this, 只能向外找，所以OKK！！

        // this.$refs.student.$once('atguigu', this.demo);
    }
}
</script>

<style>
.rootbg{
    background-color: brown;
}

</style>

