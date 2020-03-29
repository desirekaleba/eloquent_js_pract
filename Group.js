class Group {
    constructor() {
        this.props = [];
    }

    add (value) {
        if (!this.has(value)) {
            this.props.push(value);
        }
    }
    
    delete(value) {
        this.props = this.props.filter(val => val !== value);
    }

    has(value) {
        return this.props.includes(value);
    }

    static createFromArray(arr) {
        let group = new Group();
        for (let value of arr) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.props.length)
            return {
                done: true
            };
        else {
            let result = {
                done: false,
                value: this.group.props[this.position]
            };
            this.position++;
            return result;
        }
    }
}
let numbers = Group.createFromArray([1, 2, 3]);
numbers.add(23);

let numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
