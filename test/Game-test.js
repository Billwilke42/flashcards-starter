const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')
const Game = require('../src/Game')
const prototypeData = require('../src/data')

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const game = new Game(round);

    assert.deepEqual(game.currentRound, round)

    round.returnCurrentCard()

    assert.deepEqual(game.currentRound, round)
  });

  it('should keep track of the current Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const game = new Game(round);

    assert.deepEqual(game.currentRound, round);

    round.returnCurrentCard()

    assert.deepEqual(game.currentRound, round);

    round.takeTurn();
    round.takeTurn()

    assert.deepEqual(game.currentRound, round);
  });
});
