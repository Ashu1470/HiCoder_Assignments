// 3. What is a Mutable and Unmutable object? Write an example with a real use case scenario.


//immutable

let a = 5;
let b = a;

b = b + 1;

console.log("b = "+b)
console.log("a = "+a)

//Mutable

let obj1 = {
    name:"SAM",
    roll:69
};

let obj2 = obj1;
obj2.name = "DAM"

console.log(obj2)
console.log(obj1)