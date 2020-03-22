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
function printFarmInventory(cows, chickens) {
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
printFarmInventory(145, 15);