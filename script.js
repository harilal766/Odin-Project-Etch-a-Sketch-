
let drawingBoard = document.getElementById("drawingBoard");

function board(){
    let pixelCount = 0;
    let limit = 16;
    // column
    for (let col=0; col< limit; col++){
        let pixel = document.createElement("div");
        pixelCount += 1;
        pixel.id = `pixel-${pixelCount}`;
        pixel.classList.add("pixel");
        drawingBoard.appendChild(pixel);
    }
    
}

board();

