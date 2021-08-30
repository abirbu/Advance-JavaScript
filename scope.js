function sum (num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result = sum(5, 10);
console.log(result);

//we cannot call sum outer because we have declered at the function
//if you use var then that will be called outer
