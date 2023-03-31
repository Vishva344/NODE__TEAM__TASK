const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
const players = [  { name: 'Player 1', symbol: 'X' },  { name: 'Player 2', symbol: 'O' }];
let currentPlayerIndex = 0;
let currentSymbol = players[currentPlayerIndex].symbol;

function displayBoard() {
  console.log('  0 1 2');
  for (let i = 0; i < 3; i++) {
    console.log(i + ' ' + board[i].join('|'));
  }
}

function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== ' ') {
      return board[i][0];
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== ' ') {
      return board[0][i];
    }
  }
  // Check diagonals
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ' ')
      || (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ' ')) {
    return board[1][1];
  }
  return null;
}

function switchPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % 2;
  currentSymbol = players[currentPlayerIndex].symbol;
}

function play() {
  displayBoard();
  rl.question(`${players[currentPlayerIndex].name}, enter row and column to place your symbol (e.g. 0 1): `, (input) => {
    const [row, col] = input.split(' ').map(Number);
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && board[row][col] === ' ') {
      board[row][col] = currentSymbol;
      const winnerSymbol = checkWin();
      if (winnerSymbol) {
        const winner = players.find(player => player.symbol === winnerSymbol);
        console.log(`${winner.name} (${winner.symbol}) wins!`);
        displayBoard();
        rl.close();
        return;
      } else if (board.every(row => row.every(cell => cell !== ' '))) {
        console.log('Tie game!');
        displayBoard();
        rl.close();
        return;
      } else {
        switchPlayer();
        play();
      }
    } else {
      console.log('Invalid input, please try again.');
      play();
    }
  });
}

play();
