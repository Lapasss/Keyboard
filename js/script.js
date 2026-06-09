let clickFtimes = 0;
let isVideoRightNow = false;
let keyVActive = false;



window.addEventListener("keydown", (event) => {
    
    console.log(event);
    //audio
    if(!document.getElementById("keyboard-sounds").checked) {
        const keyAudio = document.createElement('audio');
        switch (event.code) {
            case "Space":
                keyAudio.src = "filer/sounds/chime-alarm-multimedia_gjsihked.mp3";
            break;;
            case "Backspace":
                keyAudio.src = "filer/sounds/16554_1460656892.mp3";
            break;
            case "Enter":
                keyAudio.src = "filer/sounds/releasing-the-revolver-drum-from-cartridges.mp3";
            break;
            case "CapsLock":
                keyAudio.src = "filer/sounds/erro.mp3";
            break;
            case "AltLeft":
                keyAudio.src = "filer/sounds/tuco-get-out.mp3";
            break;

            default:
                keyAudio.src = "filer/sounds/dragon-studio-ding-sfx-472366.mp3";
        }

        document.body.appendChild(keyAudio);
        keyAudio.play();
        setTimeout(() => {
            document.body.removeChild(keyAudio);
        }, 1000)

    }
    
    if(event.code == "KeyK") {
        explode();    
    } else if (event.code == "KeyV") {

        const body = document.getElementById("body");
        if(!keyVActive){
            body.style.backgroundImage = "url('filer/video/Adobe Express2verity.gif')";
        }
        else {
            body.style.removeProperty("background-image");
        }
        keyVActive = !keyVActive;
    }
    


    //video with Fang Yuan
    if(event.code == "KeyF") {
        if(clickFtimes == 0 && !isVideoRightNow) {
            clickFtimes += 1;
            setTimeout(() => {
                if(clickFtimes > 3){
                    explode();
                    const video = randVideo();
                    document.body.appendChild(video);
                    isVideoRightNow = true;
                    video.play();
                }
                clickFtimes = 0;
            }, 1000);
        }
        else {
            clickFtimes += 1;
        }    
        
    }

    //keyBoardInput
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.transition = "all 0s";
    document.getElementById(keyCodeString).style.backgroundColor = "var(--button-keyboard-input)";
    if(event.code.includes("Key") || event.code.includes("Digit") || event.code == "Space"){
        document.getElementById("TextShow").innerHTML += event.key; 
    }
    else if(event.code == "Backspace"){
        const TextShow = document.getElementById("TextShow"); 
        TextShow.innerHTML = TextShow.innerHTML.slice(0, -1);
    }
        
    
})


function explode() {
    for(let i = 0; i < 5; i++) {  
        const myEx = new Explosion(50, (200*i));
        myEx.createExplosion();
    }
    const audio = document.createElement('audio');
    audio.src = "filer/sounds/big-explosion.mp3";
    document.body.appendChild(audio);
    audio.play();
    setTimeout(() => {
        document.body.removeChild(audio);
    }, 1000)

}

window.addEventListener("keyup", (event) => {
    var keyCodeString = event.code;
    document.getElementById(keyCodeString).style.removeProperty("transition");
    document.getElementById(keyCodeString).style.removeProperty("background-color");   
})



let checkboxLayout = document.getElementById("show-keyboard-layout");
checkboxLayout.addEventListener("change", function() {
    if(this.checked) {
        document.getElementById("keyboard").style.backgroundImage = ("url('filer/img/rpi_MECH_keyboard_SE_layout-1024x451-1.png')");
    }
    else{
        document.getElementById("keyboard").style.removeProperty("background-image");
    }
})


const root = document.documentElement;

let buttonColor = document.getElementById("button-color");
let buttonHoverColor = document.getElementById("button-hover-color");
let backgroundColor = document.getElementById("background-color");
let buttonKeyboardInput = document.getElementById("button-keyboard-input");

buttonColor.value = getComputedStyle(root).getPropertyValue('--button-color').slice(0, -2);
buttonHoverColor.value = getComputedStyle(root).getPropertyValue('--button-hover-color').slice(0, -2);
buttonKeyboardInput.value = getComputedStyle(root).getPropertyValue('--button-keyboard-input').slice(0, -2);
backgroundColor.value = getComputedStyle(root).getPropertyValue('--background-color');


backgroundColor.addEventListener("change", function() {
    let color = this.value;
    root.style.setProperty("--background-color", color);
})
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




function randVideo() {
    const video = document.createElement("video");
    const videoSource = document.createElement("source");
    const videoList = [
        "filer/video/Download (1).mp4",
        "filer/video/Download (2).mp4",
        "filer/video/Download.mp4",
    ];
    let randVideoNumber = parseInt(Math.random() * (videoList.length - 0) + 0);
    video.id = "FangYuanVideo";
    videoSource.src = videoList[randVideoNumber];
    video.appendChild(videoSource);
    video.addEventListener("pause", (event) => { 
        document.body.removeChild(video);
        explode();
        isVideoRightNow = false;
        clickFtimes = 0;
    })
    return video;
}




