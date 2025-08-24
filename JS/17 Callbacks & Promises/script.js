// Synchronous nature of JS (this will Execute in sequence)
// console.log("Fahad is a hacker");
// console.log("Mani is a hacker");

// Asynchronous nature of JS 
// console.log("Fahad is a hacker");    // this will done first
// setTimeout(() => {
//     console.log("2 sec done")            // this will run at the end because of Asynchronous nature of JS
// }, 3000);
// console.log("Mani is a hacker");     // this will run second

let Fadi = (src, val) => {
    console.log(val + " called " + src);
    alert("Hey you called " + src);
}

let LoadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback(src, "Fadi");
    document.head.append(sc);
}

LoadScript("temp.js", Fadi);