document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const numbersDisplay = document.getElementById('numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const languageSwitcher = document.getElementById('language-switcher');

    // i18next initialization
    i18next
        .use(i18nextHttpBackend)
        .init({
            lng: localStorage.getItem('language') || 'en',
            fallbackLng: 'en',
            backend: {
                loadPath: 'locales/{{lng}}/translation.json'
            }
        }, (err, t) => {
            if (err) return console.error(err);
            updateContent();
            document.title = i18next.t('lottoTitle');
        });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });
    }

    languageSwitcher.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('language', lang);
        i18next.changeLanguage(lang, (err, t) => {
            if (err) return console.error(err);
            updateContent();
            document.title = i18next.t('lottoTitle');
        });
    });

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

            // Assign color based on number range. These classes are defined in style.css
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