const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')


class Game {
  constructor(round) {
    this.currentRound = round
  }
  start() {
    for(var i = 0; i < data.length; i++) {
      let cards = new Card(data[i].id, data[i].question, data[i].answers, data[i].correctAnswer)
    }
    let deck = new Deck(cards);
    let turn = new Turn(deck);
    turn.returnCurrentCard()
    this.printMessage();
    this.printQuestion();
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
