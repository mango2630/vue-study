<template>
    <div>
        <ul class="todo-main">
            <Item v-for="item in todos" :todo="item" 
            :checkTodo='checkTodo' 
            :key="item.id"
            :deleteTodo="deleteTodo">
                {{item.title}}
            </Item>
        </ul>
    </div>
</template>

<script>
import Item from './Item'
export default {
    name: 'Lists',
    components: {
        Item
    },
    data(){
        return {
            
        }
    },
    props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>