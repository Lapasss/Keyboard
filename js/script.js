let clickFtimes = 0;
let isVideoRightNow = false;




window.addEventListener("keydown", (event) => {
    
    console.log(event);
    //audio
    if(document.getElementById("keyboard-sounds").checked) {
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
        "https://v45.tiktokcdn-eu.com/1aa1721523a033db48f15e4e32259664/6a2438e1/video/tos/alisg/tos-alisg-pve-0037c001/oQLRyNLRWAJaDNJgIcK89jeCoybeIn6vI7eAQG/?a=1233&bti=ODszNWYuMDE6&&bt=1193&ft=L~O_go1.D12Nvg_zJzIxRwkSYl-H-UjNSWopiX&mime_type=video_mp4&rc=Njg7NzUzO2Q7ZWk1PDNlZUBpajZ0ZnE5cjx4NTMzODczNEBeLzA2Nl8vXy8xXmMuMmA1YSNjYWk0MmQ0MWphLS1kMTFzcw%3D%3D&vvpl=1&l=20260604151145BB90F08AE3E55115434C&btag=e0004d000",
        "https://v45.tiktokcdn-eu.com/2c76076f5b39cbb51307e84b1f7cab8d/6a248401/video/tos/alisg/tos-alisg-ve-37c813-sg/okRSIJva9DAYNSHkdjF7BRoQREuQfB4VEPfrWE/?a=1233&bti=ODszNWYuMDE6&&bt=1276&ft=bC~FamDdPD12NQhcKn-UxW.5hY3W3wv25BcAp&mime_type=video_mp4&rc=NzNpODo6ZDo1ZTo3O2c8M0Bpanl5bHc5cmk2NDMzNzczM0BjNV8vLjY1NmMxYzNjXzQ0YSNrYjVqMmRjNl9hLS1kMTZzcw%3D%3D&vvpl=1&l=20260604203218148C978A4AEDAD595471&btag=e0008d000",
        "https://v45.tiktokcdn-eu.com/ce4a70488b83818b76edee0db341fc1d/6a24857d/video/tos/alisg/tos-alisg-pve-0037c001/okfWgnnRrKfQfALMTMtIS6VgETiRAKemCUeGIy/?a=1233&bti=ODszNWYuMDE6&&bt=428&ft=bC~FamDdPD12NZScKn-Uxlt2SY3W3wv25xcAp&mime_type=video_mp4&rc=ZGdoO2U8NDNkZjs0NWU0OUBpanlrOG45cjh5eTMzODczNEBiLjJfXjNeXjQxMjIyLy80YSNwajFuMmRjaTZgLS1kMTFzcw%3D%3D&vvpl=1&l=2026060420384467272FD416AEB15A4F2F&btag=e0004d000",
        "https://v15m.tiktokcdn-eu.com/d4c4cb58cc4896be9debc2424954923d/6a248640/video/tos/alisg/tos-alisg-pve-0037c001/osMBIcD9FDfVDKOpURl5AB6Erg6IEUQfgoiNKE/?a=1233&bti=ODszNWYuMDE6&&bt=365&ft=bCkKJmwKPD12NW~cKn-UxM45hY3W3wv25bcAp&mime_type=video_mp4&rc=aTQ4Nzw6ZGc3ZjlkaGk7Z0Bpanlvc2o5cjg1MzMzODczNEA2LWI2LTZjNl8xL2EyNS8yYSNwbmteMmRjMTRhLS1kMTFzcw%3D%3D&vvpl=1&l=20260604204126A51FB9D3FDD4B759F8A7&btag=e00050000",
        "https://v45.tiktokcdn-eu.com/441ebb2245b4cbc3147fab44b55d0a2c/6a24873f/video/tos/alisg/tos-alisg-ve-37c813-sg/osG9Akb1IEIfQQIeaeGzRVlFblqecABngSAmLh/?a=1233&bti=ODszNWYuMDE6&&bt=1387&ft=bC~FamDdPD12N7TcKn-Uxnv2hY3W3wv25WcAp&mime_type=video_mp4&rc=NDQ7NmVlOTxoNmkzaDM7aEBpajNqZHM5cmhoNDMzNzczM0A0LV8zY19jXzMxYDRiLmMzYSNjMWJeMmRrNnNhLS1kMTZzcw%3D%3D&vvpl=1&l=202606042045035BA62498A16CE3594732&btag=e00095000",
        "https://v45.tiktokcdn-eu.com/455d498d5cf450aad3404f175712389e/6a248b4a/video/tos/alisg/tos-alisg-pve-0037c001/ooIAPPEBz10zMB0YUa4EUHATx5BsQDCiAiIiV/?a=1233&bti=ODszNWYuMDE6&&bt=707&ft=bC~FamDdPD12NWtcKn-UxKK5hY3W3wv25WcAp&mime_type=video_mp4&rc=aGZoZzs1Nzk1MzZnNmk2NUBpM2Y5NG45cmZqNjMzODczNEAtNC40XjUyNTAxXl42LzMwYSMtMXMuMmQ0NG5hLS1kMTFzcw%3D%3D&vvpl=1&l=20260604210350B24050866283045F8796&btag=e0007d000",
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




