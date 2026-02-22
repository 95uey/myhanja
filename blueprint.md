
# Blueprint: 마이 한자 (My Hanja)

## Overview

A web-based application for studying basic Hanja (Chinese characters used in Korean). The application will display a list of Hanja characters based on user-selected levels (Beginner, Intermediate, Advanced), allowing users to test their knowledge, track their performance, and reset their progress.

## Style, Design, and Features

### Current Version

*   **UI/UX:**
    *   A clean, grid-based layout to display Hanja cards.
    *   A header is fixed to the top, containing:
        *   The application title ("마이 한자").
        *   A dropdown menu to select the Hanja level (초급, 중급, 고급).
        *   A progress tracker (Total, Correct, Incorrect).
        *   A "Reset" button.
    *   A footer area is fixed to the bottom, reserved for advertisements.
    *   Each card initially shows only the Hanja character.
    *   Clicking a card reveals the meaning and pronunciation, along with "O" and "X" buttons.
    *   The application is responsive and usable on both desktop and mobile devices.
*   **Functionality:**
    *   Users can select a Hanja level: **Beginner (100 characters)**, **Intermediate (150 characters)**, or **Advanced (200 characters)**.
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

### Task: Update Hanja Levels and Data

1.  **`blueprint.md`:** Update level descriptions to Beginner (100), Intermediate (150), and Advanced (200).
2.  **`index.html`:** Change dropdown options to "초급", "중급", "고급".
3.  **`main.js`:** Add new data arrays for Intermediate and Advanced levels and update the logic to load the correct dataset based on selection.

