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
//let eighteenPlus = /eighteen\+/;
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

// Matching more than one digit character
/* let _digits = /\d+/;
// let _digts = /\d*/ //;
// console.log(_digits.test("1234"));

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour"));
// console.log(neighbor.test("neighbor"));*/

// number of time to occur
/*let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(dateTime.test("1-3-1003 12:4"));

// Five or more times can be represented as followed
let fiveOrMore = /\d{5,}/;
console.log(fiveOrMore.test("444"));
console.log(fiveOrMore.test("444444")); */

// Grouping sub-expressions
/*let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("BooHoooohoohooo"));*/

// Matches and Groups
/*let match = /\d+/.exec("one two 100 200");
console.log(match);
console.log(match.index);

console.log("one two three 100".match(/\d+/));
let quotedText = /'([^']*)'/;

console.log(quotedText.exec("she said 'hello'"));*/

// Date and time
/*console.log(new Date());
console.log(new Date(1998, 5, 18, 12, 59, 59, 999).getTime());
console.log(new Date(898163999999));

function getDate(str) {
    let [_, month, day, year, hour, minutes, seconds] = /(\d{1,2})-(\d{1,2})-(\d{4}) (\d{1,2}):(\d{1,2}):(\d{1,2})/.exec(str);
    return new Date(year, month - 1, day, hour, minutes, seconds);
}
console.log("\n\n");
console.log(getDate("1-30-2003 12:30:45"));*/

// Words and String boundaries
/*console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
/* 
    * test if a text  contains not only a number followed by 
    * any of these words; pig, cow or chicken or their
    *  plural
*/
/*let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));

// a decimal, binary or an hexadecimal number
/*
* decimal of at least 5 digits
* binary followed by b
* hexadecimal followed by h
*/
/*let pattern = /\b([01]+b|[\da-f]+h|\d{5,})\b/;
console.log(pattern.test("2585"));
console.log(pattern.test("10011011b"));
console.log(pattern.test("1524acdfh"));*/

// The replace Method
// console.log("papa".replace("p","m"));

// console.log("papa".replace(/[a]/, "m"));
// //* when a regular expression ends 
// //* in /g i.e apply the match globally
// // the below eg returns mama
// console.log("papa".replace(/[p]/g, "m"));
// // this removes the commas and return Firstname Lastname
// // yet it was in Lastname, Firstname format
// console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
//     .replace(/(\w+), (\w+)/g, "$2 $1"));

// // passing the function as the second argument to replace
// let s = "the cia and fbi";
// console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));

// //
// let stock = "1 lemon, 2 cabbages, and 101 eggs";
// function minusOne(match, amount, unit) {
//     amount = Number(amount) - 1;
//     if (amount == 1) {
//         unit = unit.slice(0, unit.length - 1);
//     } else if (amount == 0) {
//         amount = "no";
//     }
//     return amount + " " + unit;
// }
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

// Creed
// remove comments from js code
// function stripComments(code) {
//     return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
// }
// console.log(stripComments("1 + /* 2 */3"));
// console.log(stripComments("x = 10;// ten!!"));
// // → x = 10;
// console.log(stripComments("1 /* a */+/* b */ 1"));
// // → 1 + 1

// Dinamically creating RegExp objects
// let name = "harry";
// let text = "Harry is a suspicious character";
// let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "_$1_"));

// let name2 = "dea+hl[]rd";
// let text2 = "This dea+hl[]rd guy is super annoying.";
// let escaped = name2.replace(/[\\[.+*?(){|^$]/g, "\\$&");
// let regexp2 = new RegExp("\\b" + escaped + "\\b", "gi");
// console.log(text2.replace(regexp2, "_$&_"));

// let digit = /\d/g;
// console.log(digit.exec("here it is: 1"));
// // → ["1"]
// console.log(digit.exec("and now: 1"));
// // → null
// console.log("Banana".match(/an/g));
// // → ["an", "an"]

// Looping over matches
// let input = "A string with 3 numbers in it... 42 and 88.";
// let number = /\b\d+\b/g;
// let match;
// while (match = number.exec(input)) {
//     console.log(match + " Found" + " at " + match.index);
// }

