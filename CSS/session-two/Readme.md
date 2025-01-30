# CSS Tutorial - Session 2: Core Styling

## Agenda

- [Global Reset](#global-reset)
- [Text Styling](#text-styling)
- [Shadows](#shadows)
- [Transforms](#transforms)
- [Pseudo-classes](#pseudo-classes)
- [Background Gradients](#background-gradients)
- [Overflow](#overflow)
- [Float](#float)
- [List Styling](#list-styling)
- [Opacity vs RGBA](#opacity-vs-rgba)
- [Multi-column Layout](#multi-column-layout)

---

## Global Reset

Resets default browser styling and establishes a consistent box model.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

---

## Text Styling

### Text Alignment
Controls horizontal text positioning.

```css
.center { text-align: center; }
.justify { text-align: justify; }
```

### Text Decoration
Adds lines/effects to text.

```css
.underline {
    text-decoration: underline wavy red 2px; /* line | style | color | thickness */
}
```

### Text Transform
Changes text capitalization.

```css
.upper { text-transform: uppercase; }
.capital { text-transform: capitalize; }
```

### Text Spacing
Controls text layout and spacing.

```css
p {
    text-indent: 40px;
    letter-spacing: 1px;
    word-spacing: 3px;
    line-height: 1.6;
}
```

### Text Shadow
Adds depth to text elements.

```css
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* X | Y | Blur | Color */
}
```

---

## Shadows

Creates depth effects for elements.

```css
.card {
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.3); /* X | Y | Blur | Spread | Color */
}
```

---

## Transforms

Modifies an element's shape or position.

```css
.button {
    transform: scale(1.1) rotate(5deg);
    transition: transform 0.3s ease;
}
```

---

## Pseudo-classes

Styles elements based on state.

```css
a:hover { color: #ff4757; }
button:active { transform: scale(0.95); }
input:focus { outline: 2px solid #2ed573; }
.clickable { cursor: pointer; }
```

---

## Background Gradients

Creates color transitions.

### Linear Gradient

```css
.header {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}
```

### Radial Gradient

```css
.circle {
    background: radial-gradient(circle, #ff9a9e, #fad0c4);
}
```

---

## Overflow

Controls content that exceeds its container.

```css
.scroll-box {
    height: 200px;
    overflow: auto; /* visible | hidden | scroll */
}
```

---

## Float

Wraps content around elements.

```css
img {
    float: left;
    margin-right: 20px;
}
```

---

## List Styling

Customizes list markers.

```css
ul {
    list-style-position: inside;
    list-style-type: square;
}
```

---

## Opacity vs RGBA

Controls element transparency.

```css
.opacity-example {
    background: rgba(255, 0, 0, 0.5); /* Background only */
    opacity: 0.5; /* Entire element */
}
```

---

## Multi-column Layout

Creates newspaper-like layouts.

```css
.article {
    column-count: 3;
    column-gap: 40px;
    column-rule: 2px solid #ddd;
}
```

---
