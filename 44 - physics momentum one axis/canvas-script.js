
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("physics-momentum-one-axis-canvas");
    var context = canvas.getContext("2d");

    //var g = 0.098;       // gravity

    // Large Ball
    var ball1 = new Ball(50, 'blue');
    ball1.x = 290;
    ball1.y = 250;
    ball1.m = 10;
    ball1.context = context;

    // Small Ball
    var ball2 = new Ball(30, 'red');
    ball2.x = 550;
    ball2.y = 250;
    ball2.m = 6;
    ball2.context = context;

    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball1.vx = 6;

    ball2.vx = -3;

    function animationLoop() {
        // Clear Canvas
        context.clearRect(0,0,canvas.width, canvas.height);

        // Update
            // Ball 1
            ball1.x = ball1.x + ball1.vx;
            // Ball 2
            ball2.x = ball2.x + ball2.vx;

        // Physics
        // Ball Collision
        if(Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r){
            // New Velocity after collision (Ball 1)
            var v1 = ((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m);
                v1 += (2 * ball2.m * ball2.vx) / (ball1.m + ball2.m);

            // New Velocity after collision (Ball 2)
            var v2 = ((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m);
                v2 += (2 * ball1.m * ball1.vx) / (ball2.m + ball1.m);

            ball1.vx = v1;
            ball2.vx = v2;
        }

        // Edge Collision
        if(ball1.x + ball1.r > canvas.width || ball1.x - ball1.r < 0) {
            ball1.vx *= -1;
        }

        if(ball2.x + ball2.r > canvas.width || ball2.x - ball2.r < 0) {
            ball2.vx *= -1;
        }

        // Draw
        ball1.draw();
        ball2.draw();

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