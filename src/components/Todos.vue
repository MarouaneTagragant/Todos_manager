<template>
    <div>
        <h1>ALL Todos</h1>
        <div class="todos">
            <div class="todo" v-for="todo in getAllTodos" :key="todo.id">
                {{ todo.title }}
            </div>
        </div>  
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name : 'Todos',
    methods : {
        ...mapActions(['fetchTodos'])
    },
    computed : mapGetters(['getAllTodos']),
    created(){
        this.fetchTodos()
    }
    
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

</style>