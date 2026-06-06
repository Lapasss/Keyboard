class ExplosionBall{
    constructor() {
        this.ball = document.createElement('div');
        let widthAndHight = parseInt(Math.random() * (100 - 30) + 30); //px  

        let hexGreenColor = parseInt(Math.random() * (255 - 0) + 0);
        let color;
        if(hexGreenColor <= 15) {
            color = "#ff0" + hexGreenColor.toString(16) + "00";    
        } else {
            color = "#ff" + hexGreenColor.toString(16) + "00";
        }
        this.ball.style = `background-color: ${color};  width: ${widthAndHight}px; height: ${widthAndHight}px; trasition: all 2s;`;
        this.ball.className = "exploshionBall";
    }

    fly() {
        const boundary = 600;
        let randXTransform = parseInt(Math.random() * (boundary - (-boundary)) + (-boundary)); //px
        let randYTransform = parseInt(Math.random() * (boundary - (-boundary)) + (-boundary)); //px
        this.ball.style.transform = `translate(${randXTransform}px, ${randYTransform}px`;
    }
}


class Explosion{
    constructor(particlesAmount, delay) {
        this.delay = delay; //ms
        this.particlesAmount = particlesAmount;
        this.particles = [];
    }

    async createParticals() {
        return new Promise((resolve) => {
            for (let index = 0; index < this.particlesAmount; index++) {
                const ball = new ExplosionBall();
                this.particles.push(ball);
                document.body.appendChild(ball.ball);
            }
            setTimeout(() => {resolve("+");}, 100);
            
        });
    }

    async createExplosion() {
        console.log(await this.createParticals());
       
        setTimeout(() => {
            this.particles.forEach(element => {
                element.fly();
            });
        }, this.delay);
        setTimeout(() => {
            this.particles.forEach(element => {
                element.ball.style.backgroundColor = "#d9342f00";
            });
        }, this.delay*2);
        setTimeout(() => {
            this.particles.forEach(element => {
                document.body.removeChild(element.ball);
            });
        }, this.delay*2 + 3000);
    }

    

}