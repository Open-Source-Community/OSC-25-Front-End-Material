# JavaScript Fundamentals - Session 3: DOM & Events  

## Table of Contents  
1. [DOM Basics](#dom-basics)  
2. [DOM Selection Methods](#dom-selection-methods)  
3. [DOM Manipulation](#dom-manipulation)  
4. [Event Handling](#event-handling)  
5. [Math Methods](#math-methods)  
6. [Content Properties](#content-properties)  
7. [BOM Objects](#bom-objects)  
8. [Synchronicity: setTimeout vs setInterval](#synchronicity)
9. [Hands-On Example](#hands-on-example)  
10. [Common Mistakes](#common-mistakes)  

---

## 1. DOM Basics  
**Select Elements**:  
```javascript
// By ID (returns single element)
const div1 = document.getElementById("div1");

// By CSS selector (returns first match)
const btn1 = document.querySelector("#showPrice");

// By CSS selector (returns all matches)
const allProducts = document.querySelectorAll(".products li");
```

### DOM Relationships
```javascript
const list = document.querySelector("ul");

// Parent/Child Navigation
list.parentElement;        // Direct parent element
list.childNodes;           // All child nodes (including text nodes)
list.children;             // Only element children
list.firstChild;           // First child node
list.firstElementChild;    // First child element
list.nextSibling;          // Next sibling node
list.nextElementSibling;   // Next sibling element
```

---

## 2. DOM Selection Methods  
### **Single Element Selectors**  
1. **`getElementById()`**:  
   ```javascript
   const header = document.getElementById("header");
   ```  
2. **`querySelector()`**:  
   ```javascript
   const item = document.querySelector("li.active");
   ```  

### **Multiple Element Selectors**  
3. **`getElementsByClassName()`**:  
   ```javascript
   const products = document.getElementsByClassName("product");
   ```  
4. **`getElementsByTagName()`**:  
   ```javascript
   const buttons = document.getElementsByTagName("button");
   ```  
5. **`querySelectorAll()`**:  
   ```javascript
   const paragraphs = document.querySelectorAll("#content p");
   ```  

---

## 3. DOM Manipulation  
**Create/Modify Elements**:  
```javascript
// Create element
const newPara = document.createElement("p");
newPara.textContent = "New paragraph";

// Add to DOM
document.body.appendChild(newPara);

// Style manipulation
btn1.style.cssText = "background: blue; font-size: 20px;";

// Custom attributes
newPara.setAttribute("price", "15"); // Create custom attribute
const price = newPara.getAttribute("price"); // Get value

// Form inputs
const input = document.querySelector("input");
console.log(input.value); // Get input value
input.value = "New text"; // Set input value

// Remove elements
const item = document.querySelector(".item");
item.remove(); // Delete from DOM
```

---

## 4. Event Handling  
### **Event Types**  
1. **Mouse Events**:  
   ```javascript
   // Click
   btn1.onclick = () => console.log("Clicked!");
   
   // Double-click
   element.ondblclick = () => alert("Double-clicked!");
   
   // Hover
   image.onmouseover = () => image.style.border = "2px solid red";
   ```  

2. **Keyboard Events**:  
   ```javascript
   document.onkeydown = (e) => console.log("Pressed:", e.key);
   ```  

3. **Form Events**:  
   ```javascript
   // Input change event
   input.onchange = () => console.log("Value changed:", input.value);
   ```

4. **Window Events**:  
   ```javascript
   window.onload = () => console.log("Page loaded");
   ```  

### **Event Listeners**  
```javascript
// addEventListener vs onclick
// Best practice: Use addEventListener
button.addEventListener("click", handler1); // Multiple handlers allowed
button.addEventListener("click", handler2);

// Avoid: onclick overwrites previous handlers
button.onclick = handler1; 
button.onclick = handler2; // Only handler2 remains

// One-time execution
card.addEventListener("mouseenter", () => {
  card.style.transform = "scale(1.1)";
}, { once: true });
```

---

## 5. Math Methods  
**Essential Calculations**:  
```javascript
Math.pow(3, 2);    // 9 (3 squared)
Math.sqrt(25);     // 5  
Math.round(4.3);   // 4  
Math.floor(4.9);   // 4  
Math.ceil(4.1);    // 5  
Math.random();     // Random 0-1 (e.g., 0.723)

// Random price between $10-$50
const price = Math.floor(Math.random() * 41) + 10;
```

---

## 6. Content Properties  
| Property         | Behavior                                   |  
|------------------|-------------------------------------------|  
| `innerHTML`      | Renders HTML tags                         |  
| `innerText`      | Visible text only                         |  
| `textContent`    | Raw text with formatting                  |  

**Examples**:  
```html
<!-- HTML -->
<div id="demo">
  <span style="display:none">Hidden</span>  
  Hello   World!
</div>
```

```javascript
// innerHTML
console.log(demo.innerHTML);  // "<span style="display:none">Hidden</span> Hello   World!"

// innerText
console.log(demo.innerText);  // "Hello World!" (no hidden, collapsed spaces)

// textContent
console.log(demo.textContent); // "  Hidden  Hello   World!" (raw content)
```

---

## 7. BOM Objects 
**Browser Environment**:  
```javascript
// Window methods
window.open("https://example.com"); // Open new tab
window.close(); // Close current window

// Screen dimensions
screen.width;         // Total screen width
screen.availWidth;    // Available screen width (excluding OS bars)
window.innerWidth;    // Browser viewport width

screen.height;        // Total screen height
screen.availHeight;   // Available screen height
window.innerHeight;   // Browser viewport height

// History control
history.back();      // Go back
history.forward();   // Go forward

// Location control
location.href = "https://google.com"; // Redirect
location.reload();                    // Refresh page
location.assign("page2.html");        // Navigate to new page

// Timers  
setTimeout(() => {
  console.log("Runs once after 2 seconds");
}, 2000);

const interval = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

// Stop interval
clearInterval(interval);
```

---

## 8. Synchronicity: setTimeout vs setInterval 
### Execution Flow
```javascript
console.log("Start"); // 1. Runs immediately

setTimeout(() => {
  console.log("Timeout callback"); // 4. Runs after 0ms delay
}, 0);

console.log("End"); // 2. Runs immediately

// Output Order:
// Start
// End
// Timeout callback
```

### Key Differences
| Feature               | setTimeout                          | setInterval                         |
|-----------------------|-------------------------------------|-------------------------------------|
| Execution             | Runs once after delay               | Repeats continuously until cleared  |
| Syntax                | `setTimeout(fn, delay)`            | `setInterval(fn, interval)`         |
| Stopping              | `clearTimeout(timerID)`             | `clearInterval(intervalID)`         |

### Example with Both
```javascript
console.log("First"); // 1. First

setTimeout(() => {
  console.log("Second"); // 3. After 100ms
}, 100);

const interval = setInterval(() => {
  console.log("Third"); // 2. Immediately, then every 50ms
}, 50);

// Stop after 200ms
setTimeout(() => {
  clearInterval(interval);
  console.log("Fourth"); // 4. After 200ms
}, 200);

/* Output Order:
First
Third (at 50ms)
Third (at 100ms)
Second (at 100ms)
Third (at 150ms)
Fourth (at 200ms)
*/
```

---


## 9. Hands-On Example  
### Example: Dynamic List  
```html
<ul id="list"><li>Item 1</li></ul>
<button id="addBtn">Add Item</button>

<script>
  const list = document.getElementById("list");
  const addBtn = document.getElementById("addBtn");

  addBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  });
</script>
```

---

## 10. Common Mistakes  
1. **Unsafe HTML Injection**:  
   ```javascript
   // Dangerous!
   element.innerHTML = userInput;

   // Safe alternative
   element.textContent = userInput;
   ```

2. **Event Overwriting**:  
   ```javascript
   // Bad
   btn.onclick = handler1;
   btn.onclick = handler2; // Replaces handler1
   ```  

3. **Timer Memory Leaks**:  
   ```javascript
   // Always clear intervals
   const interval = setInterval(...);
   // Later...
   clearInterval(interval);
   ```

---

