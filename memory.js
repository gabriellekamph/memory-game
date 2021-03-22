// Function to flip card on click

const cards = document.querySelectorAll(".game-card");

function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach(card => card.addEventListener("click", flipCard));

