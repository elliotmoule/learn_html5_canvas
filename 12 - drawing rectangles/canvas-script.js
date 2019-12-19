
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("rectangle-canvas");
    var context = canvas.getContext("2d");

    // context.rect(xCoordinate, yCoordinate, width, height);

    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.lineJoin = "round";
    context.fillStyle = "blue";
    context.rect(50, 200, 200, 200);
    context.stroke();
    context.fill();

    // context.fillRect(xCoordinate, yCoordinate, width, height);

    context.fillStyle = "green";
    context.fillRect(300, 200, 200, 200);

    // context.strokeRect(xCoordinate, yCoordinate, width, height);

    context.lineWidth = 3;
    context.strokeStyle = "blue";
    context.lineJoin = "square";
    context.strokeRect(550, 200, 200, 200);

    // context.clearRect(xCoordinate, yCoordinate, width, height);

    // cut
    //context.clearRect(100, 100, 200, 200)

    // clear
    context.clearRect(0, 0, 900, 600);
}