const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = null;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    let evaluate = turn.evaluateGuess()
    if(evaluate === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.returnCurrentCard()
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let percent = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    let percentage = Math.round(percent)
    return percentage
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
