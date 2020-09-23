const form_todo = document.querySelector(".js-form-toDo"),
    input_todo = document.querySelector(".js-form-toDo input"),
    todoList = document.querySelector(".js-toDos");

const todos = [];

function saveTodo(){
    const todo = input_todo.value;
    localStorage.setItem("todos", todo);
    input_todo.value = "";
}

function handleTodoForm(event){
    event.preventDefault();
    saveTodo();
}
function loadTodo(){
    // console.log(localStorage.getItem("todos"));
}

function init(){
    loadTodo();
    form_todo.addEventListener("submit", handleTodoForm);
}

init();