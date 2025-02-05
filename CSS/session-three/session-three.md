Third session css

# CSS Tutorial - Session 3: Advanced Layouts & Responsive Design

## Agenda
- [Flexbox](#flexbox)
- [CSS Grid](#css-grid)
- [Transitions](#transitions)
- [Positioning](#positioning)
- [Animations](#animations)
- [Pseudo-elements](#pseudo-elements)
- [Responsive Design](#responsive-design)

----------------------------------------------------------------

- ## Flexbox
  **Flexbox** creates flexible one-dimensional layouts that automatically adjust items to fit different screen sizes. It's ideal for navigation bars, cards, and any layout needing content alignment.

  ### Key Properties
  ```css
  .container {
    display: flex;
    justify-content: space-between; /* Horizontal alignment */
    align-items: center;     /* Vertical alignment */
    flex-wrap: wrap;        /* Allow items to wrap */
    gap: 20px;             /* Space between items */
  }

  .item {
    flex: 1 0 200px; /* flex-grow | flex-shrink | flex-basis */
    order: 2;        /* Change display order */
  }
  ```

  **Example**: Responsive navigation bar
  ```css
  .nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }
 
  .nav-item {
    flex: 1;
    text-align: center;
  }
  ```

----------------------------------------------------------------

- ## CSS Grid
  **CSS Grid** creates complex two-dimensional layouts with rows and columns. Perfect for image galleries, dashboards, and magazine-style layouts.

  ### Core Concepts
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: 100px auto;       /* Explicit row sizes */
    gap: 15px;                           /* Gutters */
  }

  .item {
    grid-column: 1 / span 2; /* Start at column 1, span 2 columns */
    grid-row: 2;            /* Place in second row */
    align-self: end;       /* Vertical positioning */
  }
  ```

  **Example**: Responsive gallery
  ```css
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  ```

----------------------------------------------------------------

- ## Transitions
  **Transitions** create smooth animations between state changes. Use them for hover effects, color changes, and size adjustments.

  ### Complete Syntax
  ```css
  .button {
    transition:
      background 0.3s ease-in-out,
      transform 0.2s linear 0.1s;
    /* property | duration | timing-function | delay */
  }
  ```

  **Example**: Smooth button hover
  ```css
  .btn {
    background: blue;
    transition: all 0.3s ease;
  }
 
  .btn:hover {
    background: darkblue;
    transform: translateY(-3px);
  }
  ```

----------------------------------------------------------------

- ## Positioning
  **Positioning** controls element placement relative to different reference points. Essential for overlays, tooltips, and sticky elements.

  ### Position Types
  ```css
  .relative-box {
    position: relative; /* Reference for absolute children */
  }

  .absolute-element {
    position: absolute;
    top: 20px;
    left: 0;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  ```

  **Example**: Tooltip implementation
  ```css
  .tooltip {
    position: relative;
  }
 
  .tooltip-text {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  ```

----------------------------------------------------------------

- ## Animations
  **Animations** create complex multi-step movements and transformations. Use for loading spinners, entrance effects, and interactive elements.

  ### Keyframe Structure
  ```css
  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animated-element {
    animation: slide-in 0.5s ease 1s 3 alternate;
    /* name | duration | timing | delay | count | direction */
  }
  ```

  **Example**: Bouncing loader
  ```css
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
 
  .loader {
    animation: bounce 1s ease-in-out infinite;
  }
  ```

----------------------------------------------------------------

- ## Pseudo-elements
  **Pseudo-elements** (::before/::after) create virtual elements for decorative effects without extra HTML. Essential for icons, overlays, and custom styling.

  ### Detailed Example: Image Overlay
  ```css
  .team-member {
    position: relative;
    width: 300px;
    overflow: hidden;
  }

  /* Creates overlay effect */
  .team-member::after {
    content: ""; /* REQUIRED - even when empty */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    transition: all 0.4s ease;
  }

  .team-member:hover::after {
    height: 100%;
    opacity: 1;
  }
  ```

  **How It Works**:
  1. `::after` creates invisible overlay (height: 0, opacity: 0)
  2. On hover, expands to full height and becomes visible
  3. Smooth transition creates fade-in effect

----------------------------------------------------------------

- ## Responsive Design
  **Responsive Design** ensures websites adapt to different screen sizes. Core concepts include fluid layouts, flexible units, and media queries.

  ### Essential Techniques
  ```css
  .responsive-box {
    width: 80%;        /* Fluid width */
    max-width: 1200px; /* Maximum size */
    padding: 2rem;     /* Root-relative unit */
    font-size: 1.2em;  /* Parent-relative */
  }

  @media (max-width: 768px) {
    .responsive-box {
      width: 95%;
      font-size: 1em;
    }
  }
  ```

  **Mobile-First Approach**:
  ```css
  /* Base mobile styles */
  .card { padding: 1rem; }

  /* Tablet+ */
  @media (min-width: 768px) {
    .card { padding: 2rem; }
  }
  ```

----------------------------------------------------------------

