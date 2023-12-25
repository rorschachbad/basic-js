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
function encodeLine(/* str */) {
  // if (str.length === 0) {
  //   return '';
  // }
  // const data = Array.from(new Set(str), n => [ n, str.split(n).length - 1 ]);
  // let resStr = '';
  // data.forEach(item => {
  // 	if (item[1] > 1) {
  // 		resStr += `${item[1]}${item[0]}`;
  //   } else {
  //   	resStr += `${item[0]}`;
  //   }
  // })
  // return resStr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
