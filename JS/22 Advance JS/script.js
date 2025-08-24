async function temp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("OK");
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

// let a = await temp();      // this will not run because await should be in async function so we use IIFE...

(async function main() {           // In this we dont need to call function, it will auto call and execute...
    // let a = await temp();
    // console.log(a);


    // Destructuring of an array
    // let [x, y, ...z] = [1, 5, 3, 4, 6, 9];   // x -> 1, y -> 5, and remaining -> z...
    // console.log(x, y, z);

    // Destructuring of an object
    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    // let { a, b } = obj;
    // console.log(a, b);

    let arr = [1, 2, 4];
    console.log(sum(arr[0], arr[1], arr[2]));          // both are same
    console.log(sum(...arr));                          // both are same

    
})()

