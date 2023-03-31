let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
let suits = ['C', 'D', 'H', 'S'];

let decksBySuit = {};

for (let i = 0; i < suits.length; i++) {
  let currentSuit = suits[i];
  let currentDeck = [];
  for (let j = 0; j < cards.length; j++) {
    currentDeck.push(cards[j] + currentSuit);
  }
  decksBySuit[currentSuit] = currentDeck;
}

console.log(decksBySuit['H']); 
console.log(decksBySuit['C']); 
console.log(decksBySuit['D']); 
console.log(decksBySuit['S']); 
