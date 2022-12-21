const ball = document.querySelector('.ball');
const player1Platform = document.querySelector('.plate1')
const player2Platform = document.querySelector('.plate2')

const browseWidth = window.innerWidth;
const browseHeight = window.innerHeight;

let delta = 1;
let range = 30;
let random = getRandom(1,4);
let gamma = 2;

let platform1 ={};
let platform2 = {};
//let circle = {};

class Object {
    constructor(element){
        this.element = element; 
        //this.currentLeft = parseInt(window.getComputedStyle(this.element, Number).left);
        //this.currentTop = parseInt(window.getComputedStyle(this.element, Number).top);
        //this.position = this.element.getBoundingClientRect();   
        //this.top = this.position.y;
        //this.bottom = this.top + this.position.height;
        //this.left = this.position.x;
        //this.right = this.left + this.position.width;  
        //this.key = {
        //    key1: 'KeyW',
        //    key2: 'KeyS',
        //    //key3: 'ArrowUp',
        //    //key4: 'ArrowDown',
        //} 
        //return {position: this.position, 
        //    currentTop: this.currentTop,
        //    currentLeft: this.currentLeft,
        //    top: this.top,
        //    bottom: this.bottom,
        //    left: this.left,
        //    right:  this.right};
    }

    drawObject() {
        this.currentLeft = parseInt(window.getComputedStyle(this.element, Number).left);
        this.currentTop = parseInt(window.getComputedStyle(this.element, Number).top);
        this.position = this.element.getBoundingClientRect(); 
        this.top = this.position.y;
        this.left = this.position.x;
        this.width = this.position.width;
        this.height = this.position.height;

        return {
            currentTop: this.currentTop,
            currentLeft: this.currentLeft,
            top: this.top,
            left: this.left,
            width: this.width,
            height: this.height,
        }
    }

    movePlate() {
        const {top, left, width, height} = this.drawObject();
        document.addEventListener('keydown', (evt) => {
           this.drawObject();
           this.bottom = this.top + this. height;
            switch (this.element) {
                case player1Platform:
                    this.key1 = 'KeyW';
                    this.key2 = 'KeyS';
                    break;
                case player2Platform:
                    this.key1 = 'ArrowUp';
                    this.key2 = 'ArrowDown';
                    break;    
            
                default:
                    break;
            }
            if (evt.code === this.key1) {
                if(this.top <= 0)
                    return;
                this.element.style.top = this.currentTop - range + 'px';
            }

            if (evt.code === this.key2) {
                if(this.bottom >= browseHeight)
                    return;
                this.element.style.top = this.currentTop + range + 'px';
            } 
        });   
        return {x: top, y: left, w: width, h: height}; 
    }


    moveBall(){
        this.platform1 = plate1.movePlate();
        this.platform2 = plate2.movePlate();
        console.log(this.platform1)
        setInterval(() => {
            const {currentTop, currentLeft, top: ballTop, left: ballLeft, width, height} = this.drawObject();
            
            this.circle = {
                x: ballLeft,
                y: ballTop,
                w: width,
                h: height,
            }
            

            const ballBottom = ballTop + height;
            const ballRight = ballLeft +  width;


            if ((this.circle.x < this.platform1.x + this.platform1.w &&
                this.circle.x + this.circle.w > this.platform1.x &&
                this.circle.y < this.platform1.y + this.platform1.h &&
                this.circle.y + this.circle.h > this.platform1.y)  
                || 
                (this.circle.x < this.platform2.x + this.platform2.w &&
                this.circle.x + this.circle.w > this.platform2.x &&
                this.circle.y < this.platform2.y + this.platform2.h &&
                this.circle.y + this.circle.h > this.platform2.y)) 
                    delta = -delta;

        

            if (ballTop < 0 || ballBottom >= browseHeight ) 
                    gamma = -gamma;

                this.element.style.left = currentLeft + delta + 'px';
             
                this.element.style.top = currentTop + gamma + 'px';
    
            switch (random) {
                case 1:
                    this.element.style.left = currentLeft - delta + 'px';
                
                    this.element.style.top = currentTop - gamma + 'px';;
                    break;
                case 2:
                    this.element.style.left = currentLeft + delta + 'px';

                    this.element.style.top = currentTop - gamma + 'px';
                    break;
                case 3:
                    this.element.style.left = currentLeft - delta + 'px';
             
                    this.element.style.top = currentTop + gamma + 'px';
                    break;
                case 4:
                    this.element.style.left = currentLeft + delta + 'px';
             
                    this.element.style.top = currentTop + gamma + 'px';
                    break;
                default:
                    break;
            }
    
            if (ballLeft < 0 || ballRight > browseWidth ) {
                backToWork();
            }
        }, 1);

    }
};

const plate1 = new Object(player1Platform);
const plate2 = new Object(player2Platform);
const ball0 = new Object(ball);

