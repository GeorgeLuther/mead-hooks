class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I'm ${this.name}!`;
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
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        return  this.major ? `${description} year(s) old. Majoring in ${this.major}.` : description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        return this.homeLocation ? `${greeting} I\'m visiting from ${this.homeLocation}.` : `${greeting}`;
    }
}
const me = new Person('Andrew Mead');
const timbo = new Student('Timothy Gerbin', 30, 'Computer Science');
const jace = new Student('Jace Gerbin', 20);
const kim = new Traveler('Kim Selvin', 28, 'Xihuing');

jace.major = 'Botony';

console.log(timbo.getDescription());
console.log(jace.getDescription());
console.log(kim.getGreeting());