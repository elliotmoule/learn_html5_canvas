
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("draw-curves-canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.moveTo(430, 130);
    context.bezierCurveTo(470, 10, 670, 10, 670, 180);
    context.quadraticCurveTo(670, 380, 430, 520);
    context.quadraticCurveTo(190, 380, 190, 180);
    context.bezierCurveTo(190, 10, 400, 10, 430, 130);
    context.stroke();
}