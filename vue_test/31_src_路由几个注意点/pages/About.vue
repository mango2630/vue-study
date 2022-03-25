<template>
    <div>
        <h2>我是About</h2>
    </div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return {

        }
    },
    mounted(){
        console.log('about__mounted');

        window.aboutRoute = this.$route;
        window.aboutRoute = this.$router;
    },
    beforeDestroy(){
        /* 所有的路由组件不被点击时，都被销毁 */
        console.log('About组件即将被销毁。。。。。');
    }
}
</script>

<style>

</style>