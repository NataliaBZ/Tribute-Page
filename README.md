## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

This is a simple beginner project - Tribute page.

- responsive website using HTML, CSS and JavaScript
- built using flexbox and grid concepts
- developed with Desctop First methodology, then for mobile

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See the information provided clearly with user-friendly interface

### Screenshot

![Screenshot](image.png)

### Built with

- HTML5
- CSS custom properties
- Flexbox
- CSS Grid
- Desctop-first workflow
- JavaScript

### What I learned

My personal challange was making the timeline's line responsive and working on all of the screen sizes.

Snippet of the code:

```html
<div id="timeline-line"></div>
```

```css
#timeline-line {
  width: 3px;
  height: 100px;
  left: 50%;
  background-color: var(--dark-blue);
  position: absolute;
}
```

```js
const getTimelineHeight = document.getElementById("timeline").offsetHeight;
const timelineHeight = getTimelineHeight + "px";
document.getElementById("timeline-line").style.height = timelineHeight;

function changeTimelineHeight() {
  const getTimelineHeight = document.getElementById("timeline").offsetHeight;
  const timelineHeight = getTimelineHeight + "px";
  document.getElementById("timeline-line").style.height = timelineHeight;
}
window.onresize = changeTimelineHeight;
```

### Continued development

I want to make more advanced projects using more JavaScript to make sites more engaging. I plan to learn all about responsive design to be more confident in my abilities.
