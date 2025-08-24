// let a = Number;
// a = Math.random();
// console.log(a);



// Method 1

// let r = Math.random();
// console.log(r);

// let n1 = Number(prompt("Enter a number: "));
// let n2 = Number(prompt("Enter another number: "));

// console.log("n1 =", n1);
// console.log("n2 =", n2);


// if (r > 0.1) {
//     function sum(a, b) {
//         console.log("Sum:", a + b);
//     }
//     function sub(a, b) {
//         console.log("Subtraction:", a - b);
//     }
//     function mul(a, b) {
//         console.log("Multiplication:", a * b);
//     }
//     function div(a, b) {
//         console.log("Division:", a / b);
//     }

//     sum(n1, n2);
//     sub(n1, n2);
//     mul(n1, n2);
//     div(n1, n2);
// } else {
//     function sum(a, b) {
//         console.log("Sum:", a - b);
//     }
//     function sub(a, b) {
//         console.log("Subtraction:", a / b);
//     }
//     function mul(a, b) {
//         console.log("Multiplication:", a + b);
//     }
//     function div(a, b) {
//         console.log("Division (Power):", a ** b);
//     }

//     sum(n1, n2);
//     sub(n1, n2);
//     mul(n1, n2);
//     div(n1, n2);
// }



// Method 2

let r = Math.random();
console.log(r);

let a = Number(prompt("Enter 1st number"));
let c = prompt("Enter an operation");
let b = Number(prompt("Enter 2nd number"));

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (r > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}