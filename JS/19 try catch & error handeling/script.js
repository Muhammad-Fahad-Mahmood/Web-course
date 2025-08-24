let a = prompt("Enter first number");
let b = prompt("Enter second number");

// let sum = a + b;   // it not return true answers because a, b returns string...
let sum = parseInt(a) + parseInt(b);   // So this is the solution...
// But here's an issue if we give a string in inputs then its create problem.. sooo.. we will handle this error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("You entered wrong inputs");
}
// console.log("The sum is: ", sum);

// but this is the error you throw by own but if error occur by JS then we will handle this another way...

// try {
//     console.log("The sum is: ", sum * x);        // here x is not defined so error...
// } catch (error) {
//     console.log("Error occured");
//     alert(error.name);
//     alert(error.message);
//     alert(error.stack);
// }

function main() {
    let x = 1;
    try {
        console.log("The sum is: ", sum * x);        // here x is not defined so error...
        return true;
    } catch (error) {
        console.log("Error occured");
        alert(error.name);
        alert(error.message);
        alert(error.stack);
        return false;
    }
    finally {
        console.log("Finally part is run");          // we can see 2 return statements in try and catch but even after return statements the finally part will execute
    }
}
main();