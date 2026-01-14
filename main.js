
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const numbersDisplay = document.getElementById('numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme switching
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
    }

    function generateLottoNumbers() {
        // Clear previous numbers
        numbersDisplay.innerHTML = '';

        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball');
            ball.textContent = number;

            // Assign color based on number range
            if (number <= 10) {
                ball.classList.add('color-1'); // Yellow
            } else if (number <= 20) {
                ball.classList.add('color-2'); // Blue
            } else if (number <= 30) {
                ball.classList.add('color-3'); // Red
            } else if (number <= 40) {
                ball.classList.add('color-4'); // Gray
            } else {
                ball.classList.add('color-5'); // Green
            }
            
            // Stagger the animation
            ball.style.animationDelay = `${index * 0.1}s`;

            numbersDisplay.appendChild(ball);
        });
    }

    generateButton.addEventListener('click', generateLottoNumbers);

    // Generate numbers on initial load
    generateLottoNumbers();
});
