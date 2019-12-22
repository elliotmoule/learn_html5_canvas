
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("polygon-drawing-canvas");
    var context = canvas.getContext("2d");

    //var radian = Math.PI / 180;
    // Polygon variables
    var sides = 7;
    var radius = 100;
    var centerX = 200;
    var centerY = 400;
    var startAngle = 200;
    var angle = (2 * this.Math.PI) / sides;

    // Drawing
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.lineJoin = "round";

    // Beginning Coordinates
    var beginX = centerX + radius * this.Math.cos(startAngle);
    var beginY = centerY - radius * this.Math.sin(startAngle);

    context.moveTo(beginX, beginY);

    // Draw Lines
    for (let i = 1; i <= sides; i++) {        
        // current point's coordinates
        var currentAngle = startAngle + i * angle;
        var currentPointX = centerX + radius * this.Math.cos(currentAngle);
        var currentPointY = centerY - radius * this.Math.sin(currentAngle);

        // Draw the line
        context.lineTo(currentPointX, currentPointY);
    }

    context.closePath();        // Closes path manually
    context.stroke();
}