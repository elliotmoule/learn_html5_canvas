
window.onload = function () {
    // Definitions
    var canvas  = document.getElementById("style-text-canvas");
    var context = canvas.getContext("2d");

    // context.font = "font-style font-weight font-size font-family";

    // font-style:
        // - normal (default)
        // - italic
        // - oblique
        // - inherit (style comes from the parent element)

    // font-weight:
        // - normal (default)
        // - bold
        // - bolder
        // - lighter
        // - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
        // - inherit (style from parent)

    // font-size:
        // - xx-small | x-small | small | smaller | medium | large | larger | x-large | xx-large
        // - exact number in px (pixels), pt (points) or em (ems)
        // - inherit

    // font-family
        // - family-name ("Times", "Courier", "Arial")
        // - generic-family ("Serif", "sans-serif", "cursive", "fantasy", "monospace")
        // - inherit (from parent)

    var text = "This text will be styled!";

    context.font = "normal 800 xx-large times";

    context.fillText(text, 100, 100);

    context.font = "italic 400 48px monospace";

    context.strokeText(text,  100, 150);

    // context.font = "- - - -";
}