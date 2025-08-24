// Adjective:
// Crazy
// Amazing
// Fire

// Shop Name:
// Engine
// Foods
// Garments

// Another word:
// Bros
// Limited
// Hub

let r;
let a;
let b;
let c;

r = Math.random()
if (r < 0.33) {
    a = "Crazy";
}
else if (r >= 0.33 && r <= 0.66) {
    a = "Amazing";
}
else {
    a = "Fire";
}

r = Math.random()
if (r < 0.33) {
    b = "Engine";
}
else if (r >= 0.33 && r <= 0.66) {
    b = "Foods";
}
else {
    b = "Garments";
}

r = Math.random()
if (r < 0.33) {
    c = "Bros";
}
else if (r >= 0.33 && r <= 0.66) {
    c = "Limited";
}
else {
    c = "Hub";
}

console.log(a);
console.log(b);
console.log(c);

let final_name = a + " " + b + " " + c;
console.log(final_name);