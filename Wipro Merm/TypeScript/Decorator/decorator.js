"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator is a function that attaches the meta data or behaviour to a  class , mehtod , property or paramerter.
// It is an extra information or extra behaviour added without changing the original code.
//@decoratorname  decorator for which we are creating need to define in target
//class MyClass {}
function Log(target) {
    console.log("This class is created for general purpose which may deprecated after a week ");
}
function Log1(target) {
    console.log("created ");
}
// Log is a decorator function and target is the class & decorator runs at definition time , not when object is created
let Product = class Product {
    constructor() {
        this.name = "Laptop";
    }
};
Product = __decorate([
    Log,
    Log1
], Product);
function Logger(constructor) {
    console.log("Logging", constructor.name);
}
let User = class User {
    constructor() {
        this.name = "Niti";
    }
};
User = __decorate([
    Logger
], User);
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value; // Store the original method
    // Replace the original method with a new function
    descriptor.value = function (...args) {
        console.log(`Method "${String(propertyKey)}" called with arguments:`, args);
        const result = originalMethod.apply(this, args); // Call the original method with the correct 'this' context
        console.log(`Method "${String(propertyKey)}" returned:`, result);
        return result;
    };
    // Return the new descriptor to apply the changes
    return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    logMethod
], Calculator.prototype, "add", null);
const calc = new Calculator();
calc.add(5, 3);
// Output:
// Method "add" called with arguments: [ 5, 3 ]
// Method "add" returned: 8
