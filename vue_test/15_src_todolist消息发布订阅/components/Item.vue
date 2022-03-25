<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @click='handleCheck(todo.id)'/>
                <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-danger" @click="deleteItem(todo.id)" >删除</button>
        </li>
    </div>
</template>

<script>    
import pubsub from 'pubsub-js'
export default {
    name: 'Item',
    data(){
        return {
        }
    },
    props:['todo'],
    methods: {
        handleCheck(id){
            //  通知APP组件将对应的done值取反
            // this.checkTodo(id)
            // this.$bus.$emit('checkTodo', id)

            pubsub.publish('checkTodo', id)
        },
        deleteItem(id){
            if(confirm('确定删除吗？')){
                // this.deleteTodo(id);
                // this.$bus.$emit('deleteTodo', id)

                pubsub.publish('deleteTodo', id)
            }
        }
    }
}
</script>

<style>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid rgba(134, 30, 30, 0.2) !important;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: beige;
}
li:hover button{
    display: block;
}
</style>