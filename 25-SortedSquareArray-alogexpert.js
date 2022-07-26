

// Sorted Squared Array
// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample Input
// array = [1, 2, 3, 5, 6, 8, 9]
// Sample Output
// [1, 4, 9, 25, 36, 64, 81]


//Time - O(nlogn), space - O(n)
// function sortedSquaredArray(array) {
//  let squared_arr = [];
//  for(let i=0;i<array.length;i++){
//     squared_arr.push(array[i]*array[i]);
//  }

//   return squared_arr.sort((a,b)=>{return a-b});
// }



//More optimal approach 

//Time - O(n), space - O(n)
array = [-2, -1]

function sortedSquaredArray(array) {
    let squared_arr = [];
      let first = 0;
      let last = array.length -1;
      current_position = array.length - 1;
      while(first <= last){
            if(Math.abs(array[first]) > Math.abs(array[last])){
                squared_arr[current_position] = array[first] ** 2;
                first ++;
            }
            else{
                squared_arr[current_position] = array[last] ** 2;
                last --;
            }
            current_position --;
      }
   
      return squared_arr;
}
console.log(sortedSquaredArray(array));




