
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("circular-objects-canvas");
    var context = canvas.getContext("2d");

    var radian = Math.PI / 180;

    // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);

    context.beginPath();
    context.strokeStyle = "green";
    context.lineWidth = 10;
    context.fillStyle = "green";
    context.arc(450, 300, 150, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
}