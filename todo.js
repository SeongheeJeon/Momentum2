const form_todo = document.querySelector(".js-form-toDo"),
    input_todo = document.querySelector(".js-form-toDo input"),
    todoList = document.querySelector(".js-toDos");

let todos = [];

function deleteTodo(event){
    const delTodo = event.target.parentNode;
    const index = todos.findIndex(i => i.id===delTodo.id);
    todoList.removeChild(delTodo);
    todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function checkboxChange(event){
    const checkbox = event.target;
    const label = checkbox.parentNode;
    label.classList.toggle("checked");
    label.nextSibling.classList.toggle("checked");
}
function paintTodo(todo){
    const li = document.createElement("li"),
        input = document.createElement("input"),
        span = document.createElement("span"),
        btn = document.createElement("button");
        label = document.createElement("label");

    span.innerHTML= todo.text;
    btn.innerHTML = 'x';
    li.id = todo.id;
    btn.addEventListener("click", deleteTodo);
    input.type = "checkbox";
    input.addEventListener("change", checkboxChange);
    label.appendChild(input);
    li.appendChild(label);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function saveTodo(){
    const text = input_todo.value;
    const newId = localStorage.getItem('newId');
    localStorage.setItem('newId', parseInt(newId)+1);
    const todo = {
        id: `todo${newId}`,
        text 
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input_todo.value = "";
    paintTodo(todo);    
}

function submitTodoForm(event){
    event.preventDefault();
    saveTodo();
}
function loadTodo(){
    const LS_todos = localStorage.getItem('todos'); 
    if(LS_todos !== null){
        todos = JSON.parse(LS_todos);
        todos.forEach(element => paintTodo(element));
    }    
}
function setLS_NewId(){ // 
    if(localStorage.getItem('newId') === null){
        localStorage.setItem('newId', 1);
    }
}
function init(){
    setLS_NewId();
    loadTodo();
    form_todo.addEventListener("submit", submitTodoForm);
}

init();