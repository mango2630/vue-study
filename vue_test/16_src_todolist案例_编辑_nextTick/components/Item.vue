<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @click='handleCheck(todo.id)'/>
                
                <span v-show="!todo.isEdit" >{{todo.title}}</span>

                <input 
                type="text"
                v-show="todo.isEdit"  
                :value='todo.title'
                ref="inputTitle"
                @blur="handleBlur($event, todo)">
            </label>
            
            <button class="btn btn-danger" @click="deleteItem(todo.id)" >删除</button>
            <button class="btn btn-edit" @click="modifyItem(todo)" >编辑</button>
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
            pubsub.publish('checkTodo', id)
        },
        deleteItem(id){
            if(confirm('确定删除吗？')){
                pubsub.publish('deleteTodo', id)
            }
        },
        modifyItem(todo){
            
            // 有该属性
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true;
            }else{
                this.$set(todo, 'isEdit', true)
            }

            /* setTimeout(()=>{
                this.$refs.inputTitle.focus()
            }, 200)   */  
            
            // DOM节点更新后再执行。
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(event, todo){
            todo.isEdit = false;
            this.$bus.$emit('updateTodo', todo.id, event.target.value)
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