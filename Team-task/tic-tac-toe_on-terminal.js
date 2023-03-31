const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let player1, player2;

rl.question("Enter name of Player 1 (X): ", (name1) => {
  player1 = name1;
  rl.question("Enter name of Player 2 (O): ", (name2) => {
    player2 = name2;
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const playerSymbols = ['X', 'O'];
    let currentPlayerIndex = 0;
    let currentSymbol = playerSymbols[currentPlayerIndex];
    
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
          return true;
        }
      }
      // Check columns
      for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== ' ') {
          return true;
        }
      }
      // Check diagonals
      if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ' ')
          || (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ' ')) {
        return true;
      }
      return false;
    }
    
    function switchPlayer() {
      currentPlayerIndex = (currentPlayerIndex + 1) % 2;
      currentSymbol = playerSymbols[currentPlayerIndex];
    }
    function play() {
      displayBoard();
      // rl.question(`${players[currentPlayerIndex].name}, enter row and column to place your symbol (e.g. 0 1): `, (input) => {
        rl.question(`${currentSymbol === 'X' ? player1 : player2}, enter row and column to place your symbol (e.g. 0 1): `, (input) => {

        const [row, col] = input.split(' ').map(Number);
        if (row >= 0 && row <= 2 && col >= 0 && col <= 2&& board[row][col] === ' ' ) {
          board[row][col] = currentSymbol;
          const winnerSymbol = checkWin();
          if (winnerSymbol) {
            const winner = currentSymbol === 'X' ? player1 : player2;
            console.log(`${winner} wins!`);
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
    
    
    
    


    
    
    


    
  });
  });
//&& board[row][col] === ' '