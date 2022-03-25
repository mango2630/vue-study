<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model='keyWord' />&nbsp;
                <button @click='searchUsers' >Search</button>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data(){
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新List得数据
            // this.$bus.$emit('getUsers', false, true, '', [])

            this.$bus.$emit('getUsers', {isFirst: false, isLoading: true, errMsg: '', users: []})

            axios.get(`http://api.github.com/search/users?q=${this.keyWord}`)
            .then(
                response => {
                    
                    this.keyWord = '';

                    console.log(response.data.items);
                    // 发送数据
                    // this.$bus.$emit('getUsers',false, false, '', response.data.items)

                    this.$bus.$emit('getUsers', {isFirst: false, isLoading: false, errMsg: '', users: response.data.items})
                },
                err => {
                    console.log(err);
                    // this.$bus.$emit('getUsers',false, false, '', err)

                    this.$bus.$emit('getUsers', {isFirst: false, isLoading: false, errMsg: err, users: []})
                }
            )

            console.log(this);
        }
    }
}
</script>

<style>

</style>