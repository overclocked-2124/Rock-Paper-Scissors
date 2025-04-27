console.log("Rock Paper Scissors");
let scoreHuman=0;
let scoreComputer=0;
let i =10;

const playerScoreSpan   = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

function getComputerChoice(){
    return(Math.random());
}

const rockButton = document.getElementById('buttonRock');
const paperButton = document.getElementById('buttonPaper');
const scissorsButton = document.getElementById('buttonScissors')
rockButton.addEventListener('click', ()=>handleChoice('rock'));
paperButton.addEventListener('click', ()=>handleChoice('paper'));
scissorsButton.addEventListener('click', ()=>handleChoice('scissors'));

function handleChoice(humanChoice){
    console.log("player Choice "+ humanChoice);
    computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
    playerScoreSpan.textContent   = scoreHuman;
    computerScoreSpan.textContent = scoreComputer;
}

function playRound(humanChoice,computerChoice){
    if(computerChoice<0.33){ //Rock
        if(humanChoice=="rock"){
            console.log("computer chose: Rock")
            console.log("Draw");
        }
        else if(humanChoice=="paper"){
            console.log("computer chose: Rock")
            console.log("Win");
            scoreHuman++;
        }
        else if(humanChoice=="scissors"){
            console.log("computer chose: Rock")
            console.log("Loss");
            scoreComputer++;
        }
    }
    else if(computerChoice<0.66){ //Paper
        if(humanChoice=="paper"){
            console.log("computer chose: Paper")
            console.log("Draw");
        }
        else if(humanChoice=="scissors"){
            console.log("computer chose: Paper")
            console.log("Win");
            scoreHuman++;
        }
        else if(humanChoice=="rock"){
            console.log("computer chose: Paper")
            console.log("Loss");
            scoreComputer++;
        }
    }

    else if(computerChoice<1){ //Scissors
        if(humanChoice=="scissors"){
            console.log("computer chose: Scissors")
            console.log("Draw");
        }
        else if(humanChoice=="rock"){
            console.log("computer chose: Scissors")
            console.log("Win");
            scoreHuman++;
        }
        else if(humanChoice=="paper"){
            console.log("computer chose: Scissors")
            console.log("Loss");
            scoreComputer++;
        }
    }
}