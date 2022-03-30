let choice = ["rock", "paper", "scissor"];
function computerPlay(){
    let random = choice[Math.floor(Math.random()*choice.length)]; 
    console.log('Computer choice : ' + random);
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


let C = '';

function game(C, P){
    C = computerChoice;
    P = playerChoice;
    W = ''
    if (C === P) {
        //alert( "It's a TIE between " + P + "s");
        tieCounter ++;
        W = 'It was a TIE'
    } else if((C === "rock" && P === "scissor") || (C=== "paper" && P === "rock") || (C === "scissor" && P === "paper")) {
        //alert("You LOSE, " + C + " beats " + P);
        computerCounter ++;
        document.getElementById('computerScore').innerText = computerCounter;
        W = "Computer WINS";
        
    } else {
        //alert("You WIN, " + P + " beats " + C + " !");
        playerCounter ++;
        document.getElementById('playerScore').innerText = playerCounter;
        W = "Player WINS"
    } 
        console.log("Player " + playerCounter + " - " + "Computer " + computerCounter);

    if (playerCounter == 5 || computerCounter == 5) {
        alert("Want to play Again?")
        location.reload();
    }
    
    return W;
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

var playerChoice = document.querySelectorAll('.card');
playerChoice.forEach(card => {card.addEventListener("click", click);})

function click () {
    //console.log('Clicked ' + this.id);
    playerCard = this;
    playerChoice = this.id;
    computerChoice = computerPlay();
    game();
    Replacer();
    round();
    console.log('Player chose: ' + playerChoice);
    return this.id
    
}
i = 1;
function round(){
    let history = document.querySelector('#history');
    let newLine = document.createElement('p');
    newLine.classList.add('newLine');
    newLine.textContent = ' Round ' + i + ': Player chose ' + playerChoice + ", computer chose " + computerChoice + ' || ' + W;
    i++;

    history.prepend(newLine);
    
}

function Replacer(){
    function playerReplacer(){
        //console.log(playerCard.children[1].firstElementChild)
    document.querySelector('#player').children[1].firstElementChild.src = playerCard.children[1].firstElementChild.src;
    }
    playerReplacer();

    function computerReplacer(){
        document.querySelector('#computer').children[1].firstElementChild.src = computerChoice + '.png';
        //console.log(document.querySelector('#computer').children[1].firstElementChild.src)
    };
    computerReplacer()
    
}