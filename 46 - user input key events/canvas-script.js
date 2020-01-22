
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("user-input-key-events-canvas");
    var context = canvas.getContext("2d");

    // Key Events
    // - keydown
    // - keypress
    // - keyup

    // Keyboard Definitions
    var KEY_CODE = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    window.addEventListener('keydown', function(event){
        switch (event.keyCode) {
            case KEY_CODE.LEFT:
                consoleMessage("LEFT ARROW PRESSED")
                break;
            
            case KEY_CODE.UP:
                consoleMessage("UP ARROW PRESSED")
                break;

            case KEY_CODE.RIGHT:
                consoleMessage("RIGHT ARROW PRESSED")
                break;

            case KEY_CODE.DOWN:
                consoleMessage("DOWN ARROW PRESSED")
                break;
        }
    });

    function consoleMessage(message) {
        console.log(message);
    };

};