<template>
    <div class="son">
        <h3>我是son</h3>
        {{car}}
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name: 'Son',
    setup(){
        let car = inject('car');
        
        return {car}
    }
}
</script>

<style>

</style>