// Parsing an INI file
/*function parseINI(iniFile) {
    let result = {};
    let section = result;

    String(iniFile).split(/\r?\n/)
        .forEach(line => {
            let match;
            if (match = line.match(/^(\w+)=(.*)$/)) {
                section[match[1]] = match[2];
            } else if (match = line.match(/^\[(.*)\]$/)) {
                section = result[match[1]] = {};
            } else if (!/^\s*(;.*)?$/.test(line)) {
                throw new Error("Line '" + line + "' is not valid");
            }
        });
    return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));

let criminals = `
searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7
; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451
[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`;

console.log(parseINI(criminals));*/

// internal characters
// console.log(/🍎{3}/.test("🍎🍎🍎"));
// // → false
// console.log(/<.>/.test("<🌹>"));
// // → false
// console.log(/<.>/u.test("<🌹>"));
// // → true
// console.log(/\p{Script=Greek}/u.test("α"));
// // → true
// console.log(/\p{Script=Arabic}/u.test("α"));
// // → false
// console.log(/\p{Alphabetic}/u.test("α"));
// // → true
// console.log(/\p{Alphabetic}/u.test("!"));
// // → false

// Regexp golf
// verify(/ca[rt]/,
//     ["my car", "bad cats"],
//     ["camper", "high art"]);

// verify(/pr?op/,
//     ["pop culture", "mad props"],
//     ["plop", "prrrop"]);

// verify(/ferr(et|y|ari)/,
//     ["ferret", "ferry", "ferrari"],
//     ["ferrum", "transfer A"]);

// verify(/ious\b/,
//     ["how delicious", "spacious room"],
//     ["ruinous", "consciousness"]);

// verify(/\s[.,:;]/,
//     ["bad punctuation ."],
//     ["escape the dot"]);

// verify(/\w{7}/,
//     ["hottentottententen"],
//     ["no", "hotten totten tenten"]);

// verify(/\b[^\We]+\b/i,
//     ["red platypus", "wobbling nest"],
//     ["earth bed", "learning ape", "BEET"]);


// function verify(regexp, yes, no) {
//     // Ignore unfinished exercises
//     if (regexp.source == "...") return;
//     for (let str of yes)
//         if (!regexp.test(str)) {
//             console.log(`Failure to match '${str}'`);
//         }
//     for (let str of no)
//         if (regexp.test(str)) {
//             console.log(`Unexpected match for '${str}'`);
//         }
// }

// Quoting style
// let text = "'I'm the cook,' he said, 'it's my job.'";
// console.log(text.replace(/(^|\W)'|'(\W|$)/g, ""));

// Numbers again
// let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

// // Tests:
// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//         "1.3e2", "1E-4", "1e+12"
//     ]) {
//     if (!number.test(str)) {
//         console.log(`Failed to match '${str}'`);
//     }
// }
// for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
//         ".5.", "1f5", "."
//     ]) {
//     if (number.test(str)) {
//         console.log(`Incorrectly accepted '${str}'`);
//     }
// }

// * Modules
// improvised modules
/*const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        name(number) {return names[number];},
        number(name) {return names.indexOf(name);}
    };
}();
console.log(weekDay.name(weekDay.number("Sunday")));*/

// evaluating data as code
// const x = 1;
// function evalAndReturnX(code) {
//     eval(code);
//     return x;
// }
// console.log(evalAndReturnX("var x = 2"));
// console.log(x);

// Using the Function constructor
// let plusOne = Function("n", "return n + 1");
// console.log(plusOne(4));
// console.log(plusOne(5));

// Using CommonJS require and exports
// const { formatDate } = require("./format-date");
// console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

// ECMAScript modules
// import formatDate from "./format-date";
// console.log(formatDate((new Date(2017, 9, 13), "dddd the Do")));

// Building, Bundling and Minifying
/* 
* tools that roll their programs (which they
* painstakingly split into modules) back into a single big file before they publish
* it to the Web. Such tools are called bundlers.

* Minifiers, These are tools that take
* a JavaScript program and make it smaller by automatically removing comments and whitespace, renaming bindings, and replacing pieces of code with
* equivalent code that take up less space.*/

