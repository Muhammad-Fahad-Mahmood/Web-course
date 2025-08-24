
// let boxes = document.getElementsByClassName("box");  // it returns HTML collection (An Array type)....
// boxes[4].style.backgroundColor = "blue";

// document.getElementById("redBox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "yellow";  // it returns first .box class element..

// let box = document.querySelectorAll(".box");  // it also return a node list (An Array type)...
// box.forEach(e => {
//     e.style.backgroundColor = "aqua";
// });

let e = document.getElementsByTagName("div"); // it will return html collection of all div's....
console.log(e);
// matches
console.log(e[0].matches(".container"));     // True
console.log(e[2].matches(".container"));     // False
console.log(e[3].matches("#redBox"));     // True

// closest
console.log(e[3].closest("#redBox"));     // True   // it will check closest (Firstly own then parent, then grand parent and so on..)
console.log(e[4].closest("#redBox"));     // False
console.log(e[4].closest(".container"));     // Now True

// contains
console.log(document.querySelector(".container").contains(e[2]));  // Yes true
console.log(document.querySelector(".container").contains(document.querySelector("body")));  // Now false