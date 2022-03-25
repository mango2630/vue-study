<template>
    <div class="container">
        <Search />
        <Lists />
    </div>
</template>

<script>

import Search from './components/Search'
import Lists from './components/Lists'

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        Search,
        Lists
    },
    methods: {
    }
}
</script>

<style>
</style>