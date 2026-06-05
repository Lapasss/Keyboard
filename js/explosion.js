class explosion{
    constructor(particlesAmount) {
        this.particlesAmount = particlesAmount;
        this.particles = [];
    }
    
    
    explosionBall() {
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
        ball.style = `background-color: ${color};  width: ${widthAndHight}px; height: ${widthAndHight}px; transform: translate(${randXTransform}px, ${randYTransform}px);`;
        ball.className = "explosion";

        return ball;
    }

    createExplosion() {
        const explosionBalls = document.getElementsByClassName("explosion");
        for (let index = 0; index < explosionBalls.length; index++) {
            explosionBalls[index].style.transition = "all 0s";
            explosionBalls[index].style.removeProperty("visibility");
            setTimeout(() => {
                explosionBalls[index].style.transition = "all 2s";
                explosionBalls[index].style.removeProperty("transform");
            },100);
        }
    }

    createParticals() {
        for (let index = 0; index < 20; index++) {
            const ball = explosionBall();
            this.particles.push(ball);
            document.body.appendChild(ball);
        }
    }

    deleteBalls() {
        this.particles.forEach((element) => {
            document.body.removeChild(element);
        });
    }

}