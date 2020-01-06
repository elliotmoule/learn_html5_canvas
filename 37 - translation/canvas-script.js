
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("translation-canvas");
    var context = canvas.getContext("2d");

    var radian = Math.PI / 180;

    // context.translate(x,y) -> moves the canvas and its origin to (x,y)
    // x: distance to move in the horizontal direction
    // y: distance to move in the vertical direction

    // Rectangle
    context.fillStyle = "red";
    context.fillRect(50,50,160,160);
    context.fill();

    // Translate Canvas
    context.translate(300,200);

    // Rectangle
    context.fillStyle = "red";
    context.fillRect(50,50,160,160);
    context.fill();
};