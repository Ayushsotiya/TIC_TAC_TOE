
const playerinfo = document.querySelector(".gameinfo");
const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector(".reset");


let currentPlayer ;
let gameGrid;



const winningPosition =[
[0,1,2], 
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];




initGame();


function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerHTML = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    playerinfo.innerHTML = `Current Player - ${currentPlayer}`;
} 



// reset button
resetbtn.addEventListener("click",initGame);



boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
}); 



function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
    }
}



function swapTurn(){
    if(currentPlayer ==="X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X"; 
    }
    playerinfo.innerHTML = `Current Player - ${currentPlayer}`;
}



function checkGameOver() {
    let answer = "";
    winningPosition.forEach((position) => {

        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
            

                if(gameGrid[position[0]] === "X"){
                    answer = "X";
                }
                else{
                    answer = "O";
                }
        
  
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
        }
    });

 if(answer !== ""){
        gameInfo.innerText = `Winner Player - ${ans}`;
        return;
    }

    let emptyBox = 0;
    gameGrid.forEach((box) => {
        if(box !== ""){
            emptyBox++;
        }
    });

    if(emptyBox === 9){
      playerinfo.innerText = "Game Tied";
    }
}

