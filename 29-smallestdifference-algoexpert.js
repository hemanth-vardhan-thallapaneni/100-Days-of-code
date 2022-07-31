

// Smallest Difference
// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]
//Time - O(nlog(n) + mlog(m)) | Space- O(1) 


arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
function smallestDifference(arrayOne, arrayTwo) {
 let smallestNumber = Number.MAX_SAFE_INTEGER;
 let smallestArr = [];
 let upperArr = 0;
 let lowerArr = 0;
 arrayOne.sort((a,b)=>{
    return a-b;
 }); //O(nlogn)
 arrayTwo.sort((a,b)=>{
    return a-b;
 }); //O(nlogn)
while(upperArr< arrayOne.length && lowerArr < arrayTwo.length){
  let arr_one_value = arrayOne[upperArr] 
  let arr_two_value = arrayTwo[lowerArr]
   if(arr_one_value == arr_two_value){
      return [arr_one_value,arr_two_value]
   }
   else if( arr_one_value < arr_two_value){
        upperArr++;
    }
    else{
        lowerArr++;
    }
    if(smallestNumber > Math.abs(arr_one_value - arr_two_value)){
         smallestNumber = Math.abs(arr_one_value-arr_two_value)
         smallestArr = [arr_one_value,arr_two_value]
    }
    
   }
return smallestArr
    
 }




console.log(smallestDifference(arrayOne,arrayTwo));
