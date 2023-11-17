// main.js

// grab canvas from screen
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const game_playing = false; 

// fill background
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 1000, 600);

ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.strokeRect(0, 0, 1000, 600);

// animate function
function animate() {
    window.requestAnimationFrame(animate); 

    if (game_playing) {
        return
    }
}

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'Escape':
            if (game_playing) { game_playing = false; }
            else { game_playing = true; }
        
    }

})
