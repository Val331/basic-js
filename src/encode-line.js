const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let stack = [];
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (str[i + 1] === stack[i]) {
      counter += 1;
    } else {
      if (counter === 1) result = `${result}${str[i]}`
      else {
        result = `${result}${counter + str[i-1]}`
        counter = 1;
      }
    }
  }
  return result
}

module.exports = {
  encodeLine
};
