const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
      this.value = value
  }
  encrypt(str, key) {
      if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) throw new Error('Incorrect arguments!');
      const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let strUpp = str.toUpperCase();
      let keyPad = key.padEnd(str.length, key);
      let newArr = [];
      let t = 0;
      let arr = strUpp.split('');
      arr.forEach((item,i) => {
          if(a.includes(item)) newArr.push(keyPad[t++]);
          else newArr.push(item);
      })
      let keyUpp = newArr.join('').toUpperCase();
      let result = '';
      for (let i = 0; i < strUpp.length; i++) {
          if (a.includes(strUpp[i])) {
              result += a[(a.indexOf(strUpp[i]) + a.indexOf(keyUpp[i])) % 26]
          } else {
              result += strUpp[i];
          }
      }
      if (this.value !== false) return result;
      else return result.split('').reverse().join('');
  }
  
  decrypt(str, key) {
    if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) throw new Error('Incorrect arguments!');
      const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let strUpp = str.toUpperCase();
      let keyPad = key.padEnd(str.length, key);
      let newArr = [];
      let t = 0;
      let arr = strUpp.split('');
      arr.forEach((item,i) => {
          if(a.includes(item)) newArr.push(keyPad[t++]);
          else newArr.push(item);
      })
      let keyUpp = newArr.join('').toUpperCase();
      let result = '';
      for (let i = 0; i < strUpp.length; i++) {
          if (a.includes(strUpp[i])) {
              result += a[(a.indexOf(strUpp[i]) - a.indexOf(keyUpp[i]) + 26) % 26]
          } else {
              result += strUpp[i];
          }
      }
      if (this.value !== false) return result;
      else return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
