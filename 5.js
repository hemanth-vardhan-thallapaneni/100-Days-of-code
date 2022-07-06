// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 2
// Output: 1

nums = [1,3,5,6], target = 7
var searchInsert = function(nums, target) {
    let insertIndex;
    for(let i=0;i < nums.length;i++){
         if(nums[i] == target){
            return i;
        } 
        else if(nums[i] > target && insertIndex == undefined ){
            insertIndex = i;
         }
         
         else if( i == (nums.length - 1) && insertIndex == undefined){
            
            insertIndex = i+1;
         }
       
    }
    return insertIndex;
};

console.log(searchInsert(nums,target));