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
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">求和为奇数再加</button>
        <button @click="incrementWait">等等加</button>
    </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
    name: 'Count',
    data(){
        return {
            n: 1, /* 用户选择的数据 */
        }
    },
    computed:{
        /* sum(){
            return this.$store.state.sum;
        }, */
        /* school(){
            return this.$store.state.school;
        }, */

        // 借助mapState生成计算属性，从state中读取数据。[对象写法]
        ...mapState({sum: 'sum', 
            school: 'school', 
            subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据。[数组写法]
        // ...mapState(['sum', 'school', 'subject']),

        /* bigSum(){
            return this.$store.state.bigSum;
        } */
        ...mapGetters({bigSum: 'bigSum'})
        // ...mapGetters(['bigSum'])
    },
    methods: {
        increment(){
            // this.$store.dispatch('jia', this.n)
            this.$store.commit('JIA', this.n);
        },
        decrement(){
            this.$store.dispatch('jian', this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait(){
            setTimeout(() => {
                this.$store.dispatch('jiaWait', this.n)
            }, 500);
        }
    },
    mounted(){
        console.log('Count', this);
        const x = mapState({'he': 'sum', "xuexiao": 'school'})
        console.log('xx@@@@@@@@@@@', x);
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>