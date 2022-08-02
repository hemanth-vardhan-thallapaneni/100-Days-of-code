// Move Element To End
// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input
// array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2


array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2


//Complexity O(n^2) because using a splice inside for loop | Time : O(1)
// function moveElementToEnd(array, toMove) {
//     let count = 0;
//     for(let i=0;i<array.length;i++){
//         if(array[i] == toMove){
//            array.splice(i,1) 
//            count++;
//            i--;
//         }
//     }
//     for(let j=0;j<count;j++){
//         array.push(toMove)
//     }
//     return array;
//   }


//Complexity O(n) | Time : O(1)
function moveElementToEnd(array, toMove) {
    let count = 0;
    let left =0;
    let right = array.length -1;
    while(left < right){
       if(array[left] == toMove && array[right] !=toMove){
        let tmp = array[left];
             array[left] = array[right]
             array[right] = tmp;
         
       }
       else if(array[right] == toMove){
        right --;
       }
       else if(array[left] != toMove){
        left++;
       }
    }
    return array;
  }


console.log(moveElementToEnd(array,toMove))
  