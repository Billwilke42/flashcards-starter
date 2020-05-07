const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round')


class Game {
  constructor() {
    this.currentRound = null;
  }
  start() {
    let cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.currentRound.returnCurrentCard()
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
    if(this.currentRound.turns === 30) {
      this.currentRound.endRound()
    }
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
