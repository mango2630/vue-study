<template>
    <div class="child">
        <h3>我是Child</h3>
        <Son/>
    </div>
</template>

<script>
import Son from './Son'
export default {
    name: 'Child',
    components: {Son}
}
</script>

<style>

</style>