
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("animation-ball-canvas");
    var context = canvas.getContext("2d");

    var ballX = 400;
    var ballY = 300;
    var ballRadius = 30;
    var ballColor = 'red';
    var changeX = 4;
    var changeY = 4;

    window.requestAnimationFrame(animationLoop);

    function animationLoop() {
        // Clear Canvas
        context.clearRect(0,0,canvas.width, canvas.height);

        // Update
        ballCollision();
        ballPosition();
        
        // Draw
        drawBall(ballX, ballY, ballRadius, ballColor);

        // Animate
        window.requestAnimationFrame(animationLoop);
    }

    function ballPosition() {
        ballX += changeX;
        ballY += changeY;
    }

    function ballCollision() {
        // Bottom Edge
        if(ballY + ballRadius > canvas.height){
            changeY *= -1;
        }
        // Top Edge
        if(ballY - ballRadius < 0){
            changeY *= -1;
        }
        
        // Left Edge
        if(ballX - ballRadius < 0){
            changeX *= -1;
        }
        
        // Right Edge
        if(ballX + ballRadius > canvas.width){
            changeX *= -1;
        }
    }
    

    function drawBall(x,y,radius,color){
        var radian = Math.PI / 180;

        context.beginPath();
        context.strokeStyle = color;
        context.fillStyle = color;
        context.arc(x,y,radius,0,360 * radian, false);
        context.stroke();
        context.fill();
    }

     window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame         ||
                window.webkitRequestAnimationFrame  ||
                window.mozRequestAnimationFrame     ||
                window.msRequestAnimationFrame      ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
     })();

};