// Asynchronous programming
// * Callbacks


// * Promises
// let fifteen = Promise.resolve(15);
// fifteen.then((value) => console.log(`Got ${value}`));
// function storage(nest, name) {
//     return new Promise(resolve => {
//         nest.readStorage(name, result => resolve(result));
//     });
// }
// storage(BigOk, "enemies")
//     .then(value => console.log(value));

// new Promise((_, reject) => reject(new Error("Fail")))
//     .then(value => console.log("Handler 1"))
//     .catch(reason => {
//         console.log("Caught failure " + reason);
//         return "Nothing";
//     })
//     .then(value => console.log("Handler 2", value));

// class Timeout extends Error {}

// function request(nest, target, type, content) {
//     return new Promise((resolve, reject) => {
//         let done = false;

//         function attempt(n) {
//             nest.send(target, type, content, (failed, value) => {
//                 done = true;
//                 if (failed) reject(failed);
//                 else resolve(value);
//             });
//             setTimeout(() => {
//                 if (done) return;
//                 else if (n < 3) attempt(n + 1);
//                 else reject(new Timeout("Timed out"));
//             }, 250);
//         }
//         attempt(1);
//     });
// }

// function requestType(name, handler) {
//     defineRequestType(name, (nest, content, source, callback) => {
//         try {
//             Promise.resolve(handler(nest, content, source))
//                 .then(response => callback(null, response),
//                     failure => callback(failure));
//         } catch (exception) {
//             callback(exception);
//         }
//     });
// }
// // collections of promises
// requestType("ping", () => "pong");

// function availableNeighbors(nest) {
//     let requests = nest.neighbors.map(neighbor => {
//         return request(nest, neighbor, "ping")
//             .then(() => true, () => false);
//     });
//     return Promise.all(requests).then(result => {
//         return nest.neighbors.filter((_, i) => result[i]);
//     });
// }

// // Flooding
// import {
//     everywhere
// } from "./crow-tech";

// everywhere(nest => {
//     nest.state.gossip = [];
// });

// function sendGossip(nest, message, exceptFor = null) {
//     nest.state.gossip.push(message);
//     for (let neighbor of nest.neighbors) {
//         if (neighbor == exceptFor) continue;
//         request(nest, neighbor, "gossip", message);
//     }
// }

// requestType("gossip", (nest, message, source) => {
//     if (nest.state.gossip.includes(message)) return;
//     console.log(`${nest.name} received gossip '${message}' from ${source}`);
//     sendGossip(nest, message, source);
// });

// // Message routing
// requestType("connections", (nest, {
//         name,
//         neighbors
//     },
//     source) => {
//     let connections = nest.state.connections;
//     if (JSON.stringify(connections.get(name)) ==
//         JSON.stringify(neighbors)) return;
//     connections.set(name, neighbors);
//     broadcastConnections(nest, name, source);
// });

// function broadcastConnections(nest, name, exceptFor = null) {
//     for (let neighbor of nest.neighbors) {
//         if (neighbor == exceptFor) continue;
//         request(nest, neighbor, "connections", {
//             name,
//             neighbors: nest.state.connections.get(name)
//         });
//     }
// }
// everywhere(nest => {
//     nest.state.connections = new Map;
//     nest.state.connections.set(nest.name, nest.neighbors);
//     broadcastConnections(nest, nest.name);
// });

// ASYNC functions
// async function findInStorage(nest, name) {
//     let local = await storage(nest, name);
//     if (local != null) return local;
//     let sources = network(nest).filter(n => n != nest.name);
//     while (sources.length > 0) {
//         let source = sources[Math.floor(Math.random() * sources.length)];
//         sources = sources.filter(n => n != source);
//         try {
//             let found = await routeRequest(nest, source, "storage",
//                 name);
//             if (found != null) return found;
//         } catch (_) {}
//     }
//     throw new Error("Not found");
// }

// Generators
function* powers(n) {
    for (let current = n; ; current *= n) {
        yield current;
    }
}
for (let power of powers(2)) {
    if (power > 510) break;
    console.log(power);
}