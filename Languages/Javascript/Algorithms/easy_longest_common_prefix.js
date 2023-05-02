/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
  let sortedArr = arr.sort()
  let response = ''

  const first = sortedArr[0]
  const last = sortedArr[sortedArr.length - 1]

  if (first === "") return ""
  if (first === last) return first
  for (i = 0; i < first.length; i ++) {
      if (first[i] && first[i] === last[i]) {
          response += first[i]
      } else {
          return response
      }
  }
  return response
};
// Runtime 45 ms