
let drawingBoard = document.getElementById("drawingBoard");


function board(){
    let pixelCount = 0;
    let limit = 16;
    // column

    for (let col=1; col <= limit; col++){
        let rowDiv = document.createElement("div"); rowDiv.id =`row`;
        drawingBoard.appendChild(rowDiv);
    }
}
board();

