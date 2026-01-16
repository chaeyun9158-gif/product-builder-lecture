document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const languageSwitcher = document.getElementById('language-switcher');
    const cameraStream = document.getElementById('camera-stream');
    const captureButton = document.getElementById('capture-button');
    const capturedImage = document.getElementById('captured-image');

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
            document.title = i18next.t('physiognomyTitle');
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
            document.title = i18next.t('physiognomyTitle');
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

    // Camera functionality
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraStream.srcObject = stream;
        } catch (err) {
            console.error('Error accessing the camera:', err);
        }
    }

    captureButton.addEventListener('click', () => {
        const context = capturedImage.getContext('2d');
        capturedImage.width = cameraStream.videoWidth;
        capturedImage.height = cameraStream.videoHeight;
        context.drawImage(cameraStream, 0, 0, capturedImage.width, capturedImage.height);
        capturedImage.style.display = 'block';
        cameraStream.style.display = 'none';
    });

    startCamera();
});
