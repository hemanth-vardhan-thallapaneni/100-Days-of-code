
// Caesar Cipher Encryptor
// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

// Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.


// Sample Input
// string = "abz"
// key = 3
// Sample Output
// "zab"

// Time - O(n) | space - O(n)

// function caesarCipherEncryptor(string, key) { 
//     let left = 0;
//     let string_arr = []
//     while(left < string.length){
//         let tmp = string_arr[left]
//         let new_alphabet = (string.charCodeAt(left) - 97 + key) % 26;
//         console.log(string.charCodeAt(left),key,new_alphabet)
//        string_arr.push(String.fromCharCode(new_alphabet + 97))
//         left++;
//     }
//     return string_arr.join('');
// }

console.log(caesarCipherEncryptor(string,key));