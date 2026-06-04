let clickFtimes = 0;
let isVideoRightNow = false;

window.addEventListener("keydown", (event) => {
    
    console.log(event);
    //audio
    if(document.getElementById("keyboard-sounds").checked) {
        const keyAudio = document.createElement('audio');
        switch (event.code) {
            case "Space":
                keyAudio.src = "sounds/chime-alarm-multimedia_gjsihked.mp3";
            break;;
            case "Backspace":
                keyAudio.src = "sounds/16554_1460656892.mp3";
            break;
            case "Enter":
                keyAudio.src = "sounds/releasing-the-revolver-drum-from-cartridges.mp3";
            break;
            case "CapsLock":
                keyAudio.src = "sounds/erro.mp3";
            break;
            case "AltLeft":
                keyAudio.src = "sounds/tuco-get-out.mp3";
            break;

            default:
                keyAudio.src = "sounds/dragon-studio-ding-sfx-472366.mp3";
        }
        
        document.body.appendChild(keyAudio);
        keyAudio.play();
        setTimeout(() => {
            document.body.removeChild(keyAudio);
        }, 1000)

    }
    
    //video with Fang Yuan
    if(event.code == "KeyF") {
        if(clickFtimes == 0 && !isVideoRightNow) {
            setTimeout(() => {
                if(clickFtimes > 3){
                    const video = randVideo();
                    document.body.appendChild(video);
                    isVideoRightNow = true;
                    video.play();
                }
                clickFtimes = 0; 
            }, 1000);
        }
        clickFtimes += 1;
    }



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
//root.style.setProperty("--button-color", "rgba(202, 45, 45, 0.36);");
//root.style.setProperty("--button-hover-color", "rgba(46, 43, 43, 0.357);");
//root.style.setProperty("--button-keyboard-input", "rgba(46, 43, 43, 0.357);");

let buttonColor = document.getElementById("button-color");
let buttonHoverColor = document.getElementById("button-hover-color");
let buttonKeyboardInput = document.getElementById("button-keyboard-input");

console.log(buttonColor.value);
buttonColor.value = "#d9342f";

//I need to change it to https://github.com/simonwep/pickr?
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


function explosionBall() {
    const ball = document.createElement('div');
    let widthAndHight = parseInt(Math.random() * (100 - 30) + 30); //px
    let randXTransform = parseInt(Math.random() * (400 - (-300)) + (-300)); //px
    let randYTransform = parseInt(Math.random() * (400 - (-300)) + (-300)); //px
    let hexGreenColor = parseInt(Math.random() * (254 - 0) + 0);
    let color;
    if(hexGreenColor <= 15) {
        color = "#ff0" + hexGreenColor.toString(16) + "00";    
    } else {
        color = "#ff" + hexGreenColor.toString(16) + "00";
    }
    ball.style = ` visibility: hidden; background-color: ${color};  width: ${widthAndHight}px; height: ${widthAndHight}px; transform: translate(${randXTransform}px, ${randYTransform}px); position: absolute; vertical-align: middle; shape-outside: circle(); clip-path: circle(); transition: all 2s;`;
    ball.className = "explosion";

    return ball;
}


function randVideo() {
    const video = document.createElement("video");
    const videoSource = document.createElement("source");
    const videoList = [
        "https://v45.tiktokcdn-eu.com/1aa1721523a033db48f15e4e32259664/6a2438e1/video/tos/alisg/tos-alisg-pve-0037c001/oQLRyNLRWAJaDNJgIcK89jeCoybeIn6vI7eAQG/?a=1233&bti=ODszNWYuMDE6&&bt=1193&ft=L~O_go1.D12Nvg_zJzIxRwkSYl-H-UjNSWopiX&mime_type=video_mp4&rc=Njg7NzUzO2Q7ZWk1PDNlZUBpajZ0ZnE5cjx4NTMzODczNEBeLzA2Nl8vXy8xXmMuMmA1YSNjYWk0MmQ0MWphLS1kMTFzcw%3D%3D&vvpl=1&l=20260604151145BB90F08AE3E55115434C&btag=e0004d000",
        "https://v45.tiktokcdn-eu.com/2c76076f5b39cbb51307e84b1f7cab8d/6a248401/video/tos/alisg/tos-alisg-ve-37c813-sg/okRSIJva9DAYNSHkdjF7BRoQREuQfB4VEPfrWE/?a=1233&bti=ODszNWYuMDE6&&bt=1276&ft=bC~FamDdPD12NQhcKn-UxW.5hY3W3wv25BcAp&mime_type=video_mp4&rc=NzNpODo6ZDo1ZTo3O2c8M0Bpanl5bHc5cmk2NDMzNzczM0BjNV8vLjY1NmMxYzNjXzQ0YSNrYjVqMmRjNl9hLS1kMTZzcw%3D%3D&vvpl=1&l=20260604203218148C978A4AEDAD595471&btag=e0008d000",
        "https://v45.tiktokcdn-eu.com/ce4a70488b83818b76edee0db341fc1d/6a24857d/video/tos/alisg/tos-alisg-pve-0037c001/okfWgnnRrKfQfALMTMtIS6VgETiRAKemCUeGIy/?a=1233&bti=ODszNWYuMDE6&&bt=428&ft=bC~FamDdPD12NZScKn-Uxlt2SY3W3wv25xcAp&mime_type=video_mp4&rc=ZGdoO2U8NDNkZjs0NWU0OUBpanlrOG45cjh5eTMzODczNEBiLjJfXjNeXjQxMjIyLy80YSNwajFuMmRjaTZgLS1kMTFzcw%3D%3D&vvpl=1&l=2026060420384467272FD416AEB15A4F2F&btag=e0004d000",
        "https://v15m.tiktokcdn-eu.com/d4c4cb58cc4896be9debc2424954923d/6a248640/video/tos/alisg/tos-alisg-pve-0037c001/osMBIcD9FDfVDKOpURl5AB6Erg6IEUQfgoiNKE/?a=1233&bti=ODszNWYuMDE6&&bt=365&ft=bCkKJmwKPD12NW~cKn-UxM45hY3W3wv25bcAp&mime_type=video_mp4&rc=aTQ4Nzw6ZGc3ZjlkaGk7Z0Bpanlvc2o5cjg1MzMzODczNEA2LWI2LTZjNl8xL2EyNS8yYSNwbmteMmRjMTRhLS1kMTFzcw%3D%3D&vvpl=1&l=20260604204126A51FB9D3FDD4B759F8A7&btag=e00050000",
        "https://v45.tiktokcdn-eu.com/441ebb2245b4cbc3147fab44b55d0a2c/6a24873f/video/tos/alisg/tos-alisg-ve-37c813-sg/osG9Akb1IEIfQQIeaeGzRVlFblqecABngSAmLh/?a=1233&bti=ODszNWYuMDE6&&bt=1387&ft=bC~FamDdPD12N7TcKn-Uxnv2hY3W3wv25WcAp&mime_type=video_mp4&rc=NDQ7NmVlOTxoNmkzaDM7aEBpajNqZHM5cmhoNDMzNzczM0A0LV8zY19jXzMxYDRiLmMzYSNjMWJeMmRrNnNhLS1kMTZzcw%3D%3D&vvpl=1&l=202606042045035BA62498A16CE3594732&btag=e00095000",
        "https://v45.tiktokcdn-eu.com/455d498d5cf450aad3404f175712389e/6a248b4a/video/tos/alisg/tos-alisg-pve-0037c001/ooIAPPEBz10zMB0YUa4EUHATx5BsQDCiAiIiV/?a=1233&bti=ODszNWYuMDE6&&bt=707&ft=bC~FamDdPD12NWtcKn-UxKK5hY3W3wv25WcAp&mime_type=video_mp4&rc=aGZoZzs1Nzk1MzZnNmk2NUBpM2Y5NG45cmZqNjMzODczNEAtNC40XjUyNTAxXl42LzMwYSMtMXMuMmQ0NG5hLS1kMTFzcw%3D%3D&vvpl=1&l=20260604210350B24050866283045F8796&btag=e0007d000",
    ];
    let randVideoNumber = parseInt(Math.random() * (videoList.length - 0) + 0);
    video.style = "width: 600px; height: 600px; position: absolute; vertical-align: middle";
    videoSource.src = videoList[randVideoNumber];
    video.appendChild(videoSource);
    video.addEventListener("pause", (event) => { 
        for (let index = 0; index < 20; index++) {
            document.body.appendChild(explosionBall());
        }
        const explosionBalls = document.getElementsByClassName("explosion");

        for (let index = 0; index < explosionBalls.length; index++) {
                            explosionBalls[index].style.transition = "all 0s";
            explosionBalls[index].style.removeProperty("visibility");
            setTimeout(() => {
                explosionBalls[index].style.transition = "all 2s";
                explosionBalls[index].style.removeProperty("transform");
            },100);
        }
        document.body.removeChild(video)
        isVideoRightNow = false;
    })
    return video;
}




