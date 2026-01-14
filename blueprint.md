
# Lotto Number Generator

## Overview

This project creates a web-based Lotto Number Generator. The application will generate a set of unique random numbers, simulating a lottery draw, and display them in a visually appealing way.

## Features

*   **Number Generation:** Generates a standard set of 6 unique lottery numbers from a pool (e.g., 1-45).
*   **Visual Display:** Displays the generated numbers as styled "lottery balls."
*   **User Interaction:** A simple "Generate" button to trigger the number draw.
*   **Modern Design:**
    *   A clean, responsive layout.
    *   Engaging animations for the number reveal.
    *   A polished and intuitive user interface.
*   **Accessibility:**
    *   Proper semantic HTML.
    *   ARIA attributes for screen reader support.

## Current Plan

1.  **HTML Structure (`index.html`):**
    *   Update the page title to "Lotto Number Generator".
    *   Create a main container for the application.
    *   Add a header with the main title.
    *   Create a container to display the generated lottery numbers.
    *   Add a button to initiate the number generation.

2.  **Styling (`style.css`):**
    *   Design a central layout for the app.
    *   Style the lottery number "balls" with distinct colors and typography.
    *   Style the "Generate" button with hover and active states.
    *   Add a subtle animation for the reveal of the numbers.

3.  **Logic (`main.js`):**
    *   Add an event listener to the "Generate" button.
    *   Implement a function to generate an array of 6 unique random numbers between 1 and 45.
    *   Create a function to dynamically create and display the number balls in the HTML.
    *   Ensure that clicking the button clears the old numbers and generates a new set.
