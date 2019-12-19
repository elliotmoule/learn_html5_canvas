
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("chessboard-canvas");
    var context = canvas.getContext("2d");

    // colours
    var lightCellColour = "#ddb180";
    var darkCellColour = "#7c330c";

    // Frame
    context.strokeStyle = "black";
    context.strokeRect(250, 100, 400, 400);

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {

            if ((i + j) % 2 == 0) {
                context.fillStyle = darkCellColour;
            } else {
                context.fillStyle = lightCellColour;
            }

            context.fillRect(200 + i * 50, 50 + j * 50, 50, 50);
        }
    }

    // for (let i = 1; i <= 8; i++) {
    //     if (i % 2 == 0) {
    //         context.fillStyle = darkCellColour;
    //     } else {
    //         context.fillStyle = lightCellColour;
    //     }

    //     context.fillRect(200 + i * 50, 100, 50, 50);
    // }

    // for (let i = 1; i <= 8; i++) {
    //     if (i % 2 == 0) {
    //         context.fillStyle = lightCellColour;
    //     } else {
    //         context.fillStyle = darkCellColour;
    //     }

    //     context.fillRect(200 + i * 50, 150, 50, 50);
    // }

    // // Cell 1
    // context.fillStyle = lightCellColour;
    // context.fillRect(250, 100, 50, 50);

    // // Cell 2
    // context.fillStyle = darkCellColour;
    // context.fillRect(300, 100, 50, 50);
}