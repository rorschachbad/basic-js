const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 * isNaN(parseInt(members[i]))
 */
function createDreamTeam(members) {
  let res = '';
    if (Array.isArray(members)) {
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
          res += members[i].trim()[0];
        }
      }
    } else {
      return false;
    }
    
  return res ? res.toUpperCase().split('').sort().join('') : false;
}

console.log(createDreamTeam([3]))

module.exports = {
  createDreamTeam
};
