const { createApp } = Vue

  createApp({
    data() {
      return {
        
        todos: [
            {
                text: "Comprare il Latte",
                done: false,
            },
            {
                text: "Comprare il pane",
                done: true,
            },
            {
                text: "Andare dal parrucchiere",
                done: false,
            },
            {
                text: "Chiamare Domenico",
                done: true,
            },
        ],

        newTodo:
            {
                text: "",
                done: false,
            },

      } 
    },

    methods: {

        deleteTodo(todoIndex) {
            this.todos.splice(todoIndex, 1);
        },

        addTodo() {
            this.todos.push(this.newTodo);
            this.newTodo = "";
        },
    },

  }).mount('#app')