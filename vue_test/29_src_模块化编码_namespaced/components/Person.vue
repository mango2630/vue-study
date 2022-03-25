<template>
    <div>
        <h2>上方组件求和为：{{sum}}</h2>
        <h1>人员列表</h1>
        <input type="text" v-model='personName' placeholder="请输入名字">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="(item, index) in personList" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
// import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data(){
        return {
            personName: ''
        }
    },
    computed: {
        // ...mapState(['personList'])
        personList(){
            return this.$store.state.personAbout.personList;
        },
        sum(){
            return this.$store.state.countAbout.sum;
        }

        // getters: ---> personAbout/firstName
    },
    methods: {
        addPerson(){
            // NOTICE !!!!!!!!
            this.$store.dispatch('personAbout/add', {
                id: nanoid(),
                name: this.personName
            })
            this.personName = '';
        }
    }
}
</script>

<style>

</style>