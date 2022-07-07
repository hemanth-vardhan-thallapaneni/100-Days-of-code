
digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
  
//    digits = String(BigInt(digits.join("")) + 1n).split("");

   digits =  (BigInt(digits.join('')) + 1n).toString().split('')
   console.log(digits)
return digits;
};

plusOne(digits);