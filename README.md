Sliding Cards

#Overview
This project demonstrates a website with a visually appealing card layout and a scrolling effect. The design simulates the same cards repeating while scrolling, providing a seamless user experience.

#Setup Instructions
1. Clone or download the repository.
2. Ensure you have a web browser installed (e.g., Chrome, Firefox, Edge).
3. Place the index.html, styles.css, and script.js files in the same directory.
4. Open the index.html file in your browser to view the website.

#Technology Choices and Rationale
HTML:
HTML was used to structure the content and provide a semantic layout for the project.

CSS:

Gradient Background: Used to enhance visual appeal and create a smooth transition between colors.
Glassmorphism (backdrop filter): Adds a modern frosted glass effect to the cards for aesthetic value.

JavaScript

#Known Limitations/Trade-offs
Scroll Reset:
The scrolling effect relies on resetting the scroll position when the user reaches the bottom. This approach might feel abrupt on slower devices.

Performance:
Adding too many cards or complex animations may cause performance issues on lower-end devices.

Static Content:
The cards are currently static and do not have any dynamic data or functionality.

Accessibility:
Limited support for screen readers or other accessibility tools. Additional work would be needed to make it accessible.

Viewport Dependency:
The effect depends on viewport height and scroll position, which may behave differently on devices with unusual aspect ratios or scrolling mechanisms.