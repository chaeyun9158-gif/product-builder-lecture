document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const fortuneButton = document.getElementById('fortune-button');
    const fortuneDisplay = document.getElementById('fortune-display');

    const fortunes = [
        "You will have a great day!",
        "Good news is coming your way.",
        "You will meet someone special soon.",
        "A surprising opportunity will arise.",
        "Your hard work will pay off.",
        "You will find a solution to a problem.",
        "A dream you have will come true.",
        "You will receive a gift.",
        "You will travel to a new place.",
        "You will learn something new and exciting."
    ];

    fortuneButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name === "") {
            fortuneDisplay.textContent = "Please enter your name.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];
        fortuneDisplay.textContent = `${name}, your fortune is: ${randomFortune}`;
    });
});
