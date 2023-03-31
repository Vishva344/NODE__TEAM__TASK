const gameBoard = document.querySelector(".game-board");
const cells = document.querySelectorAll(".cell");
const gameResult = document.querySelector(".game-result");
let humanSymbol = "";
let computerSymbol = "";
let currentPlayer = humanSymbol;
let gameOver = false;

// Initialize the game
startGame();

// Add event listeners to the game board
gameBoard.addEventListener("click", handleCellClick);

function startGame() {
  // Prompt the user to select X or O as their symbol
  let symbol = prompt("Do you want to play as X or O?").toUpperCase();
  while (symbol !== "X" && symbol !== "O") {
    symbol = prompt("Invalid input! Please select X or O.").toUpperCase();
  }
  humanSymbol = symbol;
  computerSymbol = symbol === "X" ? "O" : "X";
  currentPlayer = humanSymbol;
  gameResult.textContent = "";
  gameOver = false;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  if (currentPlayer === computerSymbol) {
    // If the computer is playing first, make a move
    setTimeout(() => {
      let move = minimax(cells, true).index;
      cells[move].textContent = computerSymbol;
      currentPlayer = humanSymbol;
    });
  }
}

function handleCellClick(event) {
  if (!gameOver && event.target.textContent === "") {
    event.target.textContent = humanSymbol;
    currentPlayer = computerSymbol;
    if (checkWin(cells, humanSymbol)) {
      gameResult.textContent = "You win!";
      gameOver = true;
      return;
    }
    if (checkTie(cells)) {
      gameResult.textContent = "Tie game!";
      gameOver = true;
      return;
    }
    setTimeout(() => {
      let move = minimax(cells, true).index;
      cells[move].textContent = computerSymbol;
      currentPlayer = humanSymbol;
    });
  }
}

function handleCellClick(event) {
  if (!gameOver && event.target.textContent === "") {
    event.target.textContent = humanSymbol;
    currentPlayer = computerSymbol;
    if (checkWin(cells, humanSymbol)) {
      gameResult.textContent = "You win!";
      gameOver = true;
      return;
    }
    if (checkTie(cells)) {
      gameResult.textContent = "Tie game!";
      gameOver = true;
      return;
    }

    setTimeout(() => {
      let move = minimax(cells, true).index;
      cells[move].textContent = computerSymbol;
      currentPlayer = humanSymbol;
      if (checkWin(cells, computerSymbol)) {
        gameResult.textContent = "Computer wins!";
        gameOver = true;
        return;
      }
      if (checkTie(cells)) {
        gameResult.textContent = "Tie game!";
        gameOver = true;
        return;
      }
    });
  }
}

function checkWin(cells, symbol) {
  // Check rows for win
  for (let i = 0; i < 9; i += 3) {
    if (
      cells[i].textContent === symbol &&
      cells[i + 1].textContent === symbol &&
      cells[i + 2].textContent === symbol
    ) {
      return true;
    }
  }
  // Check columns for win
  for (let i = 0; i < 3; i++) {
    if (
      cells[i].textContent === symbol &&
      cells[i + 3].textContent === symbol &&
      cells[i + 6].textContent === symbol
    ) {
      return true;
    }
  }
  // Check diagonals for win
  if (
    cells[0].textContent === symbol &&
    cells[4].textContent === symbol &&
    cells[8].textContent === symbol
  ) {
    return true;
  }
  if (
    cells[2].textContent === symbol &&
    cells[4].textContent === symbol &&
    cells[6].textContent === symbol
  ) {
    return true;
  }
  return false;
}

function checkTie(cells) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function minimax(cells, maximizingPlayer) {
  let bestScore;
  let bestMove;
  if (checkWin(cells, humanSymbol)) {
    return { score: -1 };
  } else if (checkWin(cells, computerSymbol)) {
    return { score: 1 };
  } else if (checkTie(cells)) {
    return { score: 0 };
  }
  if (maximizingPlayer) {
    bestScore = -Infinity;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent === "") {
        cells[i].textContent = computerSymbol;
        let score = minimax(cells, false).score;
        cells[i].textContent = "";
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
  } else {
    bestScore = Infinity;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent === "") {
        cells[i].textContent = humanSymbol;
        let score = minimax(cells, true).score;
        cells[i].textContent = "";
        if (score < bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
  }
  return { score: bestScore, index: bestMove };
}
//Reset button
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame);
