const ball = document.querySelector('.ball');
const player1Platform = document.querySelector('.plate1')
const player2Platform = document.querySelector('.plate2')

const browseWidth = window.innerWidth;



// console.log(leftBallPosition);
// console.log(rightBallPosition);

// ball.style.left = "100px"

let delta = 1;



const currentTop1 = parseInt(player1Platform.style.top  ? player1Platform.style.top : 0);
const currentTop2 = parseInt(player2Platform.style.top  ? player2Platform.style.top : 0);

let player1PlatformPosition = player1Platform.getBoundingClientRect();
let topPlatform1Position = player1PlatformPosition.y;
let botPlatform1Position = player1PlatformPosition.y + player1PlatformPosition.height;

let player2PlatformPosition = player2Platform.getBoundingClientRect();
let topPlatform2Position = player2PlatformPosition.y;
let botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;

//console.log(topPlatform1Position, topPlatform2Position);
//console.log(botPlatform1Position, botPlatform2Position);

//player1Platform.style.top = currentTop1 + 100 + 'px';
//player2Platform.style.top = currentTop2 + 100 + 'px';

player1Platform.addEventListener('keydown', function(evt){
    //if (evt.keyCode === 87) {
    //    player1Platform.style.top = currentTop1 - 100 + 'px';
    //}

    if (evt.keyCode === 83) {
        player1Platform.style.top = currentTop1 + 100 + 'px';
    }
})




player2Platform.addEventListener('keydown', function(evt){
    //if (evt.keyCode === 38) {
    //    player2Platform.style.top = currentTop2 - 100 + 'px';
    //}

    if (evt.keyCode === 40) {
        player2Platform.style.top = currentTop2 + 100 + 'px';
    }
})

console.log(topPlatform1Position, topPlatform2Position);
console.log(botPlatform1Position, botPlatform2Position);

function moveBall() {
    let ballPosition = ball.getBoundingClientRect();
    let leftBallPosition = ballPosition.x;
    let rightBallPosition = ballPosition.x + ballPosition.width;
    const currentLeft = parseInt(ball.style.left  ? ball.style.left : 0);
  

    if (rightBallPosition >= browseWidth || leftBallPosition < 0 ) 
        delta = -delta;
 

    ball.style.left = currentLeft + delta + 'px';
    
}

var handle = setInterval(moveBall, 1);

//function player1Moves() {
//    let player1PlatformPosition = player1Platform.getBoundingClientRect();
//    let topPlatform1Position = player1PlatformPosition.y;
//    let botPlatform1Position = player1PlatformPosition.y + player1PlatformPosition.height;
//    player1Platform.addEventListener('keydown', function(evt){
//        if (evt.keyCode === 87) {
//            player1Platform.style.top = parseInt(player1Platform.style.top  ? player1Platform.style.top : 0) + 1 +'px';
//        }

//        if (evt.keyCode === 83) {
//            player1Platform.style.top = parseInt(player1Platform.style.top  ? player1Platform.style.top : 0) - 1 +'px';
//        }
//    })
//    console.log(topPlatform1Position);
//};

//function player2Moves() {
//    let player2PlatformPosition = player2Platform.getBoundingClientRect();
//    let topPlatform2Position = player2PlatformPosition.y;
//    let botPlatform2Position = player2PlatformPosition.y + player2PlatformPosition.height;
//    player2Platform.addEventListener('keydown', function(evt){
//        if (evt.keyCode === 87) {
//            player2Platform.style.top = parseInt(player2Platform.style.top  ? player2Platform.style.top : 0) + 1 +'px';
//        }

//        if (evt.keyCode === 83) {
//            player2Platform.style.top = parseInt(player2Platform.style.top  ? player2Platform.style.top : 0) - 1 +'px';
//        }
//    })
//    console.log(topPlatform2Position);
//};


//player1Moves();
//player1Moves();

