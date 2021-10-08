const { assert } = require('chai');
const { factorial } = require('./factorial');

describe('Factorial test', () => {
  it('Factorial(0) = 1', () => assert.equal(factorial(0), 1));

  it('Factorial(1) = 1', () => assert.equal(factorial(1), 1));

  it('Factorial(5) = 120', () => assert.equal(factorial(5), 120));

  it('Factorial(171) = Infinity', () => assert.equal(factorial(171), Infinity));
});
