
# Blueprint: 마이 한자 (My Hanja)

## Overview

A web-based application for studying basic Hanja (Chinese characters used in Korean). The application will display a list of Hanja characters based on user-selected levels (100, 500, 1000), allowing users to test their knowledge, track their performance, and reset their progress.

## Style, Design, and Features

### Current Version

*   **UI/UX:**
    *   A clean, grid-based layout to display Hanja cards.
    *   A header is fixed to the top, containing:
        *   The application title ("마이 한자").
        *   A dropdown menu to select the Hanja level (100, 500, or 1000).
        *   A progress tracker (Total, Correct, Incorrect).
        *   A "Reset" button.
    *   A footer area is fixed to the bottom, reserved for advertisements.
    *   Each card initially shows only the Hanja character.
    *   Clicking a card reveals the meaning and pronunciation, along with "O" and "X" buttons.
    *   The application is responsive and usable on both desktop and mobile devices.
*   **Functionality:**
    *   Users can select a Hanja level (100, 500, 1000) from a dropdown. **(Note: Currently, all levels display the same 100 characters as a placeholder.)**
    *   The grid dynamically populates with the characters for the selected level.
    *   Users can mark their knowledge of each character as correct or incorrect.
    *   The progress tracker updates in real-time.
    *   Users can reset the learning state of all cards.
    *   Web Components are used to create interactive `<hanja-card>` elements.
*   **Technology:**
    *   HTML5
    *   CSS3
    *   Modern JavaScript (ES Modules, Web Components)

## Current Plan

### Task: Change Level Selector to Dropdown

1.  **`blueprint.md`:** Update the level selector description to "dropdown menu".
2.  **`index.html`:** Replace the button group with a `<select>` element.
3.  **`style.css`:** Style the new dropdown element.
4.  **`main.js`:** Adapt the event listener for the `<select>` element.

