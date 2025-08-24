/*
Note:-
Settled -> means resolve or rejected

Resolve -> means settled successfully
Rejected -> means not settled
*/


// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {                             // this is only simulation of getting data from server
//             resolve(200);
//         }, 3000);
//     })
// }
async function getData() {                                    // we are using fetch API here
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = x.json();
    // let data = (await x).text;
    console.log(data);
    return 200;
}


// data.then(()=>{
//     console.log("Process data");              // this is way to wait for promise settled but we will use async await approach
//     console.log("Process data done");
// })


async function main() {
    console.log("Initiating");
    console.log("Do something else");            // this is another way for waiting settled promise
    console.log("Load data");
    let data = await getData();
    console.log(data);
}
main();