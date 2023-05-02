/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let library = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  let total = 0

  for (let i = 0; i < s.length; i++) {
    let current = library[s[i]]
    let after = library[s[i + 1]]

    if (current < after) {
      total -= current
    } else {
      total += current
    }
  }
  return total
};
// Runtime 113 ms