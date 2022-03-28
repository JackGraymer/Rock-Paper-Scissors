let choice = ["rock", "paper", "scissor"];
function computerPlay(){
    let random = choice[Math.floor(Math.random()*choice.length)]; 
    console.log(random);
    return random;
}

/*function playerPlay(){
    var choice = window.prompt("Rock, Paper or Scissors?");
    var playerChoice = choice.toLowerCase();
    console.log(playerChoice);
    if (playerChoice ==="rock" || playerChoice ==="paper" || playerChoice ==="scissor"){
        return playerChoice;        
        } else{
        alert("Choice not valid!");
        return playerPlay();            

    };
    

}*/


//var computer = computerPlay();
//var player = playerPlay();
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;


function game(C, P){
    

    if (C === P) {
        alert( "It's a TIE between " + P + "s");
        tieCounter ++;
    } else if((C === "rock" && P === "scissor") || (C=== "paper" && P === "rock") || (C === "scissor" && P === "paper")) {
        alert("You LOSE, " + C + " beats " + P);
        computerCounter ++;
        
    } else {
        alert("You WIN, " + P + " beats " + C + " !");
        playerCounter ++;
    } 
        console.log("Player " + playerCounter + " - " + "Computer " + computerCounter);
}


/*

(player === "rock" && computer === "scissor")
next steps
compare return values
person (1st) VS computer
if else
    strings are equal "is a tie"
    string ( 3 winning possibilities (rock vs paper/ paper vs scissor / scissor vs rock)) print "you win, item beats item (using return value)"
    else computer wins "you lose, item beats item (using return placeholder)"


*/

var rock = document.querySelectorAll('.card')
rock.addEventListener("click", click);

function click () {
    console.log('Clicked ' + this.id);
    return this.id
}

