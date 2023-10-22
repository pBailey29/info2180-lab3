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

// Exercise 2
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X"; // Initializes the current player
    let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Initializes the game state

    // Function to check if the game has a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                status.classList.add("you-won");
                status.textContent = `Player ${gameBoard[a]} wins!`;
                return true;
            }
        }

        if (gameBoard.every((square) => square !== "")) {
            status.textContent = "It's a draw!";
            return true;
        }

        return false;
    }

    // Function handling square clicks
    function handleSquareClick(event) {
        const square = event.target;

        // Checks if the square is empty
        const index = Array.from(squares).indexOf(square);
        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                // Switches to the other player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.classList.remove("you-won");
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    // Add click event listener to each square
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
    });

    // Add a click event listener to the New Game button
    newGameButton.addEventListener("click", function () {
        // Resets the game 
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";

        // Clear X and O from the squares
        squares.forEach((square) => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });
});

// Exercise 3
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    function checkWinner() {
        // No changes to this function
    }

    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);

        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.classList.remove("you-won");
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    // Handles square hover
    function handleSquareHover(event) {
        const square = event.target;

        // Applys the "hover" class on mouseover
        square.classList.add("hover");

        // Removes the "hover" class on mouseout
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    }

    // Add click event listener to each square
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);

        // Add mouseover event listener to handle square hover
        square.addEventListener("mouseover", handleSquareHover);
    });

    newGameButton.addEventListener("click", function () {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";
        squares.forEach((square) => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });
});

// Exercise 4
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                status.classList.add("you-won");
                status.textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
                return true;
            }
        }

        if (gameBoard.every((square) => square !== "")) {
            status.textContent = "It's a draw!";
            return true;
        }

        return false;
    }

    function handleSquareClick(event) {
        const square = event.target;
        const index = Array.from(squares).indexOf(square);

        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.classList.remove("you-won");
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    function handleSquareHover(event) {
        const square = event.target;
        square.classList.add("hover");
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    }

    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
        square.addEventListener("mouseover", handleSquareHover);
    });

    newGameButton.addEventListener("click", function () {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";
        squares.forEach((square) => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });
});

// Exercise 5
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    function checkWinner() {
        // No changes to this function
    }

    function handleSquareClick(event) {
        // No changes to this function
    }

    function handleSquareHover(event) {
        // No changes to this function
    }

    // Resets the game
    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";
        squares.forEach((square) => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    }

    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
        square.addEventListener("mouseover", handleSquareHover);
    });

    // Add click event listener to the New Game button to reset the game
    newGameButton.addEventListener("click", resetGame);
});

// Exercise 6
function handleSquareClick(event) {
    const square = event.target;
    const index = Array.from(squares).indexOf(square);

    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.classList.remove("you-won");
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}