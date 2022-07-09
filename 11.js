// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

 

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

/*Complexity went to O(n^2)*/
nums = [2,3,1,2]
var canBeIncreasing = function(nums) {
   let temp_arr = [...nums];
   let is_increasing = false;
  for(let i=0;i<nums.length;i++){
    temp_arr.splice(i,1)
    for(let j=0;j<temp_arr.length;j++){
      if(temp_arr[j+1] != undefined && temp_arr[j] >= temp_arr[j+1]){
        is_increasing = false;
        temp_arr = [...nums]
        break;
      }
      else{
       
        is_increasing = true;
      }
    }
  }
  return is_increasing;
};

console.log(canBeIncreasing(nums));