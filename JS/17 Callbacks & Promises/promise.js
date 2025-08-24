let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand <= 0.5) {
        setTimeout(() => {
            reject("Your request is rjected");
        }, 3000);
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Your request is resolved");
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand <= 0.5) {
        setTimeout(() => {
            reject("Your request is rjected 2");
        }, 2000);
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Your request is resolved 2");
        }, 2000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand <= 0.5) {
        setTimeout(() => {
            reject("Your request is rjected 3");
        }, 1000);
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done 3");
            resolve("Your request is resolved 3");
        }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((b) => {               // this will used if one promise only
//     console.log(b);
// })

// let p3 = Promise.all([prom1, prom2, prom3]);
// p3.then((a) => {
//     console.log(a);
// }).catch((b) => {               // this will used for multiple promises at same time & return array only if all resolved
//     console.log(b);
// })

// let p3 = Promise.allSettled([prom1, prom2, prom3]);
// p3.then((a) => {
//     console.log(a);
// }).catch((b) => {               // this will used for multiple promises at same time & return array even if any promise is rejected
//     console.log(b);
// })

// let p3 = Promise.race([prom1, prom2, prom3]);
// p3.then((a) => {
//     console.log(a);
// }).catch((b) => {               // this will used for multiple promises at same time & return array even if any promise is rejected
//     console.log(b);
// })

// let p3 = Promise.any([prom1, prom2, prom3]);
// p3.then((a) => {
//     console.log(a);
// }).catch((b) => {               // this will used for multiple promises at same time & return array even if any promise is rejected
//     console.log(b);
// })