const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let obj = {};
  let stackAll = [];
  arr.forEach((item) => {
    let stack = item.split('.').reverse();
    stack = stack.map((item) => `.${item}`)
    let str = '';
    stack.forEach((item) => {
      str += item;
      stackAll.push(str)
    })
  })
  let stackDel = stackAll;
  for (let i = 0; i < stackAll.length; i++) {
    obj[stackAll[i]] = stackAll.filter((item) => stackAll[i] === item).length
  }
  return obj;
}

module.exports = {
  getDNSStats
};
