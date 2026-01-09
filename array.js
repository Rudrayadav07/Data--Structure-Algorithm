// QUESTION 1:- REVERSE AN ARRAY.

let arr = [1, 2, 3, 4, 5];
let reverseArr = new Array(arr.length);
let j = 0;
for (let i= arr.length-1; i>=0; i--){
    reverseArr[j] = arr[i];
    j++;
}
console.log(reverseArr); 

