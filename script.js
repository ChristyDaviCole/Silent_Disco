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

let panelTimer = setInterval(function() {

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
Implement real-time control of the dancer via the keyboard.

Use window.addEventListener("keydown", ...) to capture keyboard input.
Map the Arrow Keys (Up, Down, Left, Right) to change the Dancer’s emoji to at least four different “dance moves.”
Implement a shortcut key (e.g., the "r" key) that resets the Dance Floor’s color to its original state and stops the Panel timers.
Hints
Refer to the MDN KeyboardEvent.key documentation for the correct key strings (e.g., "ArrowUp").
To stop a timer, you will need to store the ID returned by setInterval and pass it to clearInterval.

Journal Prompt
Why is it more effective to use a global window listener for keyboard shortcuts rather than attaching the listener to a specific HTML element? What are some challenges when handling “held down” keys?
*/

window.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {

        dancer.textContent = "🕺";
    }

    else if (event.key === "ArrowDown") {

        dancer.textContent = "💃";
        
    }

    else if (event.key === "ArrowLeft") {

        dancer.textContent = "🕺‍♂️";
    }

    else if (event.key === "ArrowRight") {

        dancer.textContent = "💃🏻";

    }

    else if (event.key === "r") {

        danceFloor.style.background = "orange";

        this.clearInterval(panelTimer);

    }

});