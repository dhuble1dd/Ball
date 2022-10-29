const ball = document.querySelector('.ball');



const browseWidth = window.innerWidth;



// console.log(leftBallPosition);
// console.log(rightBallPosition);

// ball.style.left = "100px"

let delta = 1;

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


