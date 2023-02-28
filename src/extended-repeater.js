const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let resultAdd = '';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.separator === undefined) options.separator = '+';
  if (options.addition !== undefined) {
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
        resultAdd += options.addition + options.additionSeparator;
    }
    resultAdd += options.addition
  }
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result += str + resultAdd + options.separator;
  }
  result += str + resultAdd
  return result;
}

module.exports = {
  repeater
};
