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
    let counter = 1;
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            counter += 1;
            return calculateDepth(item);
        }
    })
    arrC.push(counter)
    return Math.max(...arrC);
  }
}

module.exports = {
  DepthCalculator
};
