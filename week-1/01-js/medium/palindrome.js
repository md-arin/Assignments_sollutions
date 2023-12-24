/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 let str2 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let i = 0;
  let j = str2.length-1;
  while(i<j){
    if(str2.charAt(i)==str2.charAt(j)){
      i++;
      j--;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
