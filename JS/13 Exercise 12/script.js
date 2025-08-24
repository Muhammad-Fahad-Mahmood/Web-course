let rand = Math.random();

let e = document.querySelectorAll(".box");
console.log(rand);

if (rand <= 0.2) {
    e.forEach(element => {
        element.style.backgroundColor = "red";
        element.style.color = "white";
    });
}
else if (rand > 0.2 && rand <= 0.4) {
    e.forEach(element => {
        element.style.backgroundColor = "yellow";
        element.style.color = "green";
    });
}
else if (rand > 0.4 && rand <= 0.6) {
    e.forEach(element => {
        element.style.backgroundColor = "pink";
        element.style.color = "black";
    });
}
else if (rand > 0.6 && rand <= 0.8) {
    e.forEach(element => {
        element.style.backgroundColor = "green";
        element.style.color = "white";
    });
}
else if (rand > 0.8) {
    e.forEach(element => {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    });
}