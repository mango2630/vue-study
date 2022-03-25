<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo='addTodo'></MyHeader>
                <Lists 
                :checkTodo="checkTodo" :todos='todos'
                :deleteTodo='deleteTodo'></Lists>

                <MyFooter 
                :todos='todos' 
                @changeAllDone="changeAllDone"
                @clearAllDone="clearAllDone"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import Lists from './components/Lists'
import MyFooter from './components/MyFooter'

export default {
    name: 'App',
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    components: {
        MyHeader,
        Lists,
        MyFooter, 
    },
    methods: {
        addTodo(todoObj){
            this.todos.unshift(todoObj)
        },
        checkTodo(id){
            this.todos.forEach((todoObj)=>{
                if(todoObj.id === id){
                    todoObj.done = !todoObj.done;
                    console.log(todoObj);
                }
            })
        },
        deleteTodo(id){
            this.todos = this.todos.filter((todo)=>{
                return todo.id !== id;
            })
        },
        changeAllDone(value){
            console.log(value);
            if(value){
                // 全选
                this.todos.forEach((todoObj)=>{
                    todoObj.done = true;
                })
            }else{
                this.todos.forEach((todoObj)=>{
                    todoObj.done = false;
                })
            }
        },
        clearAllDone(){
            this.todos = this.todos.filter((todo)=>{
                return todo.done === false;
            })
        }
    },
    watch:{
        todos: {
            // 深度监视！！！！！！【done】
            deep:true,
            handler(value){
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    }
}
</script>

<style>
body{
    background-color: #fff;
}
.btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
}
</style>