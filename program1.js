/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  
  const match = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  
  for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
      } else {
          if (stack.length === 0 || stack.pop() !== match[char]) {
              return false;
          }
      }
  }
  
  return stack.length === 0;
};

module.exports = { isValid };
