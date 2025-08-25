
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

