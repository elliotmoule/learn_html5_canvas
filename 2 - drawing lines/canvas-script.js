
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("line-canvas");
    var context = canvas.getContext("2d");
    
    // Draw line steps
    context.beginPath();                // reset the context state
    context.strokeStyle = "red"         // set the colour of the line.
    context.lineWidth = 10;             // width of the line.
    context.moveTo(30, 70);             // moveTo(x,y) -> Starting point of line.
    context.lineTo(130, 70);            // line(x,y) -> end point of the line.
    context.stroke();                   // this draws the line.
}