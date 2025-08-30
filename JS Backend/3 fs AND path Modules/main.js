const fs = require("fs");                         // This is used for common js

console.log("Starting");
// fs.writeFileSync("Fadi.txt", "My name is Fahad");         // But this is synchronous method so we use writeFile..

fs.writeFile("FadiFadi.txt", "Fahad is my name", () => {       // It takes a callback function..
    console.log("done");
    fs.readFile("FadiFadi.txt", (e, d) => {
        console.log(e, d.toString());
    })
});
// But this method is create issue same as callback hell...

// fs.appendFile("Fadi.txt", "Fadi bhai", (e, d) => {              // Used to enter data in a file..
//     console.log(d);
// })

console.log("Ending");
