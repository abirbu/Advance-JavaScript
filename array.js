const nums = [1, 2, 3, 4, 5, 6, 7];
const output = [];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const result = element * element;
    output.push(result);
}

console.log(output);