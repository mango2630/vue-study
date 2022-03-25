<template>
    <div>
        <h2>我是Home</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {

        }
    },
    mounted(){
        console.log('Home_mounted');
        // $router  $route

        window.homeRoute = this.$route;
        window.homeRoute = this.$router;
    }
}
</script>

<style>

</style>