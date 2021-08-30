const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slice = nums.slice(2, 5);
console.log(slice);

//This will not effect the main array, yo can see
console.log(nums);

//but, if you use splice, then spliced will be removed from main array
const removed = nums.splice(2, 3);
console.log(removed);

//and they also removed from the main array
console.log(nums);

//if you want to splice and index 
const inject = nums.splice(2, 1, 10, 20, 30);
console.log(inject);

//10, 20, 30 will injected at the place which removed
console.log(nums);

//join
const joinNum = nums.join(",");
console.log(joinNum);