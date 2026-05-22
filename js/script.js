document.addEventListener("keydown", (event) => {
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.backgroundColor = "var(--button-keyboard-input)";
})


document.addEventListener("keyup", (event) => {
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.removeProperty("background-color");   
})