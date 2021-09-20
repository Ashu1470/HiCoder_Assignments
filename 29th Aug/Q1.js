// Explain what a callback function is and provide a simple example.


//A callback function can be defined as a function passed into another function as a parameter. 
// Don't relate the callback with the keyword, as the callback is just a name of an argument that is passed to a function.


// example: -

let sum = (a,b,callBack) => {
    callBack(a+b);
}

let display = (a) => {
    console.log(a)
}

sum(3,2,display)
