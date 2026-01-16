document.addEventListener('DOMContentLoaded', () => {
    const fortuneText = document.getElementById('fortune-text');
    const crackCookieButton = document.getElementById('crack-cookie-button');
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
            document.title = i18next.t('fortuneTitle');
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
            document.title = i18next.t('fortuneTitle');
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

    const fortunes = [
        "A beautiful, smart, and loving person will be coming into your life.",
        "A dubious friend may be an enemy in camouflage.",
        "A faithful friend is a strong defense.",
        "A feather in the hand is better than a bird in the air.",
        "A fresh start will put you on your way."
    ];

    crackCookieButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        fortuneText.textContent = fortunes[randomIndex];
    });
});
