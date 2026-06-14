# Week 1: CSS Layout Mastery

## Learning Objectives

By the end of this week, I should be able to:

* Understand how HTML elements occupy space.
* Control spacing using margin and padding.
* Understand block and inline elements.
* Build layouts using Flexbox.
* Create responsive containers using width and max-width.
* Use common CSS units effectively.
* Build a simple responsive landing page without following a tutorial.

---

# 1. CSS Box Model

Every HTML element is represented as a box.

```
Margin
┌─────────────────────────┐
│ Border                  │
│ ┌─────────────────────┐ │
│ │ Padding             │ │
│ │ ┌─────────────────┐ │ │
│ │ │ Content         │ │ │
│ │ └─────────────────┘ │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

## Margin

Creates space **outside** the element's border.

```css
margin: 20px;
```

Use margin when creating distance between elements.

Example:

```css
h1 {
    margin-bottom: 20px;
}
```

---

## Padding

Creates space **inside** the element, between content and border.

```css
padding: 20px;
```

Example:

```css
.card {
    padding: 20px;
}
```

---

## Margin vs Padding

| Margin                         | Padding                                  |
| ------------------------------ | ---------------------------------------- |
| Outside the border             | Inside the border                        |
| Creates space between elements | Creates space between content and border |
| Does not increase content area | Increases visible box area               |

---

# 2. Display Property

The `display` property determines how an element behaves in a layout.

---

## Block Elements

```css
display: block;
```

Characteristics:

* Start on a new line
* Take full available width by default
* Width and height work normally

Examples:

```html
<div></div>
<h1></h1>
<p></p>
<section></section>
```

---

## Inline Elements

```css
display: inline;
```

Characteristics:

* Stay on the same line
* Take only the width they need
* Width and height are generally ignored

Examples:

```html
<span></span>
<a></a>
<strong></strong>
```

---

## Inline-Block

```css
display: inline-block;
```

Characteristics:

* Stays inline
* Width and height work

Useful for buttons and small UI components.

---

# 3. Width and Height

---

## Width

Controls horizontal size.

```css
width: 300px;
```

Common values:

```css
width: 300px;
width: 100%;
width: auto;
```

---

## Height

Controls vertical size.

```css
height: 200px;
```

Common values:

```css
height: auto;
height: 100vh;
```

Important:

Most elements already have:

```css
height: auto;
```

Therefore height grows automatically as content grows.

Example:

```css
.card {
    padding: 20px;
}
```

The card becomes taller if more content is added.

---

# 4. Common CSS Units

---

## px

Fixed size.

```css
width: 300px;
```

Best for:

* Icons
* Borders
* Small components

---

## %

Relative to parent element.

```css
width: 50%;
```

If parent width is 1000px:

```
50% = 500px
```

---

## auto

Browser calculates the size automatically.

```css
width: auto;
height: auto;
```

---

## vw

Viewport Width.

```css
width: 50vw;
```

50% of the screen width.

---

## vh

Viewport Height.

```css
height: 100vh;
```

100% of the screen height.

Commonly used for hero sections.

---

## rem

Relative to root font size.

```css
padding: 2rem;
```

Typically:

```
1rem = 16px
```

---

# 5. Width vs Max-Width

One of the most important responsive design concepts.

---

## Fixed Width

```css
width: 1200px;
```

Problem:

* May overflow on smaller screens.
* Can cause horizontal scrolling.

---

## Responsive Container Pattern

```css
.container {
    width: 100%;
    max-width: 1200px;
}
```

Meaning:

* Occupy available space.
* Never exceed 1200px.

Examples:

| Screen Width | Container Width |
| ------------ | --------------- |
| 400px        | 400px           |
| 800px        | 800px           |
| 1600px       | 1200px          |

This pattern is used in most modern websites.

---

# 6. Flexbox

Flexbox is a one-dimensional layout system used to arrange elements in rows or columns.

Parent:

```css
display: flex;
```

Children become flex items.

---

# 7. Main Axis and Cross Axis

---

## Row Layout

```css
flex-direction: row;
```

Main Axis:

```
→ Horizontal
```

Cross Axis:

```
↓ Vertical
```

---

## Column Layout

```css
flex-direction: column;
```

Main Axis:

```
↓ Vertical
```

Cross Axis:

```
→ Horizontal
```

---

# 8. justify-content

Controls alignment along the main axis.

```css
justify-content: center;
```

Common values:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

# 9. align-items

Controls alignment along the cross axis.

```css
align-items: center;
```

Common values:

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
align-items: stretch;
```

---

# 10. gap

Creates spacing between flex items.

```css
gap: 20px;
```

Example:

```css
.cards {
    display: flex;
    gap: 20px;
}
```

Preferred over manually adding margins between flex items.

---

# 11. flex: 1

Allows items to share available space equally.

```css
.card {
    flex: 1;
}
```

Example:

```
| Card | Card | Card |
```

All cards receive equal width.

---

# Practical Learning

## Concepts Practiced

* Margin and padding
* Width and max-width
* Block and inline elements
* Flexbox layouts
* Main axis and cross axis
* justify-content
* align-items
* gap
* flex: 1

---

# Week 1 Project

## Responsive Landing Page

Requirements:

* Navbar
* Hero Section
* Cards Section
* Footer

Concepts to apply:

* Box Model
* Width and Max-Width
* Flexbox
* justify-content
* align-items
* gap
* flex:1

Repository Deliverables:

* Source code
* Meaningful commit history
* README
* Screenshots (optional)

---

# Personal Notes

Concepts requiring more practice:

* Width vs Max-Width intuition
* Choosing spacing values naturally
* Building layouts from memory without reference

Current confidence level after Week 1:

* Box Model: Good
* Display Property: Good
* Flexbox: Good
* Responsive Containers: Improving
* Layout Building: Needs more practice
