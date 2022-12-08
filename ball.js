const ball = document.querySelector('.ball');
const player1Platform = document.querySelector('.plate1')
const player2Platform = document.querySelector('.plate2')

const browseWidth = window.innerWidth;
const browseHeight = window.innerHeight;

let delta = 1;
let range = 30;
let random = getRandom(1,4);
let gamma = 2;

class Object {
    constructor(element){
        this.element = element;
        this.currentLeft = parseInt(window.getComputedStyle(this.element, Number).left);
        this.currentTop = parseInt(window.getComputedStyle(this.element, Number).top);
        
    }

    showObject() {
        this.position = this.element.getBoundingClientRect();
        
        this.top = this.position.y;
        this.bottom = this.top + this.position.height;
        this.left = this.position.x;
        this.right = this.left + this.position.width;
        return {position: this.position, 
                currentTop: this.currentTop,
                currentLeft: this.currentLeft,
                top: this.top,
                bottom: this.bottom,
                left: this.left,
                right:  this.right};
    }

};


function drawPlate(player) {
    const plate = new Object(player);
    let {currentTop,top, bottom} = plate.showObject();

    return [currentTop,top, bottom];
}

function movePlate(objectsToProcess) {
    document.addEventListener('keydown', function(evt) {
        if(objectsToProcess && Array.isArray(objectsToProcess))
        {
            const actualPlatform = 
                objectsToProcess.find((e)=>e.key1 === evt.code || e.key2 === evt.code)
        
            if(actualPlatform){
                const {platform, key1, key2} = actualPlatform;
                const [currentTop, top, bottom] = drawPlate(platform);
                
                if (evt.code === key1) {
                    if(top <= 0)
                        return;
                    platform.style.top = currentTop - range + 'px';
                }

                if (evt.code === key2) {
                    if(bottom >= browseHeight)
                        return;
                    platform.style.top = currentTop + range + 'px';
                }
            }
            
        }
        
    });
    return
}
const objectsToProcess = [];
objectsToProcess.push({platform: player1Platform, key1: 'KeyW', key2: 'KeyS'})
objectsToProcess.push({platform: player2Platform, key1: 'ArrowUp', key2: 'ArrowDown'})

movePlate(objectsToProcess);

function drawBall() {
    const ball0 = new Object(ball);
    const plate1 = new Object(player1Platform);
    const plate2 = new Object(player2Platform);

    const {position: ballPosition,
        currentTop, currentLeft,
        top: ballTop,
        bottom: ballBottom,
        left: ballLeft,
        right: ballRight} = ball0.showObject();
    const {position: plate1Position, top: plate1Top, left: plate1Left} = plate1.showObject();
    const {position: plate2Position, top: plate2Top, left: plate2Left} = plate2.showObject();

    circle = {
        x : ballLeft,
        y : ballTop,
        w : ballPosition.width,
        h : ballPosition.height
    }

    platform1 = {
        x : plate1Left,
        y : plate1Top,
        w : plate1Position.width,
        h : plate1Position.height
    }

    platform2 = {
        x : plate2Left,
        y : plate2Top,
        w : plate2Position.width,
        h : plate2Position.height
    }

    return{currentTop, currentLeft, circle, platform1, platform2, ballTop, ballBottom, ballLeft, ballRight}
}

function moveBall() {
    
    const {currentTop, currentLeft, circle, platform1, platform2, ballTop, ballBottom, ballLeft, ballRight} = drawBall();

    if (crossObj(circle, platform1) || crossObj(circle, platform2)) 
                delta = -delta;

    if (ballTop < 0 || ballBottom >= browseHeight ) 
            gamma = -gamma;

        ball.style.left = currentLeft + delta + 'px';
             
        ball.style.top = currentTop + gamma + 'px';
    
    switch (random) {
        case 1:
            ball.style.left = currentLeft - delta + 'px';
             
             ball.style.top = currentTop - gamma + 'px';;
            break;
        case 2:
            ball.style.left = currentLeft + delta + 'px';
             
            ball.style.top = currentTop - gamma + 'px';
            break;
        case 3:
            ball.style.left = currentLeft - delta + 'px';
             
            ball.style.top = currentTop + gamma + 'px';
            break;
        case 4:
            ball.style.left = currentLeft + delta + 'px';
             
            ball.style.top = currentTop + gamma + 'px';
            break;
        default:
            break;
    }
    
    if (ballLeft < 0 || ballRight > browseWidth ) {
        backToWork();
    }
}

var ballInterval = setInterval(moveBall, 1);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function crossObj(obj1, obj2) {
    return obj1.x < obj2.x + obj2.w &&
           obj1.x + obj1.w > obj2.x &&
           obj1.y < obj2.y + obj2.h &&
           obj1.y + obj1.h > obj2.y;
}

function backToWork() {
    ball.style.left = browseWidth/2  - 50 + 'px';
    ball.style.top = browseHeight/2  - 50 + 'px';
    random = getRandom(1,4);
    alert('Продолжим?')
}

