
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("rotation-canvas");
    var context = canvas.getContext("2d");

    var radian = Math.PI / 180;

    // context.rotate(rotationAmount) -> Rotate the canvas context
    // rotationAmount (radian): the angle amount of the rotation.

    // Rotate
    context.rotate(-10 * radian);

    // Rectangle
    context.fillStyle = "red";
    context.fillRect(250, 250, 400, 160);
    context.fill();

};