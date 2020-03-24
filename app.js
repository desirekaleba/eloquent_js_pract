// let total = 0, count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// }
// console.log(total);

// Factorial example
/*function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
let heightFactorial = factorial(8);
console.log(heightFactorial);*/

// String comparison
/*console.log('Zb' < 'za'); // true
*/

// use of isNaN
/*let number = Number(prompt("Enter a number"));
if (!Number.isNaN(number)) {
    console.log(` The inputted number is the square root of ${number * number}`);
} else {
    console.log("Enter a correct number please");
}*/
//exercise one, looping a triangle
/*function drawTriangle(length) {
    let shape = "";
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= i; j++) {
            shape += "#";
        }
        shape += "\n";
    }
    return shape;
}
console.log(drawTriangle(7));*/

// exercise two, FizzBuzz
/*function fizzBuzz() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            result += "Fizz\n"
        } else if (i % 5 == 0) {
            result += "Buzz\n";
        } else {
            result += i + "\n";
        }
    }
    return result;
}
console.log(fizzBuzz());
*/

//fizzbuzz modified
/*function fizzBuzz() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0)
            result += "FizzBuzz\n";
        else if (i % 5 == 0)
            result += "Buzz\n";
        else if (i % 3 == 0)
            result += "Fizz\n";
        
        else
            result += i + "\n";
        
    }
    return result += "\n";
}
console.log(fizzBuzz());*/

// closure
/*function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(4));*/

// recursion
/*function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(5, 2));*/
/*function factorial(n) {
    if (n < 0) {
        return ("The number must be greater than or equal to zero");
    }
    else if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));*/
/*function findSolution(targetNumber) {
    function find(current, history) {
        if (current == targetNumber) {
            return history;
        } else if (current > targetNumber) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3,  `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(142));*/

// Growing functions
/*function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(145, 15);*/

// using growing function
/*function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 243);*/

// change printZeroPaddedWithLabel name as it's long
/*function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(8, 18, 45);*/

// Min example
/*let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(min(5, 2));*/

// even or odd
/*function isEven(number) {
    if (number < 0) {
        return false;

    } else if (number % 2 == 0 || number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}
console.log(isEven(-1));*/

// Bean counting
/*function countBs(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++;
        }
    }
    return count;
}
console.log(countBs("BeBeBBbhBcBBBBbbbb"));*/

// using countChar function
/*let countBs = function(str) {
    return countChar(str, "e");
}
function countChar(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countBs("BeBeBBbhBcBeBBBbbbbebe"));*/

// slice and concat in action
/*function remove(array, index) {
    return (array.slice(0, index))
            .concat(array.slice(index + 1));
}
console.log(remove([1, 4, 5, 2, 4, 5, 7, 38], 2));*/

// max function using REST parameters
/*function max(...numbers) {
    let result = -Infinity;
    for(number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}
console.log(max(1, 3, 4, -100, 6, 19, 5, 2));*/

// min function using REST parameters
/*function min(...numbers) {
    let result = +Infinity;
    for(let number of numbers) {
        if (number < result)
            result = number;
    }
    return result;
}
console.log(min(4, 5, 58, 1, 8));*/

// the sum of a range
function range(start, end, step = 1) {
    let result  = [];
    if (start <= end) {
        for (let i = start; i <= end; i += step)
            result.push(i);
    } else if (start >= end) {
        for(let i = start; i >= end; i += step) {
            result.push(i);
        }
    } else {
        return;
    }
    return result;
}

// sum function
/*function sum(numbers) {
    let res = 0;
    for(let number of numbers) {
        res += number;
    }
    return res;
}
console.log(sum(range(10, 20, 5)));*/
/*function reverseArray(arr) {
    let rArr = [];
    for(let i = 0; i < arr.length; i++) {
        rArr.unshift(arr[i]);
    }
    return rArr;
}
console.log(reverseArray([1,2,3,4]));*/

// function noisy(f) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned ",  result);
//         return result;
//     };
// }
// noisy(Math.min)(3, 2, 1);
