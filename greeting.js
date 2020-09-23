const form_name = document.querySelector(".js-form-name"),
    input_name = document.querySelector(".js-form-name input"),
    greeting = document.querySelector(".js-greeting");
    
const SHOWING_NAME = "showing_name";

function saveName(name){
    localStorage.setItem("name", name);
    input_name.value="";
}

function submitName(event){
    event.preventDefault();
    const name = input_name.value;
    saveName(name);
    paintGreeting(name);
}

function askForName(){
    form_name.classList.add(SHOWING_NAME);
    form_name.addEventListener("submit", submitName);
}

function paintGreeting(name){
    form_name.classList.remove(SHOWING_NAME);
    greeting.classList.add(SHOWING_NAME);
    greeting.innerHTML = `Have a good day, ${name}!`;
}

function loadName(){
    const name = localStorage.getItem("name");
    if(name === null){
        askForName();
    } else {
        paintGreeting(name);

    }
}

function init(){
    loadName();
}

init();