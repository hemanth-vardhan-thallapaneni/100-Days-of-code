
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

nums = [1]
var singleNumber = function(nums) {
    let single_number = {}
    for(let i=0;i<nums.length;i++){
        if(!single_number.hasOwnProperty(nums[i])){
            single_number[nums[i]] = true;
        }
        else{
            single_number[nums[i]] = false;
        }
    }
    let obj_index = Object.values(single_number).indexOf(true);
    return Object.keys(single_number)[obj_index];
};

console.log(singleNumber(nums))