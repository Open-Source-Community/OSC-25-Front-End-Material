# JavaScript Fundamentals - Session 1

## Table of Contents
1. [What is JavaScript?](#what-is-javascript)  
2. [Why Use JavaScript?](#why-use-javascript)  
3. [How to Use JavaScript](#how-to-use-javascript)  
4. [Basic Interactions](#basic-interactions)  
5. [Variables](#variables)  
6. [Data Types](#data-types)  
7. [Operators](#operators)  
8. [Control Flow](#control-flow)  
9. [Functions](#functions)  
10. [DOM Basics](#dom-basics)  
11. [Events Basics](#events-basics)  
12. [Debugging Basics](#debugging-basics)  
13. [Common Mistakes](#common-mistakes)  

---

## What is JavaScript?
**JavaScript** is the programming language that powers interactive websites. It:
- Makes web pages dynamic and responsive
- Handles user interactions (clicks, form submissions)
- Updates content without page reloads
- Works in browsers, servers, and mobile apps

---

## Why Use JavaScript?
1. **Universal Language**  
   Runs on every device with a browser (phones, tablets, computers)

2. **Full-Stack Capabilities**  
   - Frontend: User interfaces (React, Vue)  
   - Backend: Servers (Node.js)  
   - Mobile: Apps (React Native)  
   - Desktop: Software (Electron)

3. **Job Opportunities**  
   #1 most used programming language (Stack Overflow 2023)

4. **Instant Feedback**  
   See results immediately in your browser

---

## How to Use JavaScript

1. **Browser Console** (Quick Testing)  
   Press `F12` → Console tab → Type code:  
   ```javascript
   console.log("Hello World!");
   5 + 3 // Shows 8 immediately
   ```

2. **HTML Files** (Real Projects)  
   Create `index.html`:  
   ```html
   <!DOCTYPE html>
   <html>
   <body>
     <script>
       document.write("My First JS Code!");
     </script>
   </body>
   </html>
   ```


---

## Basic Interactions
Simple browser dialogs and outputs:
```javascript
// Popup messages
alert("Welcome to our website!");

// Confirm dialog
const isConfirmed = confirm("Are you sure you want to delete this?");
console.log(isConfirmed); // Returns true/false

// User input dialog
const userName = prompt("Please enter your name:");
console.log(userName); // Returns user's input

// Direct HTML writing
document.write("<h1>Hello World!</h1>");
```

---

## Variables
Containers for storing data values

### Declaration Types
```javascript
// 1. let (block-scoped, reassignable)
let age = 25;
age = 26; // Valid

// 2. const (block-scoped, constant)
const PI = 3.14159;
// PI = 3; // Error!

// 3. var (function-scoped, avoid in modern JS)
var oldScore = 100;
```

### Key Concepts
1. **Hoisting**: Variables declared with `var` are moved to top of scope
2. **Temporal Dead Zone**: Cannot access `let/const` before declaration
3. **Scope**: Where variables are accessible
   - Block: `{}` (for `let/const`)
   - Function: `function(){}`

---

## Data Types
### Main Data Types
| Type        | Example          | Description          | typeof Result |
|-------------|------------------|----------------------|---------------|
| `string`    | `"Hello"`        | Text data            | "string"      |
| `number`    | `42`, `3.14`     | All numbers          | "number"      |
| `boolean`   | `true`, `false`  | Yes/No values        | "boolean"     |
| `undefined` | `let x;`         | Not assigned yet     | "undefined"   |
| `null`      | `let y = null;`  | Empty on purpose     | "object"      |
| `object`    | `{name: "Alice"}`| Key-value pairs      | "object"      |
| `array`     | `[1, 2, 3]`      | Ordered collections  | "object"      |

**Important Notes**:
- `typeof null` returns "object" (historical JavaScript behavior)
- Arrays are special type of objects
- Use `Array.isArray()` to check for arrays

---

## Operators
Tools for performing operations

### Common Operators
```javascript
// Arithmetic
10 + 5   // 15 (Addition)
10 % 3   // 1 (Remainder)
2 ** 4   // 16 (Exponent)

// Comparison
"5" == 5   // true (Loose equality)
"5" === 5  // false (Strict equality)

// Logical
true && false  // AND → false
true || false  // OR → true
!true          // NOT → false

// Ternary (Mini if-else)
let status = (age >= 18) ? "Adult" : "Minor";
```

---

## Control Flow
Control program execution order

### Conditional Statements
```javascript
// If-else
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade"); // This runs
} else {
  console.log("C grade");
}

// Switch
let day = "Tuesday";
switch(day) {
  case "Monday":
    console.log("Start week");
    break;
  default:
    console.log("Regular day"); // Runs
}
```

### Loops
```javascript
// For loop
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// While loop
let count = 3;
while (count > 0) {
  console.log(count); // 3, 2, 1
  count--;
}
```

---

## Functions
Reusable code blocks

### Function Types
```javascript
// 1. Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Function Expression
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function (Modern)
const divide = (a, b) => a / b;
```

### Parameters vs Arguments
```javascript
function greet(name) { // Parameter
  console.log(`Hello ${name}`);
}

greet("Bob"); // "Bob" is argument
```

---

## DOM Basics
Basic webpage manipulation:
```javascript
// Change element content
document.getElementById("title").innerHTML = "New Heading";

// Get elements by class
const listItems = document.getElementsByClassName("item");
listItems[0].style.color = "red"; // Change first item's color

// Create new elements
const newPara = document.createElement("p");
newPara.textContent = "New paragraph";
document.body.appendChild(newPara);
```

---

## Events Basics
Responding to user actions:
```html
<button onclick="showAlert()">Click Me</button>

<script>
function showAlert() {
  alert("Button was clicked!");
}
</script>
```

---

## Debugging Basics
Find and fix errors

### Console Methods
```javascript
console.log("Regular message");   // Black text
console.warn("Warning message");  // Yellow text
console.error("Error message");   // Red text

// Display data as table
console.table([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]);
```

### Strict Mode
```javascript
"use strict"; // Add at file top

// Catches common errors
undeclaredVar = 10; // Throws error
```

---

## Common Mistakes
1. **Misusing Equality Checks**  
   ```javascript
   "5" == 5  // true (avoid)
   "5" === 5 // false (use this)
   ```

2. **Reassigning Constants**  
   ```javascript
   const PI = 3.14;
   PI = 3.14159; // Error!
   ```

3. **Forgetting Function Calls**  
   ```javascript
   function greet() { console.log("Hi"); }
   greet; // Does nothing
   greet(); // Correct
   ```

---


