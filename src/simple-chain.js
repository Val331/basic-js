const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(newSymbol) {
    if (typeof newSymbol === 'object' && newSymbol !== null) this.chain.push(newSymbol);
    else this.chain.push(String(newSymbol));
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let a = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return a;
  }
};

module.exports = {
  chainMaker
};
