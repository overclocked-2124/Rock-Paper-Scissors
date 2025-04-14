console.log("Rock Paper Scissors");
let score=0;

while(true){
    let getComputerChoice = Math.random();
    let getHumanChoice = prompt("Please input your choice (rock | paper| scissors):");

    if(getComputerChoice<0.33){ //Rock
        if(getHumanChoice=="rock"){
            console.log("computer chose: Rock")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="paper"){
            console.log("computer chose: Rock")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="scissors"){
            console.log("computer chose: Rock")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }
    else if(getComputerChoice<0.66){ //Paper
        if(getHumanChoice=="paper"){
            console.log("computer chose: Paper")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="scissors"){
            console.log("computer chose: Paper")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="rock"){
            console.log("computer chose: Paper")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }

    else if(getComputerChoice<1){ //Scissors
        if(getHumanChoice=="scissors"){
            console.log("computer chose: Scissors")
            console.log("Draw");
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="rock"){
            console.log("computer chose: Scissors")
            console.log("Win");
            score++;
            console.log("Score: "+score);
        }
        else if(getHumanChoice=="paper"){
            console.log("computer chose: Scissors")
            console.log("Loss");
            score--;
            console.log("Score: "+score);
        }
    }
}