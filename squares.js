let squareArea = document.querySelector("#squarearea");

let squareCount = parseInt(Math.random()*21)+30; // 30-50 squares

for(let i = 0; i < squareCount; i++){
    addSquare();
}

function addSquare(){
    let square = document.createElement("div");

    square.className = "square";

    square.style.left = parseInt(Math.random()*650) + "px";
    square.style.top = parseInt(Math.random()*250) + "px";

    let size = parseInt(Math.random()*11)+40;
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.style.backgroundColor = getRandomColor();

    square.onclick = function() {
        if(square.style.zIndex == 1000){
            square.remove();
        } else {
            square.style.zIndex = 1000;
        }
    };
    //put it on the screen
    squareArea.append(square);
}

function getRandomColor(){
    //make a color string
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}

//Made a function to add one square 
//Make sure that i set that as the onclick for the button 

//Make dunction that chnages all the colors od all th squares 
//make sure the button calls it
function changeColors(){
    //Make an array
    let allSquares = document.querySelectorAll(".square");

    for (let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    //for loop with index 
    //change the color 
    }
}