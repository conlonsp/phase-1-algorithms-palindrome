function isPalindrome(word) {
  for(let i = 0; i < word.length/2; i++) {
    if(word[i] === word[word.length - 1 -i]) {
      return true
    } else if(word[i] !== word[word.length - 1 -i]) {
      return false
    }
  }
}

/* 
for the current word, word index is = 0 and word index < word.length/2 and the word index increments
  and if current word index value = the last word index value
    it returns true
  else if current word index value doesnt = the last word index value
    it returns false
*/

/*
  We need to iterate through the string to check that the current letter is
  equal to the corresponding letter on the back end of the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
