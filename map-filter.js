// const nums = [1, 2, 3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

const numbers = [1, 2, 3, 4, 5, 6, 7];



//This is map 
// const result = numbers.map(function(element){
//     return element * element;
// })




//This is map in one line
// const result = numbers.map(x => x*x);


//This is filter 
const result = numbers.filter(x=> x%2==0);

console.log(result);


