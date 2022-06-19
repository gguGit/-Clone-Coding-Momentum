const greetings=["Hi","Hello"];

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greetingMsg=document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName=loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(username) {
    const index=Math.floor(Math.random()*2);
    greetingMsg.innerHTML=`${greetings[index]} ${username}`;
    greetingMsg.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName=localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} 
else {
    paintGreetings(savedUserName);
}