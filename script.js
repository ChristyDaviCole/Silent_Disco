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

setInterval(function() {

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

let color = `rgb(${red},${green},${blue})`;

panel1.style.backgroundColor = color;
panel2.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

}, 1500);