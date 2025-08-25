
// Question 1

// let nameStudent = ["Fadi_Jutt", "Mian_Rehman", "Hurairah_CH", "Jamal", "Arsalan", "Taha_Bhatti", "Sameer_Malik"];

// class House {
//     constructor(SName, HName) {
//         this.SName = SName;
//         this.HName = HName;
//     }

//     getName() {
//         console.log(this.SName + ": " + this.HName);
//     }
// }

// let temp;
// let StudendObjArr = [];

// for (const names of nameStudent) {
//     if (names.length < 6) {
//         temp = names;
//         temp = new House(names, "Gryffindor");
//         StudendObjArr.push(temp);
//     } else if (names.length >= 6 && names.length < 8) {
//         temp = names;
//         temp = new House(names, "HufflePuff");
//         StudendObjArr.push(temp);
//     } else if (names.length >= 8 && names.length < 12) {
//         temp = names;
//         temp = new House(names, "Ravenclaw");
//         StudendObjArr.push(temp);
//     } else if (names.length >= 12) {
//         temp = names;
//         temp = new House(names, "Slytherin");
//         StudendObjArr.push(temp);
//     }
// }

// for (const element of StudendObjArr) {
//     element.getName();
// }



// Question 2

// let Arr = [1, 2, 3, 3, 5, 8, 12, 12, 14];
// console.log(Arr);

// function DoubleTrouble(Arr) {
//     for (let index = 0; index < Arr.length; index++) {
//         if (Arr[index] == Arr[index + 1]) {
//             Arr[index] = Arr[index] * 2;
//             index++;
//         }
//         else {
//             Arr[index] = Arr[index] * 2;
//         }
//     }
// }

// DoubleTrouble(Arr);
// console.log(Arr);



// Question 3

// let Str1 = "Hey I am Fahad";
// let Str2 = "";
// for (let index = Str1.length - 1; index >= 0; index--) {
//     Str2 = Str2 + Str1[index];
// }
// console.log(Str2);



// Question 4

// function passWord(str) {
//     let code;
//     let flag1 = false;
//     let flag2 = false;
//     let flag3 = false;

//     for (let index = 0; index < str.length; index++) {
//         code = str.charCodeAt(index);
//         if (code >= 65 && code <= 90) {
//             flag1 = true;
//         }
//     }
//     for (let index = 0; index < str.length; index++) {
//         code = str.charCodeAt(index);
//         if (code >= 97 && code <= 122) {
//             flag2 = true;
//         }
//     }
//     for (const ch of str) {
//         if (ch >= '0' && ch <= '9') {
//             flag3 = true;
//         }
//     }

//     if (flag1 == true && flag2 == true && flag3 == true) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let Str = "Abc12";
// let Str2 = "Abc";
// let isTrue = true;
// isTrue = passWord(Str2);
// if (isTrue == true) {
//     console.log("OK");
// } else {
//     console.log("Invalid");
// }



// Question 5

// function SumNum(Arr) {
//     let result = 0;
//     for (let index = 0; index < Arr.length; index++) {
//         if (Arr[index] < 0) {
//             return result;
//         }
//         else {
//             result += Arr[index];
//         }
//     }
//     return result;
// }

// let Arr = [1, 2, 3, 4, -5];
// let result = SumNum(Arr);
// console.log(result);



// Question 6

// let vowelsL = ["a", "e", "i", "o", "u"];
// let vowelsU = ["A", "E", "I", "O", "U"];
// function CountVowels(str) {
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
//         for (let i = 0; i < vowelsL.length; i++) {
//             if (str[index] == vowelsL[i] || str[index] == vowelsU[i]) {
//                 count++;
//             }
//         }

//     }
//     return count;
// }

// let str = "Fahad";
// let count = CountVowels(str);
// console.log(count);



// Question 7

// In html file...




// Question 8

// async function GetPromises(numbers) {
//     let promises = [];
//     for (let index = 0; index < numbers.length; index++) {
//         let prom = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(numbers[index] * 2);
//             }, 500);
//         })
//         promises.push(prom);
//     }
//     return promises;
// }

// async function main() {
//     let Arr = [1, 2, 3, 4, 5];
//     let promises = await GetPromises(Arr);
//     let result = Promise.all(promises);
//     result.then((result) => {
//         console.log(result);
//     })
// }
// main();




// Question 9

// In html File..




// Question 10

// async function brewCoffee(type) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(type + " coffee is ready");
//         }, 1000);
//     })
// }
// let type = "Frapchino";
// let pro = brewCoffee(type);
// pro.then((a) => {
//     console.log(a);
// })
