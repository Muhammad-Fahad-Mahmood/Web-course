let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

let obj = {
    name: "Fahad",
    id: 1234
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}
for (const key in obj) {
    console.log(key);
}


let str = "Fahad";

for (const c of str) {
    console.log(c);
}

{
let i = 0;
while (i < 2) {
    console.log(i);
    i++;
}
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i<0);