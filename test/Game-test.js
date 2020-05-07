const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;
const data = require('/Users/billwilke/Projects/Bills-Flashcards/src/data.js');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')
const Game = require('../src/Game')


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a currentRound of null', function() {
    const game = new Game();
    assert.deepEqual(game.currentRound, null)
  });

  it('should keep track of the current Round', function() {
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    const game = new Game();

    game.start()

    assert.deepEqual(game.currentRound.turns, 0)

    game.currentRound.takeTurn('array')

    assert.deepEqual(game.currentRound.incorrectGuesses, [1])
  });
//
  it('should keep track of the current Round', function() {
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    const game = new Game();


    game.start();

    game.currentRound.takeTurn('object');
    assert.deepEqual(game.currentRound, game.currentRound);

    game.currentRound.takeTurn('array');

    assert.deepEqual(game.currentRound.turns, 2);

    game.currentRound.takeTurn('accessor method');
    game.currentRound.takeTurn('mutator method');

    assert.deepEqual(game.currentRound, game.currentRound);
  });

  it('should keep track of the current Round', function() {
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    const game = new Game();

    game.start();

    game.currentRound.takeTurn('object');
    assert.deepEqual(game.currentRound, game.currentRound);

    game.currentRound.takeTurn('array');

    assert.deepEqual(game.currentRound.turns, 2);

    game.currentRound.takeTurn('accessor method');
    game.currentRound.takeTurn('mutator method');

    assert.deepEqual(game.currentRound, game.currentRound);

    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();
    game.currentRound.takeTurn();

    assert.deepEqual(game.currentRound, game.currentRound);
  });
});
