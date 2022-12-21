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
        this.position = this.element.getBoundingClientRect();   
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

    movePlate() {
        document.addEventListener('keydown', (evt) => {
            this.position = this.element.getBoundingClientRect();
            this.currentTop = parseInt(window.getComputedStyle(this.element, Number).top); 
            this.top = this.position.y;
            this.bottom = this.top + this.position.height;
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
        return {x: this.position.x, y: this.position.y, w: this.position.width, h: this.position.height}; 
    }

    drawBall() {
        this.currentLeft = parseInt(window.getComputedStyle(this.element, Number).left);
        this.currentTop = parseInt(window.getComputedStyle(this.element, Number).top);
        this.position = this.element.getBoundingClientRect();   
        this.top = this.position.y;
        this.bottom = this.top + this.position.height;
        this.left = this.position.x;
        this.right = this.left + this.position.width; 
        //const {x: left1, y: top1, w: width1, h: height1} = this.movePlate(player1Platform);
        //const {x: left2, y: top2, w: width2, h: height2} = this.movePlate(player2Platform);

        this.circle = {
            x : this.left,
            y : this.top,
            w : this.position.width,
            h : this.position.height,
        }
    
    //    this.platform1 = {
    //        x : left1,
    //        y : top1,
    //        w : width1,
    //        h : height1,
    //    }
    
    //    this.platform2 = {
    //        x : left2,
    //        y : top2,
    //        w : width2,
    //        h : height2,
    //    }

        return{
            currentTop: this.currentTop,
            currentLeft: this.currentLeft,
            circle: this.circle,
            //platform1: this.platform1,
            //platform2: this.platform2,
            ballTop:this.top, 
            ballBottom: this.bottom, 
            ballLeft: this.left, 
            ballRight: this.right
        }
    }

    //moveBall(){
    //    const {currentTop, currentLeft, circle, platform1, platform2, ballTop, ballBottom, ballLeft, ballRight} = this.drawBall();
    //    if (crossObj(circle, platform1) || crossObj(circle, platform2)) 
    //            delta = -delta;

    //    if (ballTop < 0 || ballBottom >= browseHeight ) 
    //            gamma = -gamma;

    //        ball.style.left = currentLeft + delta + 'px';
             
    //        ball.style.top = currentTop + gamma + 'px';
    
    //    switch (random) {
    //        case 1:
    //            ball.style.left = currentLeft - delta + 'px';
             
    //            ball.style.top = currentTop - gamma + 'px';;
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
    
    //    if (ballLeft < 0 || ballRight > browseWidth ) {
    //        backToWork();
    //    }
    //}
};

const plate1 = new Object(player1Platform);
const plate2 = new Object(player2Platform);
const ball0 = new Object(ball);

const platform1 = plate1.movePlate();
const platform2 = plate2.movePlate();
console.log(platform1, platform2);
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

function moveBall() {
    
    const {currentTop, currentLeft, circle, ballTop, ballBottom, ballLeft, ballRight} = ball0.drawBall();
    
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