//platform1 = plate1.movePlate();
//platform2 = plate2.movePlate();
ball0.moveBall()

//console.log(platform1, platform2, circle);

//plate1.movePlate();
//plate2.movePlate();

//let ball0 = new Object(ball);
//let plate1 = new Object(player1Platform);
//let plate2 = new Object(player2Platform);
//function drawObject(obj) {
//    let objParam;
//    if (obj === ball) {
//        objParam = ball0.showObject();
//    } else if (obj === player1Platform) {
//        objParam = plate1.showObject();
//    } else if (obj === player2Platform) {
//        objParam = plate2.showObject();
//    }

    

//    return objParam;
//}

//function drawPlate(player) {
//    const plate = new Object(player);
//    let {currentTop,top, bottom} = plate.showObject();

//    return {currentTop,top, bottom};
//}

//function movePlate(objectsToProcess) {
//    document.addEventListener('keydown', function(evt) {
//        if(objectsToProcess && Array.isArray(objectsToProcess))
//        {
//            const actualPlatform = 
//                objectsToProcess.find((e)=>e.key1 === evt.code || e.key2 === evt.code)
        
//            if(actualPlatform){
//                const {platform, key1, key2} = actualPlatform;
//                const {currentTop, top, bottom} = drawPlate(platform);
                
//                if (evt.code === key1) {
//                    if(top <= 0)
//                        return;
//                    platform.style.top = currentTop - range + 'px';
//                }

//                if (evt.code === key2) {
//                    if(bottom >= browseHeight)
//                        return;
//                    platform.style.top = currentTop + range + 'px';
//                }
//            }
            
//        }
        
//    });
//    return
//}
//const objectsToProcess = [];
//objectsToProcess.push({platform: player1Platform, key1: 'KeyW', key2: 'KeyS'})
//objectsToProcess.push({platform: player2Platform, key1: 'ArrowUp', key2: 'ArrowDown'})

//movePlate(objectsToProcess);

//function drawBall() {
//    const ball0 = new Object(ball);
//    const plate1 = new Object(player1Platform);
//    const plate2 = new Object(player2Platform);

//    const {position: ballPosition,
//        currentTop, currentLeft,
//        top: ballTop,
//        bottom: ballBottom,
//        left: ballLeft,
//        right: ballRight} = ball0.showObject();

//    circle = {
//        x : ballLeft,
//        y : ballTop,
//        w : ballPosition.width,
//        h : ballPosition.height
//    }

//    platform1 = {
//        x : plate1Left,
//        y : plate1Top,
//        w : plate1Position.width,
//        h : plate1Position.height
//    }

//    platform2 = {
//        x : plate2Left,
//        y : plate2Top,
//        w : plate2Position.width,
//        h : plate2Position.height
//    }

//    return{currentTop, currentLeft, circle, platform1, platform2, ballTop, ballBottom, ballLeft, ballRight}
//}

//function moveBall() {
    
//    const {currentTop, currentLeft, top, left, width, height} = ball0.drawObject();
//    const platform1 = plate1.movePlate();
//    const platform2 = plate2.movePlate();

//    const bottom = top + height;
//    const right = left + width;

//    console.log(platform1, platform2)

//    circle = {
//        x: left,
//        y: top,
//        w: width,
//        h: height,
//    }
    
//    if (crossObj(circle, platform1) || crossObj(circle, platform2)) 
//                delta = -delta;

//    if (top < 0 || bottom >= browseHeight ) 
//            gamma = -gamma;

//        ball.style.left = currentLeft + delta + 'px';
             
//        ball.style.top = currentTop + gamma + 'px';
    
//    switch (random) {
//        case 1:
//            ball.style.left = currentLeft - delta + 'px';
             
//             ball.style.top = currentTop - gamma + 'px';;
//            break;
//        case 2:
//            ball.style.left = currentLeft + delta + 'px';
             
//            ball.style.top = currentTop - gamma + 'px';
//            break;
//        case 3:
//            ball.style.left = currentLeft - delta + 'px';
             
//            ball.style.top = currentTop + gamma + 'px';
//            break;
//        case 4:
//            ball.style.left = currentLeft + delta + 'px';
             
//            ball.style.top = currentTop + gamma + 'px';
//            break;
//        default:
//            break;
//    }
    
//    if (left < 0 || right > browseWidth ) {
//        backToWork();
//    }
//}

//var ballInterval = setInterval(move(), 1);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//function crossObj(obj1, obj2) {
//    return obj1.x < obj2.x + obj2.w &&
//           obj1.x + obj1.w > obj2.x &&
//           obj1.y < obj2.y + obj2.h &&
//           obj1.y + obj1.h > obj2.y;
//}

function backToWork() {
    ball.style.left = browseWidth/2  - 50 + 'px';
    ball.style.top = browseHeight/2  - 50 + 'px';
    random = getRandom(1,4);
    alert('Продолжим?')
}
