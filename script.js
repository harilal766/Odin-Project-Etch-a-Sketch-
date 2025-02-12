
let drawingBoard = document.getElementById("drawingBoard");


function board(){
    let pixelCount = 0;
    let limit = 16;
    // column

    for (let row=1; row <= limit; row++){
        let rowDiv = document.createElement("div"); rowDiv.id =`row`;
        drawingBoard.appendChild(rowDiv);
        for (col =1; col <= limit; col ++){
            let pixel = document.createElement("div"); pixel.id="pixel"
            rowDiv.appendChild(pixel);
        }
    }
}

board();

