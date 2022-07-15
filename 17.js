// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


/*Could be done with hash tables!! */



nums = [1,2,3,1,2,3], k = 2

var containsNearbyDuplicate = function(nums, k) {
    let duplicate_obj = {};
    let containsDuplicates;
    for(let i=0;i<nums.length;i++){
            if(duplicate_obj.hasOwnProperty(nums[i]) && i - duplicate_obj[nums[i]][0] <= k){
               return true
            }
            else{
                duplicate_obj[nums[i]] = new Array();
                duplicate_obj[nums[i]].push(i)
            }
    }
    
     return false;
};

console.log(containsNearbyDuplicate(nums,k))