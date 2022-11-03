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
let range = 10;
var random = getRandom(1,4);
var randomTop = getRandomTopPar(1, 10)*10;


function moveBall() {
    let ballPosition = ball.getBoundingClientRect();
    let leftBallPosition = ballPosition.x;
    let rightBallPosition = ballPosition.x + ballPosition.width;
    let topBallPosition = ballPosition.y;
    let botBallPosition = ballPosition.y + ballPosition.height;

    const currentLeft = parseInt(ball.style.left  ? ball.style.left : posBall);
    const currentTop = parseInt(ball.style.top  ? ball.style.top : posBallTop);
    
    //console.log(currentTop);
    
    if (random === 2 || random === 4) {
        if (rightBallPosition >= browseWidth || leftBallPosition < 0 ) 
            delta = -delta;
                 
     
    
        ball.style.left = currentLeft + delta + 'px';
    } else {if (rightBallPosition >= browseWidth || leftBallPosition < 0 ) 
                 delta = -delta; 

        ball.style.left = currentLeft - delta + 'px';
     }

    if (random === 1 || random === 2) {
        if (topBallPosition > 0 || botBallPosition <= browseHeight ) 
            randomTop = -randomTop;
    
    
        ball.style.top = currentTop - randomTop + 'px';
    } else {if (topBallPosition > 0 || botBallPosition <= browseHeight ) 
                randomTop = -randomTop;


        ball.style.top = currentTop + randomTop + 'px';
    }
    
}


function movePlate1() {
    let player1PlatformPosition = player1Platform.getBoundingClientRect();
    let topPlatform1Position = player1PlatformPosition.y;
    let botPlatform1Position = topPlatform1Position + player1PlatformPosition.height;
    
    let currentTop1 = parseInt(player1Platform.style.top  ? player1Platform.style.top : posPlate1);
    
    if (topPlatform1Position > 0 || botPlatform1Position < browseHeight) {
        document.addEventListener('keydown', function(evt){
            if (evt.which === 87) {
                player1Platform.style.top = currentTop1 - range + 'px';
            }
        
            if (evt.which === 83) {
                player1Platform.style.top = currentTop1 + range + 'px';
            }
        }) 
    } else player1Platform.style.top = 'static';
    
    //console.log(topPlatform1Position, botPlatform1Position);
}

function movePlate2() {
    let player2PlatformPosition = player2Platform.getBoundingClientRect();
    let topPlatform2Position = player2PlatformPosition.y;
    let botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;
    let currentTop2 = parseInt(player2Platform.style.top  ? player2Platform.style.top : posPlate2);

    if (topPlatform2Position > 0 || botPlatform2Position < browseHeight) {
        document.addEventListener('keydown', function(evt){
            if (evt.which === 38) {
                player2Platform.style.top = currentTop2 - range + 'px';
            }
        
            if (evt.which === 40) {
                player2Platform.style.top = currentTop2 + range + 'px';
            }
        })
    } else player2Platform.style.top = 'static';

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

function getRandomTopPar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random);
console.log(randomTop);

console.log(browseHeight, browseWidth);
