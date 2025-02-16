
let drawingBoard = document.getElementById("drawingBoard");


function board(limit){
    let pixelCount = 0;
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

board(33);

let pixels = drawingBoard.querySelectorAll(".pixel");
const resetButton = document.getElementById("resetButton");




// coloring and resetting
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover",function(event){
        if (event.button === 1){
            console.log("middle");
        } 
        event.target.style.backgroundColor= "red";
    });    

    resetButton.addEventListener("click",function(){
        pixel.style.backgroundColor = "";
    });
});




