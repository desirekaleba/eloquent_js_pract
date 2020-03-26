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
// function range(start, end, step = 1) {
//     let result  = [];
//     if (start <= end) {
//         for (let i = start; i <= end; i += step)
//             result.push(i);
//     } else if (start >= end) {
//         for(let i = start; i >= end; i += step) {
//             result.push(i);
//         }
//     } else {
//         return;
//     }
//     return result;
// }

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

// filter array
/*function filterArr(arr, test) {
    let filtered = [];
    for (let element of arr) {
        if (test(element)) {
            filtered.push(element);
        }
    }
    return filtered;
}*/

//arrayMap
/*function arrayMap(arr, transform) {
    let mapped = [];
    for (let element of arr) {
        mapped.push(transform(element));
    }
    return mapped;
}*/

// summarizing with reduce
// function reduceArr(arr, combine, start) {
//     let current = start;
//     for (let element of arr) {
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(reduceArr(
//     [1, 2, 3, 4],
//     (a, b) =>  a + b,
//     0));

//  for/of
/*let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    //console.log(char.codePointAt(char.length - 1)); 
    console.log(char);
}*/

// Recognizing text
/*function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5, 6], n => n == 2));*/

// prototypes
/*let protoRabbit = {
    speak(words) {
        console.log(` ${this.type} rabbit says ${words}`)
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("I am the greatest");*/

/*function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(words){
    console.log(`The ${this.type} rabbit says ${words}`);
};
let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("I am weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);*/

// class notation
/*class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(words) {
        console.log(` The ${this.type} rabbit says ${words}`);
    }
}

let coolRabbit = new Rabbit("cool");
coolRabbit.speak(" I am really cool");

let hello = new class {
    sayHello() {
        return "hello";
    }
};
console.log(hello.sayHello());*/

// Maps
/*let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Deska", 21);
console.log(`Boris is ${ages.get("Boris")}`);
console.log("Is Deska's age known ?", ages.has("Deska"));*/

// Symbol iterators
/*let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());*/

// Matrix
/*class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height)
            return {
                done: true
            };
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++;

        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {
            value,
            done: false
        }
    }
}
// looping through 
let matrix = new Matrix(2, 2, (x, y) => ` value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

// inheritance
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) 
                return element(y, x);
            else
                return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
    }
}
// looping through
let s_matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(s_matrix.get(4,2));*/

// vector type
/*class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
console.log(new Vec(1, 2).minus(new Vec(2, 3)).length);*/

// Groups
/*class Group {
    constructor() {
        this.members = [];
    }

    add (value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group();
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor (group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {
                done: true
            };
        } else {
            let result = {
                value: this.group.members[this.position],
                done: false
            }
            this.position++;
            return result;
        }
    }
}

let group = Group.from([10, 20]);
group.add(100);
group.delete(10);
console.log(group);

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

let groupIterator = group[Symbol.iterator]();
console.log(groupIterator.next());
console.log(groupIterator.next());
console.log(groupIterator.next());*/

// borrowing a method
/*let map = {
    one: true,
    two: true,
    hasOwnProperty: true
};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));*/

// Immutable or unchangeable Objects
/*let object = Object.freeze({name: "Desire"});
console.log(object.name);
object.name = "Gloire";
console.log(object.name);*/

// Test
/*function test(label, body) {
    if (!body()) {
        console.log(`test failed: "${label}"`);
    } else {
        console.log(`test passed: "${label}"`);
    }
}

test("convert Latin to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
    return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷";
});*/

// Error propagation
/*function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result))
        return null;
    else
        return result;
}
console.log(promptNumber("whow old are you"));*/

// Exceptions
/*function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}
function look() {
    if (promptDirection("Which way") == "L") return "A house";
    else return "Two angry bears";
}
try {
    console.log("you see", look());
} catch (error) {
    console.log("Something went wrong:" + error);
}*/

/*class MultiplicatorUnitFailure extends Error {}
function primitiveMultiply(num1, num2) {
    if (Math.random() < 0.2) {
        return num1 * num2;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}
function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e;
        }
    }
    
}
console.log(reliableMultiply(8, 5));*/

// The locked box
/*const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (!this.locked) {
            return this._content;
        } else {
            throw new Error("Content Locked, please make sure you have the right permission");
        }
    }
};

function withBoxUnlock(fn) {
    if (box.locked) {
        box.unlock();
    } 
    try {
        return fn();
    }
    finally {
        box.lock();
    }
}

console.log(withBoxUnlock(() => box.content.push(1, 2, 3, 4)));
console.log(withBoxUnlock(() => box.content));
console.log(box.locked); */

// Regular expressions (Regex)
let eighteenPlus = /eighteen\+/;
// console.log(eighteenPlus.test("eighteen+evice"));
// console.log(eighteenPlus.test("eighteenPlus"));

// let digits = /[0123456789]/;
// console.log(digits.test("097541"));

// let simplifiedDigits = /[0-9]/;
// console.log(simplifiedDigits.test("in 1034"));

/*
//    * @01-30-2003 15:20
//    * @the above date format can be represented as
// */
// let date = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(date.test("10-30-2003 14:45"));

// // *@ the not operator, caret
// let notBinary = /[^01]/;
// console.log(notBinary.test("010101"));
// console.log(notBinary.test(4543));

// Matching more than one digit
let _digits = /\d+/;
let _digts = /\d*/;
console.log(_digits.test("1234"));
