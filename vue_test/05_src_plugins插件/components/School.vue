<template>
    <div class="demo">
        <h2>schoolName: {{name}}</h2>
        <button @click='test'>test</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            name: 'school',
        }
    },
    methods: {
        test(){
            this.demo()
        }
    }
}
</script>

<style>
.demo{
    width: 300px;
    height: 150px;
    background-color: crimson;
}
</style>