let n = prompt("Enter a number");
let idx = 0;
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[idx] = i;
    idx++;
}

let red = (a, b) => {
    return a * b;
}
let fac = arr.reduce(red);
console.log(fac);