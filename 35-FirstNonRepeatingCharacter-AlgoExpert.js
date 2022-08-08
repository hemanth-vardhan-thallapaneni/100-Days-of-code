// First Non-Repeating Character
// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input
// string = "abcdcaf"
// Sample Output
// 1 // The first non-repeating character is "b" and is found at index 1.


//Time - O(n) | Space - O(1) - as we know we have limited set of charcters i.e., 26;
string = "abcdcaf"


function firstNonRepeatingCharacter(string) {
  let string_map = {};
   for(let i=0;i<string.length;i++){
    if(!string_map.hasOwnProperty(string[i])){
              string_map[string[i]] = [1,i];
    }
    else{
        string_map[string[i]] = [string_map[string[i]] + 1,i];
    }
   
   }
   for (const key in string_map) {
      if(string_map[key][0] == 1){
        let index = string_map[key][1]
      return index
      }
        
   }
  return -1;
}

console.log(firstNonRepeatingCharacter(string))