// Exercise 1
// Waits on DOM content to be loaded before executing javaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get all the square elements in the game board
    const squares = document.querySelectorAll("#board div");

    // Loop through each square and add the 'square' class to style it
    squares.forEach((square) => {
        square.classList.add("square");
    });
});

