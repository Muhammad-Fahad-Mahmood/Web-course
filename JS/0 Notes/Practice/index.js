// Chapter 1

// let obj = {
//     s_name: "Fahad",
//     phone: "0324--",
//     marks: 100
// }

// console.log(obj);

// let str = "Fahad";
// console.log(str);
// console.log(typeof str);

// str = 2;

// console.log(typeof str);

// const obj2 = {
//     n1: 1
// }
// console.log(obj2);

// obj2.n2 = 2;
// console.log(obj2);



// Chapter 2

// let age = 18;
// if (age >= 10 && age <= 20) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// let num = 1;
// // let num = 2;
// // let num = 5;
// switch (num) {
//     case 1:
//         console.log("Number is 1");
//         break;
//     case 2:
//         console.log("Number is 2");
//         break;
//     default:
//         console.log("Neither 1 nor 2");
//         break;
// }

// let num2 = 2;
// if ((num2 % 2 == 0) && (num2 % 3 == 0)) {
//     console.log("Yes divisble by both 2 and 3");
// }
// else {
//     console.log("Not divisble by both 2 and 3");
// }

// let num3 = 2;
// if ((num3 % 2 == 0) || (num3 % 3 == 0)) {
//     console.log("Yes divisble by either 2 or 3");
// }
// else {
//     console.log("Not divisble by 2 or 3");
// }

// let d_age = 18;
// (d_age >= 18) ? console.log("Yes can drive") : console.log("No cannot drive");



// Chapter 3

// let object = {
//     "Fahad": 99,
//     "Huri": 99,
//     "Mani": 99,
//     "Jamal": 99
// }
// let val = Object.values(object);
// // console.log(val);
// for (let i = 0; i < val.length; i++) {
//     console.log(val[i]);
// }
// for (const key in object) {
//     // console.log(key, ": ", object[key]);

//     const val = object[key];
//     console.log(key, ": ", val);
// }

// let r_num = Math.random();
// console.log(r_num);
// while (r_num >= 0.5) {
//     console.log("Try again");
//     r_num = Math.random();
//     console.log(r_num);
//     if (r_num <= 0.5) {
//         console.log("Successfull");
//     }
// }

// let a1 = 1;
// let a2 = 2;
// let a3 = 3;
// let a4 = 4;
// let a5 = 5;
// let length = 5;
// function myFunc(a, b, c, d, e, length) {
//     return (a + b + c + d + e) / length;
// }
// let results = myFunc(a1, a2, a3, a4, a5, length);
// console.log("Mean is: ", results);



// Chapter 4

// console.log("Fah\"");
// console.log("Fah\"".length);

// let My_name = "Fahad is a good boy";
// console.log(My_name.startsWith("Fa"));
// console.log(My_name.endsWith("oy"));
// console.log(My_name.endsWith("good"));
// console.log(My_name.includes("good"));

// let str_rs = "Give me RS 1000";
// const words = str_rs.split(" ");
// console.log(words);
// const Amount = words[3];
// console.log(Amount);

// let str_5 = "Fahad";
// console.log(str_5);
// str_5[3] = "A";
// console.log(str_5);




// Chapter 5

// let arr = [];
// let temp_val;
// for (let i = 0; i < 4; i++) {
//     temp_val = prompt("Enter number for an array");
//     arr[i] = temp_val;
// }
// console.log(arr);

// let temp_val;
// let arr = [];
// let idx = 0;
// do {
//     temp_val = prompt("Enter a number");
//     if (temp_val != 0) {
//         arr[idx] = temp_val;
//         idx++;
//     }
// } while (temp_val != 0);
// console.log(arr, arr.length);

// let arr = [1, 10, 2, 4, 50, 7, 20];
// let divisbleByTen = (e) => {
//     if (e % 10 == 0) {
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(divisbleByTen));

// let arr = [1, 10, 2, 4, 50, 7, 20];
// let Newarr = arr.map((e) => {
//     return e ** 2;
// })
// console.log(Newarr);



// Chapter 6

// let age = prompt("Enter your age");
// if (age >= 18) {
//     alert("You can drive");
// }
// else {
//     alert("You cannot drive");
// }

// let age = prompt("Enter your age");
// let is_true = confirm("You want to prompt again");
// if (is_true == true) {
//     age = prompt("Enter your age");
// }
// if (age >= 18) {
//     alert("You can drive");
// }
// else {
//     alert("You cannot drive");
// }

// let age = prompt("Enter your age");
// let is_true = confirm("You want to prompt again");
// if (is_true == true) {
//     age = prompt("Enter your age");
// }
// if (age >= 18) {
//     alert("You can drive");
// }
// else if (age < 0) {
//     error("You entered invalid");
// }
// else {
//     alert("You cannot drive");
// }

// let color = prompt("Enter any color in small letters");
// document.body.style.backgroundColor = color;



// Chapter 7

// let element = document.getElementsByClassName("nav");
// element[0].firstElementChild.style.backgroundColor = "red";

// let element = document.getElementsByClassName("nav");
// element[0].firstElementChild.style.backgroundColor = "green";
// element[0].lastElementChild.style.backgroundColor = "green";

// let val = document.getElementsByTagName("li");
// for (const e of val) {
//     e.style.backgroundColor = "green";
// }



// Chapter 8

// document.addEventListener("keydown", (e) => {
//     alert("You entered this key: " + e.key);
// })

// function addAddress(str, Title) {
//     let html = `<a href="${str}">${Title}</a>`;
//     document.querySelector(".cards").innerHTML += html;
// }
// let str1;
// let str2;
// document.getElementById("btn").addEventListener("click", () => {
//     alert("Clicked");
//     str1 = prompt("Enter address of your website");
//     str2 = prompt("Enter title for your website");
//     addAddress(str1, str2);
// })

// setInterval(() => {
//     document.querySelector(".button").classList.toggle("bulb");
// }, 2000);



// chapter 9

// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let sc = document.createElement("script");
//         sc.src = "temp.js";
//         sc.onload = resolve(sc.src);
//         document.body.append(sc);
//     }, 5000);
// })
// prom1.then((a) => {
//     alert("This script is loaded: " + a);
//     console.log("This script is loaded: ", a);
// })

// async function getPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let sc = document.createElement("script");
//             sc.src = "temp.js";
//             sc.onload = resolve(sc.src);
//             document.body.append(sc);
//         }, 5000);
//     })
// }
// async function main() {
//     let prom1 = getPromise();
//     console.log(prom1);
//     prom1.then((a) => {
//         alert("This script is loaded: " + a);
//         console.log("This script is loaded: ", a);
//     })
// }
// main();

// async function getPromisevalue() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(404);
//         }, 3000);
//     })
// }
// async function run() {
//     let data;
//     try {
//         data = await getPromisevalue();
//         console.log(data);
//     } catch (error) {
//         data = error;
//     }
//     alert(data);
// }
// run();

