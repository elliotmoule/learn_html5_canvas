
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("drawing-image-canvas");
    var context = canvas.getContext("2d");

    /*    
    drawImage (img, dx, dy)
    drawImage (img, dx, dy, dw, dh)
    drawImage (img, sx, sy, sw, sh, dx, dy, dw, dh)
    */
   
    var img = new Image();
    img.src = "arkham-city-robin2.jpg";

    img.onload = function () {
        context.drawImage(img, 345, 0, 150, 250, 250, 0, 400, 500);
    }
}