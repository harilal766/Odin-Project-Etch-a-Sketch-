
let drawingBoard = document.getElementById("drawingBoard");


function board(){
    let pixelCount = 0;
    let limit = 16;
    // column

    for (let row=1; row <= limit; row++){
        let rowDiv = document.createElement("div"); rowDiv.classList.add("row");
        drawingBoard.appendChild(rowDiv);
        for (let col =1; col <= limit; col ++){
            pixelCount += 1;
            let pixel = document.createElement("div"); pixel.classList.add("pixel");
            rowDiv.appendChild(pixel);
        }
    }
}

board();

