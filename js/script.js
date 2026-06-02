let audioNextId = 0;

window.addEventListener("keydown", (event) => {
    
    console.log(event);
    //audio
    const keyAudio = document.createElement('audio');
    if(event.code == "Space") {
        keyAudio.src = "sounds/chime-alarm-multimedia_gjsihked.mp3";
    }
    else if (event.code == "Backspace") {
        keyAudio.src = "sounds/16554_1460656892.mp3";
    } 
    else if (event.code == "Enter"){
        keyAudio.src = "sounds/releasing-the-revolver-drum-from-cartridges.mp3";
    }
    else {
        keyAudio.src = "sounds/dragon-studio-ding-sfx-472366.mp3";
    }
    
    
    keyAudio.id = "audio" + audioNextId;
    audioNextId += 1;
    document.body.appendChild(keyAudio);
    keyAudio.play();
    setTimeout(() => {
        document.body.removeChild(keyAudio);
    }, 1000)


    //keyBoardInput
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.transition = "all 0s";
    document.getElementById(keyCodeString).style.backgroundColor = "var(--button-keyboard-input)";
    document.getElementById("TextShow").innerHTML += event.key;
    
})


window.addEventListener("keyup", (event) => {
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.removeProperty("transition");
    document.getElementById(keyCodeString).style.removeProperty("background-color");   
})

let checkboxLayout = document.getElementById("show-keyboard-layout");
checkboxLayout.addEventListener("change", function() {
    if(this.checked) {
        document.getElementById("keyboard").style.backgroundImage = ("url('img/rpi_MECH_keyboard_SE_layout-1024x451-1.png')");
    }
    else{
        document.getElementById("keyboard").style.removeProperty("background-image");
    }
})


const root = document.documentElement;
//root.style.setProperty("--button-color", "rgba(46, 43, 43, 0.357);");
//root.style.setProperty("--button-hover-color", "rgba(46, 43, 43, 0.357);");
//root.style.setProperty("--button-keyboard-input", "rgba(46, 43, 43, 0.357);");

let buttonColor = document.getElementById("button-color");
let buttonHoverColor = document.getElementById("button-hover-color");
let buttonKeyboardInput = document.getElementById("button-keyboard-input");



buttonColor.addEventListener("change", function() {
    let alpha = parseInt(document.getElementById("opacity1").value);
    let color = this.value;
    color += alpha.toString(16);
    root.style.setProperty("--button-color", color);
})
buttonHoverColor.addEventListener("change", function() {
    let alpha = parseInt(document.getElementById("opacity2").value);
    let color = this.value;
    color += alpha.toString(16);
    root.style.setProperty("--button-hover-color", color);
})
buttonKeyboardInput.addEventListener("change", function() {
    let alpha = parseInt(document.getElementById("opacity3").value);
    let color = this.value;
    color += alpha.toString(16);
    root.style.setProperty("--button-keyboard-input", color);
})