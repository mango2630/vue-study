<template>
    <div>
        <!-- this.$store.state.sum ==> $store.state.sum -->
        <h1>当前求和为：{{sum}}</h1>

        <!-- getters!!!!! -->
        <h3>当前求和放大10倍后为：{{bigSum}}</h3>

        <h3>我在{{school}},学习{{subject}}</h3>

        <select v-model.number='n'>
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="JIA(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">求和为奇数再加</button>
        <button @click="incrementWait(n)">等等加</button>
        <h2>下方组件总人数：{{personList.length}}</h2>
    </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Count',
    data(){
        return {
            n: 1, /* 用户选择的数据 */
        }
    },
    computed:{
        ...mapState(['sum', 'school', 'subject', 'personList']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        ...mapMutations({
            JIA: 'JIA',
            decrement: 'JIAN'
        }),
        ...mapActions({
            incrementOdd: 'jiaOdd',
            incrementWait: 'jiaWait'
        })
    },
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>