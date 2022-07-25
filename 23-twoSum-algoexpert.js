

array = [3,5,-4,8,11,1,-1,6] ,targetSum = 10

function twoNumberSum(array, targetSum) {
    let two_sum_obj = {};
 for(let i=0;i<array.length;i++){
    if(two_sum_obj.hasOwnProperty(targetSum - array[i])){
        return [array[i],targetSum-array[i]];
    }
    else{
        two_sum_obj[array[i]] = true;
    }
 }
  
}

console.log(twoNumberSum(array,targetSum))