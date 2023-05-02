/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(pattern) {
  let lifoStack = []
  let library = {
    '(': { value: ')', open: true },
    ')': { value: '(', open: false },
    '[': { value: ']', open: true },
    ']': { value: '[', open: false },
    '{': { value: '}', open: true },
    '}': { value: '{', open: false}
  }

  for (i = 0; i < pattern.length; i++) {
    let current = pattern[i]
    let topOfStack = lifoStack[lifoStack.length - 1]
    let currentsMatch = library[current].value
    let currentsClosed = !library[current].open
    
    if (currentsMatch === topOfStack && currentsClosed) {
      lifoStack.pop()
    } else {
      lifoStack.push(current)
    }
  }

  return lifoStack.length === 0;
};
// Runtime 63 ms