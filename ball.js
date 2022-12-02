const ball = document.querySelector('.ball');
const player1Platform = document.querySelector('.plate1')
const player2Platform = document.querySelector('.plate2')

const browseWidth = window.innerWidth;
const browseHeight = window.innerHeight;

const posPlate1 = window.getComputedStyle(player1Platform, Number).top;
const posPlate2 = window.getComputedStyle(player1Platform, Number).top;
const posBall = window.getComputedStyle(ball, Number).left;
const posBallTop = window.getComputedStyle(ball, Number).top;

let delta = 1;
let range = 30;
let random = getRandom(1,4);
let randomTop = 2;

class DrawObject {
    constructor(element){
        this.element = element;
        const posLeft = window.getComputedStyle(this.element, Number).left;
        const posTop = window.getComputedStyle(this.element, Number).top;
        this.position = this.element.getBoundingClientRect();
        
        this.top = this.position.y;
        this.bottom = this.top + this.position.height;
        this.left = this.position.x;
        this.right = this.left + this.position.width;

        this.currentLeft = parseInt(this.element.style.left  ? this.element.style.left : posLeft);
        this.currentTop = parseInt(this.element.style.top  ? this.element.style.top : posTop);
    }

    showObject() {
        return [this.position, this.currentTop, this.currentLeft, this.top, this.bottom, this.left, this.right];
    }

};

//document.addEventListener('keydown', function(evt){
//    let currentTop1 = drawPlate(player1Platform);
//    let currentTop2 = drawPlate(player2Platform);

//    //const plate1 = new DrawObject(player1Platform);
//    //let [currentTop1] = plate1.showObject();
    

//    //const plate2 = new DrawObject(player2Platform);
//    //let [currentTop2] = plate2.showObject();

//    if(evt.code === 'KeyW'){
//        player1Platform.style.top = currentTop1 - range + 'px';
//    }

//    if (evt.code === 'KeyS') {
//        player1Platform.style.top = currentTop1 + range + 'px';
//    }

//    if(evt.code === 'ArrowUp'){
//        player2Platform.style.top = currentTop2 - range + 'px';
//    }

//    if (evt.code === 'ArrowDown') {
//        player2Platform.style.top = currentTop2 + range + 'px';
//    }
//});

function drawPlate(player) {
    const plate = new DrawObject(player);
    let [position, currentTop,,top, bottom] = plate.showObject();
    
    if (top <= 0) {
        currentTop = 0 + range;
    } else if (bottom >= browseHeight) {
        currentTop = browseHeight - position.height - range;
    }

    return currentTop;
}

function movePlate(plate, key1, key2) {
    document.addEventListener('keydown', function(evt) {
        cur = drawPlate(plate);
        if (evt.code === key1) {
            plate.style.top = cur - range + 'px';
        }

        if (evt.code === key2) {
            plate.style.top = cur + range + 'px';
        }
    });
    return
}

movePlate(player1Platform, 'KeyW', 'KeyS');
movePlate(player2Platform, 'ArrowUp', 'ArrowDown');

//function drawPlate(plate) {
//   const platePosition = plate.getBoundingClientRect();
//   const posPlate = window.getComputedStyle(plate, Number).top;
//   let topPlatePosition = platePosition.y;
//   let botPlatePosition = topPlatePosition + platePosition.height;
//   let currentTop = parseInt(plate.style.top  ? plate.style.top : posPlate);
////   if (topPlatePosition < 0 || botPlatePosition >= browseHeight) {
////    return;
////   }
//    if (topPlatePosition <= 0) {
//        currentTop = 0 + range;
//    } else if (botPlatePosition >= browseHeight)
//            currentTop = browseHeight - platePosition.height - range;

//   return currentTop;
//}

