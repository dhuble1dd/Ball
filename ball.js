const ball = document.querySelector('.ball');
const player1Platform = document.querySelector('.plate1')
const player2Platform = document.querySelector('.plate2')

const browseWidth = window.innerWidth;
const browseHeight = window.innerHeight;

const posPlate1 = window.getComputedStyle(player1Platform, Number).top;
const posPlate2 = window.getComputedStyle(player1Platform, Number).top;
const posBall = window.getComputedStyle(ball, Number).left;
const posBallTop = window.getComputedStyle(ball, Number).top;
 

// console.log(leftBallPosition);
// console.log(rightBallPosition);

// ball.style.left = "100px"

let delta = 1;
let range = 15;
var random = getRandom(1,4);
var randomTop = 2;

let ballPosition = ball.getBoundingClientRect()
let leftBallPosition = ballPosition.x;
let rightBallPosition = ballPosition.x + ballPosition.width;
let topBallPosition = ballPosition.y;
let botBallPosition = ballPosition.y + ballPosition.height;
let ballWidth = ballPosition.width;
let ballHeight = ballPosition.height;

let player1PlatformPosition = player1Platform.getBoundingClientRect();
let leftPlatform1Position = player1PlatformPosition.x;
let rightPlatform1Position = player1PlatformPosition.x + player1PlatformPosition.width;
let topPlatform1Position = player1PlatformPosition.y;
let botPlatform1Position = player1PlatformPosition.y + player1PlatformPosition.height;
let platform1Width = player1PlatformPosition.width;
let platform1Height =player1PlatformPosition.height;

let player2PlatformPosition = player2Platform.getBoundingClientRect();
let leftPlatform2Position = player2PlatformPosition.x;
let rightPlatform2Position = player2PlatformPosition.x + player2PlatformPosition.width;
let topPlatform2Position = player2PlatformPosition.y;
let botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;
let platform2Width = player2PlatformPosition.width;
let platform2Height = player2PlatformPosition.height;

console.log(leftBallPosition)

let ring = {
    x : leftBallPosition, 
    y : topBallPosition,
    w : ballWidth,
    h : ballHeight,
    outOfBounce : false 
}

let platform1 = {
    x : leftPlatform1Position, 
    y : topPlatform1Position, 
    w : platform1Width,
    h : platform1Height
}

let platform2 = {
    x : leftPlatform2Position,
    y : topPlatform2Position, 
    w : platform2Width, 
    h : platform2Height 
}




function moveBall() {
    ballPosition = ball.getBoundingClientRect();
    leftBallPosition = ballPosition.x;
    rightBallPosition = ballPosition.x + ballPosition.width;
    topBallPosition = ballPosition.y;
    botBallPosition = ballPosition.y + ballPosition.height;
    ballWidth = ballPosition.width;
    ballHeight = ballPosition.height;

    player1PlatformPosition = player1Platform.getBoundingClientRect();
    leftPlatform1Position = player1PlatformPosition.x;
    rightPlatform1Position = player1PlatformPosition.x + player1PlatformPosition.width;
    topPlatform1Position = player1PlatformPosition.y;
    botPlatform1Position = player1PlatformPosition.y + player1PlatformPosition.height;
    platform1Width = player1PlatformPosition.width;
    platform1Height =player1PlatformPosition.height;

    player2PlatformPosition = player2Platform.getBoundingClientRect();
    leftPlatform2Position = player2PlatformPosition.x;
    rightPlatform2Position = player2PlatformPosition.x + player2PlatformPosition.width;
    topPlatform2Position = player2PlatformPosition.y;
    botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;
    platform2Width = player2PlatformPosition.width;
    platform2Height = player2PlatformPosition.height;

    ring = {
        x : leftBallPosition, 
        y : topBallPosition,
        w : ballWidth,
        h : ballHeight 
    }
    
    platform1 = {
        x : leftPlatform1Position, 
        y : topPlatform1Position, 
        w : platform1Width,
        h : platform1Height
    }
    
    platform2 = {
        x : leftPlatform2Position,
        y : topPlatform2Position, 
        w : platform2Width, 
        h : platform2Height 
    }

    const currentLeft = parseInt(ball.style.left  ? ball.style.left : posBall);
    const currentTop = parseInt(ball.style.top  ? ball.style.top : posBallTop);
    
    //console.log(currentTop);
    
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


function movePlate1() {
    player1PlatformPosition = player1Platform.getBoundingClientRect();
    let topPlatform1Position = player1PlatformPosition.y;
    let botPlatform1Position = topPlatform1Position + player1PlatformPosition.height;
    
    let currentTop1 = parseInt(player1Platform.style.top  ? player1Platform.style.top : posPlate1);
    
    if (topPlatform1Position <= 0 || botPlatform1Position >= browseHeight) {
        player1Platform.style.top = 'static';

    } else  {document.addEventListener('keydown', function(evt){
        if (evt.which === 87) {
            player1Platform.style.top = currentTop1 - range + 'px';
        }
    
        if (evt.which === 83) {
            player1Platform.style.top = currentTop1 + range + 'px';
        }
    }) }
    
    //console.log(topPlatform1Position, botPlatform1Position);
}

function movePlate2() {
    let player2PlatformPosition = player2Platform.getBoundingClientRect();
    let topPlatform2Position = player2PlatformPosition.y;
    let botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;

    let currentTop2 = parseInt(player2Platform.style.top  ? player2Platform.style.top : posPlate2);

    if (topPlatform2Position <= 0 || botPlatform2Position >= browseHeight) {
        player2Platform.style.top = 'static';

    } else  {document.addEventListener('keydown', function(evt){
        if (evt.which === 38) {
            player2Platform.style.top = currentTop2 - range + 'px';
        }
    
        if (evt.which === 40) {
            player2Platform.style.top = currentTop2 + range + 'px';
        }
    })}

    //console.log(topPlatform2Position, botPlatform2Position);
}

var plate1Interval = setInterval(movePlate1, .01);
var plate2Interval = setInterval(movePlate2, .01);
var ballInterval = setInterval(moveBall, .1);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//function getRandomTopPar(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}


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

console.log(random);
console.log(randomTop);

console.log(browseHeight, browseWidth);
