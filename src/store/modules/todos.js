import axios from 'axios'

const state = {
    todos : []
}

const getters = {
    getAllTodos : (state) => state.todos
    
}

const actions = {
    async fetchTodos ({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos' , res.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          { title, completed: false }
        );
    
        commit('newTodo', response.data);
    }
}

const mutations = {
    setTodos : (state,todos) => (state.todos = todos),
    newTodo  : (state,todo)  => state.todos.unshift(todo)
}

export default {
    state,
    getters,
    actions,
    mutations
}