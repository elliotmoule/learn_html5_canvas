
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("filtered-image-canvas");
    var context = canvas.getContext("2d");

    /*    
    drawImage (img, dx, dy)
    drawImage (img, dx, dy, dw, dh)
    drawImage (img, sx, sy, sw, sh, dx, dy, dw, dh)
    */

    /*    
    Image Data Functions
    - createImageData(): creates a new, blank, ImageData object.
    - getImageData(): Returns an ImageData object that copies the pixel data for the specificed rectangle on a
    - putImageData(): Puts the image data (From a specified ImageData object) back onto the canvas.
    */
    
   var img = new Image();
   img.src = 'amsterdam.jpg';

   img.onload = function () {       
       context.drawImage(img, 180, 35);

       var imageData = context.getImageData(180, 35, 550, 366);

       // R - The color red (from 0-255)
       // G - The color red (from 0-255)
       // B - The color red (from 0-255)
       // A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible);

       for (let i = 0; i < imageData.data.length; i+=4) {

            var average = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
           imageData.data[i] = average;   // Red
           imageData.data[i+1] = average; // Green
           imageData.data[i+2] = average; // Blue
           //imageData.data[i+3] = 255; // Alpha           
       }

       context.putImageData(imageData, 180, 35);
   };
}