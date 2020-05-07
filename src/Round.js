const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    // this.currentCard = null;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    // this.turns++
    // this.returnCurrentCard();
    let currentCard = this.returnCurrentCard()
    let turn = new Turn(guess, currentCard)
    let evaluate = turn.evaluateGuess()
    if(evaluate === false) {
      this.incorrectGuesses.push(currentCard.id)
    }
    this.turns++
    this.returnCurrentCard();
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let percent = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    let percentage = Math.round(percent)
    return percentage
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
