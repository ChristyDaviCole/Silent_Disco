/*
PHASE I - The Automated Disco
Establish the visual environment and implement automatic lighting.

Use setInterval to change the background colors of the Panels to random RGB values every 1 to 2 seconds.
Ensure the colors are generated randomly using Math.floor(Math.random() * 255).
Hints
The string for setting a background-color is formatted as "rgb(xxx,yyy,zzz)".
Remember that setInterval takes a function and a delay in milliseconds.

Journal Prompt
Describe how you implemented the timer and how you generated random colors.
Why is it important to use a consistent interval for the lighting?
*/

let panel1 = document.getElementById("panel1");
let panel2 = document.getElementById("panel2");
let danceFloor = document.getElementById("dance-floor");
let dancer = document.getElementById("dancer");

setInterval(function() {

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

let color = `rgb(${red},${green},${blue})`;

panel1.style.backgroundColor = color;
panel2.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

}, 1500);

/*
PHASE II - Interactive Floor
Implement user-triggered state changes and manage event propagation.

Implement a click listener on the Dance Floor that changes its background color 
to a random RGB value when clicked.
When the Dancer is clicked, it should trigger a specific action (such as changing the dancer’s emoji or color) but it must not trigger the Dance Floor’s color change.
Hints
Use event.stopPropagation() to prevent the click event on the Dancer from “bubbling up” to the Dance Floor.

Journal Prompt
Explain the concept of “event bubbling.” How did stopPropagation() allow you to separate the Dancer’s interaction from the Floor’s interaction?
*/

danceFloor.addEventListener("click", function() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;

    danceFloor.style.backgroundColor = color;

});

dancer.addEventListener("click", function(event) {

    event.stopPropagation();

    dancer.textContent = "💃";

});

/*
PHASE III - The Dance Controller


*/