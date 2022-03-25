<template>
    <div class="demo">
        <h2>schoolName: {{name}}</h2>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
// 引入一个混合
import {mixin, datamixin} from '../mixin'

export default {
    data(){
        console.log(this);
        return {
            name: 'school',
            /* 与mixin相比，以个人为主 */
            a: 12
        }
    },
    mixins: [mixin, datamixin]
}
</script>

<style>
.demo{
    width: 300px;
    height: 300px;
    background-color: crimson;
}
</style>