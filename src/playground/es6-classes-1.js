
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // return this.major -> return actual major value if exist
        return !!this.major;    // returns boolean value of either true or false
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Khanh Tran', 23, 'Computer Science');
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const clone = new Traveler('Khanh Tran', 23, 'VA');
console.log(clone);
console.log(clone.getGreeting());

const other = new Traveler(undefined,undefined,'nowhere');
console.log(other);
console.log(other.getGreeting());