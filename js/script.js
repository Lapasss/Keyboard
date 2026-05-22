let isFunctionActive = false;
document.addEventListener("keydown", (event) => {
    //console.log(event)
    var keyCodeString = event.code;
    //console.log(keyCodeString);
    document.getElementById(keyCodeString).style.backgroundColor = "var(--button-keyboard-input)";
    /*
    setTimeout(() => {
        if(document.getElementById(keyCodeString).style.backgroundColor == "var(--button-keyboard-input)"){
            document.getElementById(keyCodeString).style.removeProperty("background-color");
        }
            
    }, 3000);
    */
})

document.addEventListener("keyup", (event) => {
    //console.log(event)
    var keyCodeString = event.code;
    //console.log(keyCodeString);
    document.getElementById(keyCodeString).style.removeProperty("background-color");   
})