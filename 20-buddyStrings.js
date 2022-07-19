// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

/*Please subbmissions for better understanding of test cases */

s = "ab", goal = "ba"
var buddyStrings = function(s, goal) {
    
    if(!s.length || !goal.length || s.length != goal.length){
                 return false;
     }
    if(s === goal){
         let uniq = new Set(s);    
         if([...uniq].length < s.length) return true;
     }
       let different_arr = [];
    for(let i=0;i<s.length;i++){
     if(s.charAt(i) != goal.charAt(i)){
         different_arr.push(i);
     }
    }
    if(different_arr.length == 2 && 
       s.charAt( different_arr[0]) == goal.charAt( different_arr[1]) &&
      s.charAt( different_arr[1]) == goal.charAt( different_arr[0])
     ){
         return true;
     }
     else{
         return false;
     }
 };

console.log(buddyStrings(s,goal))