function drawBall() {
    const ball0 = new DrawObject(ball);
    let [ballPosition, currentTop, currentLeft, ballTop, ballBottom, ballLeft, ballRight] = ball0.showObject();
    const plate1 = new DrawObject(player1Platform);
    let [plate1Position,,, plate1Top,, plate1Left] = plate1.showObject();
    const plate2 = new DrawObject(player2Platform);
    let [plate2Position,,, plate2Top,, plate2Left] = plate2.showObject();

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
    //const ballPosition = ball.getBoundingClientRect();
    //let leftBallPosition = ballPosition.x;
    //let rightBallPosition = ballPosition.x + ballPosition.width;
    //let topBallPosition = ballPosition.y;
    //let botBallPosition = ballPosition.y + ballPosition.height;
   
    //const player1PlatformPosition = player1Platform.getBoundingClientRect();
    //const player2PlatformPosition = player2Platform.getBoundingClientRect();

    
    //ring = {
    //    x : leftBallPosition, 
    //    y : topBallPosition,
    //    w : ballPosition.width,
    //    h : ballPosition.height 
    //}
   
    //platform1 = {
    //    x : player1PlatformPosition.x, 
    //    y : player1PlatformPosition.y, 
    //    w : player1PlatformPosition.width,
    //    h : player1PlatformPosition.height
    //}
   
    //platform2 = {
    //    x : player2PlatformPosition.x, 
    //    y : player2PlatformPosition.y, 
    //    w : player2PlatformPosition.width,
    //    h : player2PlatformPosition.height 
    //}
    //const currentLeft = parseInt(ball.style.left  ? ball.style.left : posBall);
    //const currentTop = parseInt(ball.style.top  ? ball.style.top : posBallTop);

    let {currentTop, currentLeft, circle, platform1, platform2, ballTop, ballBottom, ballLeft, ballRight} = drawBall();

    if (crossObj(circle, platform1) || crossObj(circle, platform2)) 
                delta = -delta;

    if (ballTop < 0 || ballBottom >= browseHeight ) 
            randomTop = -randomTop;

    switch (random) {
        case 1:
            ball.style.left = currentLeft - delta + 'px';
             
            ball.style.top = currentTop - randomTop + 'px';
            break;
        case 2:
            ball.style.left = currentLeft + delta + 'px';
            
            ball.style.top = currentTop - randomTop + 'px';
            break;
        case 3:
            ball.style.left = currentLeft - delta + 'px';
                
            ball.style.top = currentTop + randomTop + 'px';
            break;
        case 4:
            ball.style.left = currentLeft + delta + 'px';
                
            ball.style.top = currentTop + randomTop + 'px';
            break;
        
        default:
            break;
    }
    
    //if (random === 2 || random === 4) {
    //    ball.style.left = currentLeft + delta + 'px';
    //    if (crossObj(ring, platform1) || crossObj(ring, platform2)) 
    //        delta = -delta;
                
    
    //    ball.style.left = currentLeft + delta + 'px';
       
    //} else {
    //    ball.style.left = currentLeft - delta + 'px';
    //    if (crossObj(ring, platform1) || crossObj(ring, platform2)) 
    //             delta = -delta; 
    //     ball.style.left = currentLeft - delta + 'px';
    //}

    //if (random === 1 || random === 2) {
    //    if (topBallPosition < 0 || botBallPosition >= browseHeight ) 
    //        randomTop = -randomTop;
   
   
    //    ball.style.top = currentTop - randomTop + 'px';
    //} else {if (topBallPosition < 0 || botBallPosition >= browseHeight ) 
    //            randomTop = -randomTop;

    //    ball.style.top = currentTop + randomTop + 'px';
    //}
   
    if (ballLeft < 0 || ballRight > browseWidth ) {
        setTimeout(backToWork, 1000)
    }
}

// function movePlate(playerPosition, key1, key2)

// // position: static, absolute, relative, fixed, sticky



//var plate1Interval = setInterval(movePlate(player1Platform), 1);
//var plate2Interval = setInterval(movePlate(player2Platform), 1);
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
    ball.style.left = browseWidth/2  + 50 + 'px';
    ball.style.top = browseHeight/2  + 50 + 'px';
    random = getRandom(1,4);
}

