# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). This project helped me practice DOM manipulation, JavaScript interactions, and responsive layouts using a mobile-first workflow.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript DOM manipulation
- Media queries


### What I learned

During this project, I practiced several important JavaScript concepts for front-end development, especially DOM manipulation and interactive UI behavior.

I learned how to:

- Select HTML elements with JavaScript
- Use data-* attributes
- Add and remove CSS classes dynamically
- Use loops to update multiple elements
- Store user selections in variables
- Show and hide sections dynamically
- Update HTML content with textContent

One part I was proud of was creating the active button selection system:

```js
let rating = ''

function selected(button) {
    rating = button.dataset.value

    let allButtons = document.querySelectorAll('.rating-btn')

    for (let btn of allButtons) {
        btn.classList.remove('active')
    }

    button.classList.add('active')
}
```

I also learned more about CSS specificity and how the order of CSS rules affects which styles are applied.

### Continued development

In future projects, I want to continue improving:

- JavaScript logic and DOM manipulation
- Responsive layouts
- CSS organization and naming
- Interactive components
- Accessibility best practices

I also want to start practicing cleaner JavaScript structure without inline onclick attributes.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

I used ChatGPT during this project mainly for:

- Understanding JavaScript concepts
- Debugging logic issues
- Learning how loops and DOM selection work
- Improving CSS behavior and responsive layouts

The most helpful part was receiving explanations and guidance without getting the complete solution immediately, which helped me think through the problems myself.


## Author

- Frontend Mentor - [@samanthakevely](https://www.frontendmentor.io/profile/samanthakevely)
- Instagram - [@samanthakevely](https://www.instagram.com/samanthakevely/)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

