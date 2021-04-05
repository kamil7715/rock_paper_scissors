/* 
Uzytkownik wprowadza wybor i zapisuje go w zmiennej
Komputer losuje wybor i zapisuje go w zmiennej
Weryfikacja, kto z kim wygrywa
Zmienne: wygrywa gracz, wygrywa komputer, remis
Po 5 razach sprawdzamy ktora zmienna wyzsza/jesli jakas jest rowna remisowi i jest wyzsza od drugiej, to ta wygrywa
*/

function computerPlay(){
    let choices = ["Scissors", "Rock", "Paper"];
    return choices[Math.floor(3*Math.random())];
}

function playerPlay(){
    let choice = prompt("Input your choice: ");
    return choice[0].toUpperCase()+choice.slice(1).toLowerCase();
}

function whoWins(playerChoice, computerChoice){
    if (playerChoice == "Scissors" && computerChoice == "Paper" || 
    playerChoice == "Rock" && computerChoice == "Scissors" || 
    playerChoice == "Paper" && playerChoice == "Rock"){
        return `You win! ${playerChoice} > ${computerChoice}`;
    }
    else if (playerChoice == computerChoice){
        return `Draw! ${playerChoice} == ${computerChoice}`;
    }
    else{
        return `You lose! ${computerChoice} > ${playerChoice}`;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let winnerOfTheRound = '';

    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}!`);
        winnerOfTheRound = whoWins(playerPlay(), computerPlay());

        switch(winnerOfTheRound[4]){
            case "l":
                computerWins++;
                break;
            case "w":
                playerWins++;
                break;
        }

        console.log(winnerOfTheRound);
        console.log(`Score: Player ${playerWins} - ${computerWins} Computer`);
        
    }

    if(playerWins > computerWins){
        console.log("You won the game!");
    }
    else if(computerWins > playerWins){
        console.log("Your opponent was better this time.");
    }
    else{
        console.log("Game result: tie!");
    }
}

game();