
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("pacman-canvas");
    var context = canvas.getContext("2d");

    var radian = Math.PI / 180;

    // First Pass
    // Body
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.fillStyle = "yellow";
    context.moveTo(250, 250);
    context.lineTo(330, 310);
    context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
    context.lineTo(250,250);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.strokeStyle = "yellow";
    context.fillStyle = "black";
    context.arc(250, 200, 10, 0 * radian, 360, false);
    context.stroke();
    context.fill();

    // Second Pass
    // Object 1
    context.beginPath();
    context.strokeStyle = "orange";
    context.lineWidth = 10;
    context.fillStyle = "orange";
    context.arc(600, 250, 100, 143 * radian, 323 * radian, false);
    context.stroke();
    context.fill();

    // Object 2
    context.beginPath();
    context.strokeStyle = "orange";
    context.lineWidth = 10;
    context.fillStyle = "orange";
    context.arc(600, 250, 100, 37 * radian, 217 * radian, false);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.fillStyle = "black";
    context.arc(600, 200, 10, 0 * radian, 360, false);
    context.stroke();
    context.fill();
}