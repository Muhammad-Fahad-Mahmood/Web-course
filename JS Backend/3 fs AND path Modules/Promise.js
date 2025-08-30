import fs from "fs/promises";             // Used for type: Module

// let a = await fs.readFile("FadiFadi.txt");         // As this file in module type so we directly used await
// console.log(a.toString());

// let b = await fs.writeFile("FadiFadi.txt", "\n\n\n\n\nHello boy");       // For write file and it rewrite data again

let c = await fs.appendFile("FadiFadi.txt", "\n\nFadi Bhai");