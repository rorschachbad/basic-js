const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const resArr = [...arr];
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';

  for (let i = 0; i < resArr.length; i++) {
    if (Array.isArray(resArr)) {
      if (resArr[i] === discardNext) {
        resArr.splice(i, 2);
      } else if (resArr[i + 1] === discardPrev && resArr[i + 1] !== undefined) {
        resArr.splice(i, 2)
      } else if (resArr[i] === doubleNext) {
        resArr.splice(i, 1, resArr[i + 1]);
      } else if (resArr[i] === doublePrev && resArr[i - 1] !== undefined) {
        resArr.splice(i, 1, resArr[i - 1])
      }
    } else {
      return Error("'arr' parameter must be an instance of the Array!")
    }
  }
  return resArr;
}

transform([1, 2, 3, '--double-prev', 4, 5])

module.exports = {
  transform
};
