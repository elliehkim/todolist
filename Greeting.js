const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem("currentUser",text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hi ${text}`;  
}


function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askName();
    } else {
        paintGreeting(currentUser);
    }
}


function init(){
loadname();
}

init();