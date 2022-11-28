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
var random = getRandom(1,4);
var randomTop = 2;

document.addEventListener('keydown', function(evt){
    let currentTop1 = drawPlate(player1Platform);
    let currentTop2 = drawPlate(player2Platform);

    if(evt.code === 'KeyW'){
        player1Platform.style.top = currentTop1 - range + 'px';
    }

    if (evt.code === 'KeyS') {
        player1Platform.style.top = currentTop1 + range + 'px';
    }

    if(evt.code === 'ArrowUp'){
        player2Platform.style.top = currentTop2 - range + 'px';
    }

    if (evt.code === 'ArrowDown') {
        player2Platform.style.top = currentTop2 + range + 'px';
    }
});

//let currentTop1 = setInterval(drawPlate(player1Platform), 1);
//let currentTop2 = setInterval(drawPlate(player2Platform), 1);
//let currentTop1 = drawPlate(player1Platform);
//let currentTop2 = drawPlate(player2Platform);

//console.log(currentTop1, currentTop2)

//function movePlate(plate, cur, key1, key2) {
//    document.addEventListener('keydown', function(evt) {
//        if (evt.code === key1) {
//            plate.style.top = cur - range + 'px';
//        }

//        if (evt.code === key2) {
//            plate.style.top = cur - range + 'px';
//        }
//    });
//    return [plate, cur, key1, key2]
//}

//let p1 = movePlate(player1Platform, currentTop1, 'KeyW', 'KeyS');
//let p2 = movePlate(player2Platform, currentTop2, 'ArrowUp', 'ArrowDown');

//console.log(p1, p2);

function drawPlate(plate) {
   const platePosition = plate.getBoundingClientRect();
   const posPlate = window.getComputedStyle(plate, Number).top;
   let topPlatePosition = platePosition.y;
   let botPlatePosition = topPlatePosition + platePosition.height;
   let currentTop = parseInt(plate.style.top  ? plate.style.top : posPlate);
//   if (topPlatePosition < 0 || botPlatePosition >= browseHeight) {
//    return;
//   }
    if (topPlatePosition <= 0) {
        currentTop = 0 + range;
    } else if (botPlatePosition >= browseHeight)
            currentTop = browseHeight - platePosition.height - range;

   return currentTop;
}

function moveBall() {
    const ballPosition = ball.getBoundingClientRect();
    let leftBallPosition = ballPosition.x;
    let rightBallPosition = ballPosition.x + ballPosition.width;
    let topBallPosition = ballPosition.y;
    let botBallPosition = ballPosition.y + ballPosition.height;
   
    const player1PlatformPosition = player1Platform.getBoundingClientRect();
    const player2PlatformPosition = player2Platform.getBoundingClientRect();

    ring = {
        x : leftBallPosition, 
        y : topBallPosition,
        w : ballPosition.width,
        h : ballPosition.height 
    }
   
    platform1 = {
        x : player1PlatformPosition.x, 
        y : player1PlatformPosition.y, 
        w : player1PlatformPosition.width,
        h : player1PlatformPosition.height
    }
   
    platform2 = {
        x : player2PlatformPosition.x, 
        y : player2PlatformPosition.y, 
        w : player2PlatformPosition.width,
        h : player2PlatformPosition.height 
    }
    const currentLeft = parseInt(ball.style.left  ? ball.style.left : posBall);
    const currentTop = parseInt(ball.style.top  ? ball.style.top : posBallTop);
    
    if (random === 2 || random === 4) {
        ball.style.left = currentLeft + delta + 'px';
        if (crossObj(ring, platform1) || crossObj(ring, platform2)) 
            delta = -delta;
                
    
        ball.style.left = currentLeft + delta + 'px';
       
    } else {
        ball.style.left = currentLeft - delta + 'px';
        if (crossObj(ring, platform1) || crossObj(ring, platform2)) 
                 delta = -delta; 
         ball.style.left = currentLeft - delta + 'px';
    }

    if (random === 1 || random === 2) {
        if (topBallPosition < 0 || botBallPosition >= browseHeight ) 
            randomTop = -randomTop;
   
   
        ball.style.top = currentTop - randomTop + 'px';
    } else {if (topBallPosition < 0 || botBallPosition >= browseHeight ) 
                randomTop = -randomTop;

        ball.style.top = currentTop + randomTop + 'px';
    }
   
    if (leftBallPosition < 0 || rightBallPosition > browseWidth ) {
        ring.outOfBounce = true;
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
    ring.outOfBounce = false;
    ball.style.left = browseWidth/2 + 'px';
    ball.style.top = browseHeight/2 + 'px';
    random = getRandom(1,4);
}

