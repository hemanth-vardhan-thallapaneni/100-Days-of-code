// Monotonic Array
// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// Sample Output
// true

//Time - O(n) | O(1);
array = [-1, -10, -5, -1100, -1100, -1101, -1102, -9001]

function isMonotonic(array) {
    let current_number;
    let left=0;
    let is_non_monotonic_increasing = true;
    let is_non_monotonic_decreasing = true;
 for (let i = 1; i < array.length; i++) {
   if(array[left] < array[i]){
          is_non_monotonic_increasing = false;
        
   }
   else if(array[left] > array[i]){
           is_non_monotonic_decreasing = false;

   }
   left++; 
 }
if(is_non_monotonic_increasing ||is_non_monotonic_decreasing ){
    return true;
}
return false
}

console.log(isMonotonic(array))