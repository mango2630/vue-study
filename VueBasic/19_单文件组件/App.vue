<template>
    <div>
        <School></School>
        <SchoolName></SchoolName>
    </div>
</template>

<script>
// 引入组件
import School from './School'
import SchoolName from './SchoolName'

export default {
    name: 'App',
    components: {
        School,
        SchoolName
    }
}
</script>

<style>

</style>