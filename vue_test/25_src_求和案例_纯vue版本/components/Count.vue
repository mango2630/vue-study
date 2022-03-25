<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>

        <!-- 收集到的东西强制转换为number, 解决字符串问题！！！ -->
        <select v-model.number='n'>

            <!-- 当作js表达式解析，解决问题！！ -->
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
export default {
    name: 'Count',
    data(){
        return {
            sum: 0, /* 当前的和 */
            n: 1, /* 用户选择的数据 */
        }
    },
    methods: {
        increment(){
            this.sum += this.n;
        },
        decrement(){
            this.sum -= this.n;
        },
        incrementOdd(){
            console.log(this.sum);
            if(this.sum % 2 === 0){
                this.sum += this.n;
            }
        },
        incrementWait(){
            setTimeout(() => {
                this.sum += this.n;
            }, 500);
        }
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>