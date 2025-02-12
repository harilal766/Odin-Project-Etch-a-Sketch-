
let drawingBoard = document.getElementById("drawingBoard");


function board(){
    let pixelCount = 0;
    let limit = 9;
    // column

    for (let col=1; col <= limit; col++){
        for (let row=1; row <= limit; row++){
            pixelCount += 1;
            if (pixelCount % limit ===0) {
                console.log(pixelCount);
            }
        }
    }
}
board();

