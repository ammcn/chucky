/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const total = x.toString()
  let response = ''
  if (x < 0) return false
  for(i = 0; i < total.length; i++) {
    response += total[total.length - i - 1]
  }
  if (response === total) return true
  return false
};
// Runtime 141 ms