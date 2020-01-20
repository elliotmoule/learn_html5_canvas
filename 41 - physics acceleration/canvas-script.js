
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("physics-acceleration-canvas");
    var context = canvas.getContext("2d");

    var ball = new Ball(20, 'green');
    ball.x = 10;
    ball.y = 10;
    ball.context = context;
    ball.draw();

    

    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball.vx = 1;
    ball.vy = 1;

    // Acceleration
    var ax = 1;
    var ay = 1;

    function animationLoop() {
        // Clear Canvas
        context.clearRect(0,0,canvas.width, canvas.height);

        // Update
        ball.vx = ball.vx + ax;
        ball.vy = ball.vy + ay;
        ball.x = ball.x + ball.vx;
        ball.y = ball.y + ball.vy;
        // Draw
        ball.draw();

        // Animate
        window.requestAnimationFrame(animationLoop);
    };

    window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame            ||
                window.webkitRequestAnimationFrame      ||
                window.mozRequestAnimationFrame         ||
                window.msRequestAnimationFrame          ||
                function(callback) {
                    window.setTimeout(callback, 1000, 60);
                };
    })();

};