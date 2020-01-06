
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("animation-game-char-canvas");
    var context = canvas.getContext("2d");

    var isBackgroundLoaded = false;
    var isHeroLoaded = false;

    // Background Image
    var background = new Image();
    background.src = 'back.png';

    background.onload = function() {
        isBackgroundLoaded = true;
        
    };

    // Character Image
    var hero = new Image();
    hero.src = 'sprite.png';

    hero.onload = function () {
        isHeroLoaded = true;        
    };

    window.requestAnimationFrame(animationLoop);

    // Cell Specifications
    var cellWidth = 256;
    var cellHeight = 256;
    var currentCell = 0;
    var numberOfCells = 6;

    // Time Specifications
    var animationStart = new Date();

    // Movement Specifications
    var moveSpeed = 15;
    var moveX = 100;

    function animationLoop() {
        var animationNow = new Date();
        if(animationNow - animationStart >= 100) {
            animationStart = animationNow;
            // Clear
            clearCanvas();

            // Update
            currentCell++;
            currentCell %= numberOfCells;
            if(moveX >= canvas.width) {
                moveX = -1 * cellWidth + 200;
            } else {
                moveX += moveSpeed;
            }

            // Draw
            if(isBackgroundLoaded) {
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
            }

            if(isHeroLoaded) {
                context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 280, 100, 100);
            }
        }

        // Animate
        window.requestAnimationFrame(animationLoop);
    };

    function clearCanvas() {
        context.clearRect(0,0,canvas.width, canvas.height);
    };

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