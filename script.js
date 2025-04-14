console.log("Rock Paper Scissors");
let score=0;
let i =5;

function getComputerChoice(){
    return(Math.random());
}

function getHumanChoice(){
    return(prompt("Please input your choice (rock | paper| scissors):"));
} 

function playRound(humanChoice,computerChoice){
    if(computerChoice<0.33){ //Rock
        if(humanChoice=="rock"){
            console.log("computer chose: Rock")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(humanChoice=="paper"){
            console.log("computer chose: Rock")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(humanChoice=="scissors"){
            console.log("computer chose: Rock")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }
    else if(computerChoice<0.66){ //Paper
        if(humanChoice=="paper"){
            console.log("computer chose: Paper")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(humanChoice=="scissors"){
            console.log("computer chose: Paper")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(humanChoice=="rock"){
            console.log("computer chose: Paper")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }

    else if(computerChoice<1){ //Scissors
        if(humanChoice=="scissors"){
            console.log("computer chose: Scissors")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(humanChoice=="rock"){
            console.log("computer chose: Scissors")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(humanChoice=="paper"){
            console.log("computer chose: Scissors")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }
}

while(i--){
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection);
}

