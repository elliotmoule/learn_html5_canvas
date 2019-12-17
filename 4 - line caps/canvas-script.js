
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("line-caps");
    var context = canvas.getContext("2d");

    /*    
    Line Caps -> context.lineCap = "";
    - butt -> default
    - round
    - square
    */
    
    // Draw line steps
    context.beginPath();                // reset the context state
    context.lineCap = "butt";
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    context.beginPath();                // reset the context state
    context.lineCap = "round";
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.moveTo(100, 125);
    context.lineTo(300, 125);
    context.stroke();

    context.beginPath();                // reset the context state
    context.lineCap = "square"
    context.strokeStyle = "green";
    context.lineWidth = 10;
    context.moveTo(100, 150);
    context.lineTo(300, 150);
    context.stroke();
}