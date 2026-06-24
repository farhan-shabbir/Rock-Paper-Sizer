let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userScorePar = document.querySelector("#user-score");
let compScorePar = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  console.log("Draw Game");
  msg.innerText = "Draw Game, Try again!";
  msg.style.backgroundColor = "#37718e";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
      userScore++;

     userScorePar.innerText = userScore; 
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#6247aa";
  } else {
    compScore++;

    compScorePar.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#af1d3c";
  }
};

const playGame = (userChoice) => {
  console.log("User choice was =", userChoice);
  //for computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice was =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
