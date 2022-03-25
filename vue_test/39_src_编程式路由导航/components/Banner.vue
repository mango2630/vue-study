<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click='back'>后退</button>
            <button @click="forward">前进</button>
            <button @click="test()">test_go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back(){
            this.$router.back() // 后退
            console.log(this.$router); 
        },
        forward(){
            this.$router.forward() // 前进
        },
        test(){
            this.$router.go(-2); // 可前进可后退
        }
    }
}
</script>

<style>

</style>