# Web Development Notes (Days 1–3)

## Current Goal

Become comfortable with:

* HTML structure
* CSS layouts
* Flexbox
* Building pages independently

Before moving to:

* JavaScript
* React
* Backend
* Full Stack Development

---

# 1. Layout Thinking

## Beginner Thinking

```text
Heading
Paragraph
Button
Image
```

Thinking about individual elements.

## Developer Thinking

```text
Hero Section
├── Heading
├── Paragraph
└── Button
```

Think in sections and containers.

---

# 2. Parent-Child Relationship

Example:

```text
Container
├── Card 1
├── Card 2
└── Card 3
```

* Container = Parent
* Cards = Children

Usually the parent controls layout.

Example:

```css
.container {
    display: flex;
}
```

The parent decides how children are arranged.

---

# 3. Block vs Inline Elements

## Block Elements

Examples:

```html
<div>
<p>
<section>
<h1>
```

Properties:

* Start on a new line
* Take available width

Visual:

```text
Item 1

Item 2

Item 3
```

---

## Inline Elements

Examples:

```html
<span>
<a>
```

Properties:

* Stay on the same line

Visual:

```text
Hello World Again
```

---

# 4. CSS Box Model

Everything on a webpage is a box.

Structure:

```text
Margin
└── Border
    └── Padding
        └── Content
```

---

## Content

Actual text, image, button, etc.

Example:

```text
FitCheck Collection
```

---

## Padding

Space INSIDE the element.

Visual:

```text
[Hello]
```

Padding increases internal spacing:

```text
[   Hello   ]
```

Use when content touches the border.

---

## Margin

Space OUTSIDE the element.

Without margin:

```text
Heading
Paragraph
```

With margin:

```text
Heading


Paragraph
```

Use when elements are too close together.

---

# Quick Rule

If content touches border:

```css
padding
```

If elements touch each other:

```css
margin
```

---

# 5. Flexbox

Purpose:

Arrange children inside a parent.

Without Flexbox:

```text
Card 1

Card 2

Card 3
```

With Flexbox:

```text
Card 1   Card 2   Card 3
```

---

## Basic Syntax

```css
.container {
    display: flex;
}
```

---

# 6. Main Axis and Cross Axis

Understanding this solves many Flexbox problems.

---

## Row Direction

```css
flex-direction: row;
```

Visual:

```text
Main Axis  →
Cross Axis ↓
```

### justify-content

Works on Main Axis.

Moves items:

```text
left ↔ right
```

### align-items

Works on Cross Axis.

Moves items:

```text
top ↕ bottom
```

---

## Column Direction

```css
flex-direction: column;
```

Visual:

```text
Main Axis  ↓
Cross Axis →
```

Now:

### justify-content

Moves:

```text
top ↕ bottom
```

### align-items

Moves:

```text
left ↔ right
```

---

# Important Rule

justify-content always works on the MAIN AXIS.

The main axis depends on flex-direction.

---

# 7. justify-content

Used to position children along the main axis.

Examples:

```css
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

Remember:

Works only when using:

```css
display: flex;
```

(or Grid)

---

# 8. align-items

Used to position children along the cross axis.

Example:

```css
align-items: center;
```

Useful for vertical centering in row layouts.

---

# 9. Gap

Purpose:

Add spacing between flex items.

Example:

```css
gap: 20px;
```

Visual:

Without gap:

```text
[Card1][Card2][Card3]
```

With gap:

```text
[Card1]   [Card2]   [Card3]
```

Preferred over adding many margins.

---

# 10. Width

Example:

```css
width: 500px;
```

Meaning:

```text
I want this element to be 500px wide.
```

The browser tries to keep it at that width.

---

# 11. Max Width

Example:

```css
max-width: 500px;
```

Meaning:

```text
You can be smaller,
but never larger than 500px.
```

---

## Example

Screen = 1200px

```css
max-width: 500px;
```

Result:

```text
500px
```

---

Screen = 300px

```css
max-width: 500px;
```

Result:

```text
300px
```

This helps with responsive layouts.

---

# 12. Centering Cheat Sheet

## Center Text

```css
text-align: center;
```

---

## Center Flex Items

```css
display: flex;
justify-content: center;
```

---

## Center Vertically (Row Layout)

```css
display: flex;
align-items: center;
```

---

## Center Entire Block

```css
margin: auto;
```

(Common with width/max-width)

---

# 13. Flex: 1

Example:

```css
.card {
    flex: 1;
}
```

Meaning:

```text
Share available space equally.
```

Visual:

```text
[Card1][Card2][Card3]
```

All cards get equal width.

Useful for:

* Card layouts
* Dashboards
* Responsive sections

---

# 14. Card Pattern

Most modern websites use cards.

Structure:

```text
Card
├── Image
├── Title
├── Subtitle
└── Description
```

Examples:

* YouTube videos
* Products
* Blog posts
* User profiles
* Bug reports
* Dashboards

---

# 15. Common Layout Pattern

```text
Page
│
├── Header
│
├── Navigation
│
├── Hero Section
│
├── Featured Section
│   ├── Card
│   ├── Card
│   └── Card
│
└── Footer
```

Most websites are just combinations of:

* Rows
* Columns
* Containers
* Cards

---

# Things To Remember

1. Parent controls children.
2. Think in containers, not individual tags.
3. justify-content → Main Axis.
4. align-items → Cross Axis.
5. margin = outside spacing.
6. padding = inside spacing.
7. gap = spacing between flex items.
8. max-width prevents huge stretched layouts.
9. Most websites are sections made of cards and containers.
s