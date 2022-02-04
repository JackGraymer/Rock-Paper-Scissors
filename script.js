let choice = ["rock", "paper", "scissor"];
function computerPlay(){
    let random = choice[Math.floor(Math.random()*choice.length)]; 
    console.log(random);
    return random;
}

function playerPlay(){
    let choice = window.prompt("Rock, Paper or Scissors?");
    let playerChoice = choice.toLowerCase();
    if (playerChoice ==="rock" || playerChoice ==="paper" || playerChoice ==="scissor"){
        return playerChoice;
        } else{
        alert("Choice not valid!");
        playerPlay();
    };
    
}



let computer = computerPlay();
let player = playerPlay();

console.log(player, computer);

function game(C, P){
    if (C === P) {
        alert( "It's a TIE between " + player + "s");
    } else if((C === "rock" && P === "scissor") || (C=== "paper" && P === "rock") || (C === "scissor" && P === "paper")) {
        alert("You LOSE, " + computer + " beats " + player);
        
    } else {
        alert("You WIN, " + player + " beats " + computer + " !");
    } 
        
}
game(computer, player);


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