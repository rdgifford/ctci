var str = 'abc';
var perm = 'bac';
var nPerm = 'ba';
var nPerm2 = 'bbac';

// sequence of elements where order disregarded

checkPermutation = (str, perm) => {
  var countChars, strChars, permChars;
  countChars = (str) => {
    var charCount = {};
    // for each char in str
    for (var charI = 0; charI < str.length; charI++) {
      // set chars char to char or increment
      var char = str[charI];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }
  strChars = countChars(str);
  permChars = countChars(perm);

  // if chars deeply equal
  for(char in strChars) {
    if(!permChars.hasOwnProperty(char) || strChars[char] !== permChars[char]) {
      return false;
    }
  }
  return true;
}

console.log('permutation should be true', checkPermutation(str, perm));
console.log('non-permutation should be false', checkPermutation(str, nPerm));
console.log('non-permutation should be false', checkPermutation(str, nPerm2));
