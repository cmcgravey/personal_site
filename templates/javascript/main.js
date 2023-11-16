// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element
    var canvas = document.getElementById("myCanvas");

    // Check if the browser supports the canvas element
    if (canvas.getContext) {
        // Get the 2D rendering context
        var ctx = canvas.getContext("2d");

        // Drawing operations go here
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 1000, 600);
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, 1000, 600);

        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("This game is currently under maintenance!", 100, 100);
    } else {
        // Canvas not supported, provide fallback content
        console.log("Canvas not supported!");
    }
});