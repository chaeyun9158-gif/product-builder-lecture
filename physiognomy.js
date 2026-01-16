document.addEventListener('DOMContentLoaded', () => {
    const featureSelect = document.getElementById('feature-select');
    const getReadingButton = document.getElementById('get-reading-button');
    const readingDisplay = document.getElementById('reading-display');

    const readings = {
        eyes: "Your eyes reveal a deep sense of empathy and observation. You are perceptive and insightful.",
        nose: "Your nose suggests a strong character and a keen sense of intuition. You are determined and practical.",
        mouth: "Your mouth indicates a communicative and expressive personality. You are articulate and enjoy social interactions.",
        ears: "Your ears signify a good listener and a thoughtful individual. You are receptive to new ideas and advice."
    };

    getReadingButton.addEventListener('click', () => {
        const selectedFeature = featureSelect.value;

        if (selectedFeature === "") {
            readingDisplay.textContent = "Please select a feature.";
            return;
        }

        readingDisplay.textContent = readings[selectedFeature];
    });
});
