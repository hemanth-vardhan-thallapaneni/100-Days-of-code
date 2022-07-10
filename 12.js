// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.



nums = [5,2,2]

var thirdMax = function(nums) {
    nums = [...new Set(nums)]
    let maxNumber =0;
    let count=0;
    if(nums.length < 3){
        maxNumber = Math.max(...nums);
    }
    else{
        nums.sort((a,b)=>{return b-a});
        console.log(nums)
        for(let i=0;i<nums.length;i++){
           
            if(count <=2){
                maxNumber = nums[i];
                count++;
            }
        }
    }
    
   

    return maxNumber;
};


console.log(thirdMax(nums));