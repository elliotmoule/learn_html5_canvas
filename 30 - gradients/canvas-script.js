
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("gradients-canvas");
    var context = canvas.getContext("2d");

    // context.createLinearGradient(x1, y1, x2, y2)
    // context.createRadialGradient(x1, y1, r1, x2, y2, r2)
    // addColorStop(stop, color);

    // Linear Gradient
    var linearGradient = context.createLinearGradient(600, 250, 750, 350);
    linearGradient.addColorStop(0, "red");
    linearGradient.addColorStop(0.16, "orange");
    linearGradient.addColorStop(0.32, "yellow");
    linearGradient.addColorStop(0.48, "green");
    linearGradient.addColorStop(0.64, "blue");
    linearGradient.addColorStop(0.80, "indigo");
    linearGradient.addColorStop(0.96, "violet");

    // Radial Gradient
    var radialGradient = context.createRadialGradient(270, 300, 5, 275, 305, 80);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(0.16, "orange");
    radialGradient.addColorStop(0.32, "yellow");
    radialGradient.addColorStop(0.48, "green");
    radialGradient.addColorStop(0.64, "blue");
    radialGradient.addColorStop(0.80, "indigo");
    radialGradient.addColorStop(0.96, "violet");


    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.fillStyle = radialGradient;
    context.rect(200, 250, 150, 100);
    // context.fillStyle = linearGradient;
    // context.rect(600, 250, 150, 100);
    context.stroke();
    context.fill();
}