let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
}

function checkGuess() {
    const userGuess = Number(document.getElementById("guess").value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = `Selamat! Anda menebak angka ${randomNumber} dengan ${attempts} percobaan.`;
    } else if (userGuess < randomNumber) {
        document.getElementById("message").textContent = "Terlalu rendah! Coba lagi.";
    } else {
        document.getElementById("message").textContent = "Terlalu tinggi! Coba lagi.";
    }
}

function restartGame() {
    startGame();
    document.getElementById("guess").value = "";
}

// Mulai game saat halaman dimuat
window.onload = startGame;
