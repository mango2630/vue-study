<template>
    <div class="child">
        <h3>我是Child{{sum}}</h3>
        <Son/>
    </div>
</template>

<script>
// import Son from './Son'
import {ref} from 'vue'
export default {
    name: 'Child',
    // components: {Son},
    setup(){
        let sum = ref(0);

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({sum})
            }, 3000)
        })
    }
}
</script>

<style>

</style>