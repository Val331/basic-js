const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  arrC = [];
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let counter = 0;
    arr.forEach((item) => {
      counter += this.calculateDepth(item);
      this.arrC.push(counter)
    })
    return 1 + Math.max(...this.arrC);
  }
}

module.exports = {
  DepthCalculator
};
