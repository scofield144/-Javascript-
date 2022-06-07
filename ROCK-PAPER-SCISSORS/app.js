
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

let choice = (possibleChoice) => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateCompouterChoice();
    getResult();
})


possibleChoices.forEach(choice);

function generateCompouterChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1; // i can use 3 posssibleChoice.lengh
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerText = computerChoice
    
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}