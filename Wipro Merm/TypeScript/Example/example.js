"use strict";
let userMap = new Map();
userMap.set(101, "Niti");
userMap.set(102, "Nitin");
userMap.set(103, "Jatin");
console.log(userMap.get(101));
let items = ["laptop", "mouse", "keyboard"];
for (let item of items) {
    console.log("The value ", item);
}
let userData = {
    id: 101,
    name: "Niti",
    salary: 54545,
};
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof!`);
    }
}
let obj = new Dog("dfdf");
obj.sound();
