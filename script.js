const tiles = document.querySelectorAll(".container .tile");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1")
const restart_btn = document.querySelector(".result button");

const winning_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const playerO = "O";
const playerX = "X";
let toggleTurn = true;
//console.log(tile);
tiles.forEach(tile=>{
    tile.onclick=()=>{
        //console.log(tile.innerText);
        let currentPlayer = toggleTurn ? playerO : playerX;
        tile.classList.add("disabled");
        addIntile(tile,currentPlayer);

        if(winnerCheck(currentPlayer)){
            //console.log(currentPlayer+ " winner");
           addInactive();
           result_text.innerHTML = currentPlayer + " Win the game ";
        }
        else if(isDraw()){
            //onsole.log("Draw the game!");
           addInactive();
           result_text.innerHTML = " Draw the game";
        }
        else{
            swapPlayer();
        }

        
    }
});

function winnerCheck(currentPlayer){
    return winning_conditions.some(condition=> {
      // console.log(condition);
       return condition.every(index=>{
       //console.log(index);
       //console.log(tiles[index].classList.contains(currentPlayer));
       return tiles[index].classList.contains(currentPlayer);
       });
    })
}

function isDraw(){
   return [...tiles].every(tile=>{
       return tile.classList.contains(playerX)|| tile.classList.contains(playerO);
    })
}

function swapPlayer(){
    toggleTurn = !toggleTurn;
    if(toggleTurn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

function addIntile(tile,currentPlayer){
    tile.innerHTML = currentPlayer;
    tile.classList.add(currentPlayer);
}

function addInactive(){
    result.classList.remove("inactive");
}

restart_btn.onclick=()=>{
    location.reload();
}