// Game board array
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Game status
let gameActive = true;
let currentUser = "X";
let winner = null;

// Select all cells
const cells = document.querySelectorAll(".cell");

// Function to handle user's moves
function handleCellClick(event) {
  const cell = event.target;
  const index = Array.from(cells).indexOf(cell);
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentUser;
    cell.textContent = currentUser;
    cell.style.color = currentUser === "X" ? "blue" : "red";
    checkGameStatus();
    if (gameActive) {
      console.log(handleComputerMove);
      handleComputerMove();
    }
  }
}

// Function to handle computer's moves
function handleComputerMove() {
  const availableMoves = getAvailableMoves();
  const bestMove = getBestMove(availableMoves);
  gameBoard[bestMove] = currentUser;
  cells[bestMove].textContent = currentUser;
  cells[bestMove].style.color = currentUser === "X" ? "blue" : "red";
  console.log(checkGameStatus);
  checkGameStatus();
}

// Function to get available moves
function getAvailableMoves() {
  const availableMoves = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === "") {
      availableMoves.push(i);
    }
  }

  return availableMoves;
}

// Function to get the best move for the computer
function getBestMove(availableMoves) {
  // First, check if computer can win in the next move
  for (let i = 0; i < availableMoves.length; i++) {
    const move = availableMoves[i];
    gameBoard[move] = currentUser;
    if (isWinningMove(gameBoard, currentUser)) {
      gameBoard[move] = "";
      return move;
    }
    gameBoard[move] = "";
  }

  // If computer cannot win in the next move, check if opponent can win in the next move
  const opponent = currentUser === "X" ? "O" : "X";
  for (let i = 0; i < availableMoves.length; i++) {
    const move = availableMoves[i];
    gameBoard[move] = opponent;
    if (isWinningMove(gameBoard, opponent)) {
      gameBoard[move] = "";
      return move;
    }
    gameBoard[move] = "";
  }

  // If opponent cannot win in the next move, choose a random available move
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
}

// Function to check game status
function checkGameStatus() {
  winner = getWinner(gameBoard);
  if (winner) {
    gameActive = false;
    alert(`Congratulations! ${winner} wins!`);
    return;
  }
  if (!gameBoard.includes("")) {
    gameActive = false;
    alert("It's a tie!");
    return;
  }
  currentUser = currentUser === "X" ? "O" : "X";
}

// Function to check if a player has won
function isWinningMove(board, player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}

// Function to get the winner
function getWinner(board) {
  if (isWinningMove(board, "X")) {
    return "X";
  } else if (isWinningMove(board, "O")) {
    return "O";
  } else {
    return null;
  }
}

// Add event listeners to cells
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

// Reset button
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame);

//Function to reset the game
function startGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  winner = null;
  currentUser = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "";
  });
}
