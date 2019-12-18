
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("shadows-canvas");
    var context = canvas.getContext("2d");

    /*    
    Shadow attributes on the canvas
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - shadowBlur
    */
    
    // Shadow variant 1
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 20;
    context.shadowColor = "red";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.moveTo(100, 60);
    context.lineTo(200, 60);
    context.stroke();

    // Shadow variant 2
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 20;
    context.shadowColor = "blue";
    context.shadowOffsetX = -10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.moveTo(350, 60);
    context.lineTo(450, 60);
    context.stroke();

    // Shadow variant 3
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 20;
    context.shadowColor = "green";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 5;
    context.moveTo(100, 200);
    context.lineTo(200, 200);
    context.stroke();

    // Shadow variant 4
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 20;
    context.shadowColor = "yellow";
    context.shadowOffsetX = -10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 5;
    context.moveTo(350, 200);
    context.lineTo(450, 200);
    context.stroke();
}