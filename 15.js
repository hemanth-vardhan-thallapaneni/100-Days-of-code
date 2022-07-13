// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



nums = [3,2,3]
var majorityElement = function(nums) {
    let majority_element = {}
    for (let i = 0; i < nums.length; i++) {
        if(!majority_element.hasOwnProperty(nums[i])){
            majority_element[nums[i]] = 1;
        }
        else{
            majority_element[nums[i]] += 1;
        }
        
    }
   return Object.entries(majority_element).sort(function(a,b){
        return b[1] - a[1];
    })[0][0];
 
};

console.log(majorityElement(nums));