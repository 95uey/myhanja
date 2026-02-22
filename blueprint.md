
# Blueprint: Hanja Study App

## Overview

A web-based application for studying basic Hanja (Chinese characters used in Korean). The application will display a list of Hanja characters, allowing users to test their knowledge, track their performance, and reset their progress.

## Style, Design, and Features

### Current Version

*   **UI/UX:**
    *   A clean, grid-based layout to display Hanja cards.
    *   A "Reset" button is prominently displayed at the top of the page.
    *   Each card initially shows only the Hanja character.
    *   Clicking a card reveals the meaning (Tteut) and pronunciation (Eum), along with "O" (Correct) and "X" (Incorrect) buttons.
    *   After the user clicks "O" or "X":
        *   The card's border color changes to green (correct) or red (incorrect).
        *   The details and buttons are hidden again, showing only the Hanja and the colored border.
    *   Clicking the "Reset" button removes all correct/incorrect border colors from all cards.
    *   The application is responsive and usable on both desktop and mobile devices.
*   **Functionality:**
    *   Displays a curated list of 100 basic Hanja characters.
    *   Users can reset the learning state of all cards at once.
    *   Web Components are used to create interactive `<hanja-card>` elements.
*   **Technology:**
    *   HTML5
    *   CSS3
    *   Modern JavaScript (ES Modules, Web Components)

## Current Plan

### Task: Add a Reset Button

1.  **`blueprint.md`:** Update the blueprint to include the reset functionality.
2.  **`index.html`:** Add a `<header>` element containing a `<button id="reset-button">` before the main grid.
3.  **`style.css`:** Add styling for the new header and reset button for a clean and intuitive look.
4.  **`main.js`:**
    *   Get a reference to the reset button.
    *   Add a click event listener to the button.
    *   Inside the listener, query for all `<hanja-card>` elements.
    *   Iterate through each card, access its shadow DOM, and remove the `.correct` and `.incorrect` classes from the main wrapper element.
