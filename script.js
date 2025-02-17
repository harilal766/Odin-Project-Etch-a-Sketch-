
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


function colorAndReset(selectedColor){
    // coloring and resetting
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover",function(event){
        if (event.button === 1){
            console.log("middle");
        } 
        event.target.style.backgroundColor = selectedColor;
    });    

    resetButton.addEventListener("click",function(){
        pixel.style.backgroundColor = "";
    });
});
}




// color palette creation
const colorPaletteDiv = document.getElementById("colorPalette");
colorPaletteDiv.id = "colorPalette";
const colorPalette = [
    "#B2F7E3","#D0E7FF","#FFD6E0","#E6E6FA",
    "#FFF5E1","#FFE5B4","#C1E1FF","#F0F0F0"
];
colorPalette.forEach( color =>{
    const singleColor = color;
    color = document.createElement("div"); color.classList.add("single-color");
    color.style.backgroundColor = singleColor;
    colorPaletteDiv.appendChild(color);
});


// color selection
const colors = colorPaletteDiv.querySelectorAll(".single-color");




colors.forEach(color =>{
    color.addEventListener("click",function(event){
        // remove highlight from previously selected color
        colors.forEach( c => {c.style.border = "";});
        // highlight selected color
        event.target.style.border = "2px solid white";
        colorAndReset(event.target.style.backgroundColor);
    });
});
