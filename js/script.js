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

        newTodo: "",

      } 
    },

    methods: {

        deleteTodo(todoIndex) {
            this.todos.splice(todoIndex, 1);
        },

        addTodo() {
            const toDoObj = {
                text: this.newTodo,
                done: false
            }

            if(this.newTodo == ""){
                alert("Inserisci un valore nel campo di testo!!");
            } else{
                this.todos.push(toDoObj);
                this.newTodo = "";
            }
        },

        doneStatus(actualIndex) {
            if(this.todos[actualIndex].done == false ){
                this.todos[actualIndex].done = true;
            } else {
                this.todos[actualIndex].done = false;
            }
        },
    },

  }).mount('#app')