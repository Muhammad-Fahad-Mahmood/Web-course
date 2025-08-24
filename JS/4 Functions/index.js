function myfunc(n) {
    console.log("Hey " + n + ", How are you?");
}

myfunc("Fahad");
myfunc("Mani");

function sum(a, b, d = 10) {
    let c = a + b + d;
    // console.log(c);

    return c;
}

s = sum(1, 2);
console.log("Sum is ", s);


// Function in a variable (Arrow function)

const func1 = (a) => {
    console.log("Number is ", a);
}
func1(100);