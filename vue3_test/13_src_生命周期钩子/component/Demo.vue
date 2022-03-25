<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">点我+1</button>

</template>

<script>
import {ref, onBeforeMount,} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0);

        onBeforeMount(() => {
            console.log('onbeforemount')
        })
        return {
            sum
        }

    },
    /* beforeCreate() {
        console.log('--beforeCreate')
    },
    beforeUnmount() {
        console.log('-beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }, */
}
</script>

<style>

</style>