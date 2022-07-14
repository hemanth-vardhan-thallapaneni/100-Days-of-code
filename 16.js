// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true



 nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    let validate_duplicates = {}
    for(let i=0;i<nums.length;i++){
             if(!validate_duplicates.hasOwnProperty(nums[i])){
                validate_duplicates[nums[i]] = true;
             }
             else{
                validate_duplicates[nums[i]] = false;
             }
    }

    return Object.values(validate_duplicates).indexOf(false) != -1 ? true : false;
};


console.log(containsDuplicate(nums))