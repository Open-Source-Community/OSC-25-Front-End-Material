# JavaScript Fundamentals - Session 5: Advanced Concepts & React Preparation  

## Table of Contents  
1. [Asynchronous Programming](#async)  
2. [Closures](#closures)
3. [Prototypes & Inheritance](#prototypes)
4. [Classes & OOP](#oop)  
5. [Modules](#modules)  
6. [Modern ES6+ Features](#es6)  
7. [Hands-On Example](#hands-on)
8. [React Preparation](#react)  
9. [Common Mistakes](#mistakes)  

---

<a name="async"></a>
## 1. Asynchronous Programming
### Synchronous vs Asynchronous Execution
**Synchronous Code**:
- Executes line-by-line in sequence
- Blocks subsequent operations until current completes
- Example: 
```javascript
console.log("Start");
console.log("Processing..."); // Blocks until complete
console.log("End");
```

**Asynchronous Code**:
- Non-blocking execution
- Operations can run in background
- Example: 
```javascript
console.log("Start");
setTimeout(() => console.log("Timeout complete"), 1000); // Non-blocking
console.log("End");
// Output: Start -> End -> Timeout complete
```

### Callbacks & Callback Hell
**Basic Callback**:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(data => console.log(data));
```

**Callback Hell** (Pyramid of Doom):
```javascript
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      updateUI(details, function() {
        console.log("Final update complete");
      });
    });
  });
});
```

### Promise Fundamentals
**What is a Promise?**  
A Promise represents an asynchronous operation that may complete in the future. It has three states:  
- **Pending**: Initial state  
- **Fulfilled**: Operation completed successfully  
- **Rejected**: Operation failed  

**Creating Promises**:
```javascript
const weatherPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3;
  
  setTimeout(() => {
    success ? resolve("Sunny") : reject("API Error");
  }, 1000);
});

weatherPromise
  .then(weather => console.log("Weather:", weather))
  .catch(error => console.error("Error:", error));
```

### Advanced Promise Handling
**Promise Chaining**:
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if(!response.ok) throw new Error('User not found');
    return response.json();
  })
  .then(user => {
    console.log("User:", user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log("Total posts:", posts.length))
  .catch(error => console.error("Chain failed:", error))
  .finally(() => console.log("Request completed"));
```

**Multiple Promises**:
```javascript
// Wait for all promises
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://jsonplaceholder.typicode.com/comments/1')
])
.then(([postRes, commentRes]) => Promise.all([postRes.json(), commentRes.json()]))
.then(([post, comment]) => {
  console.log("Post:", post.title);
  console.log("Comment:", comment.body);
});

// Race between promises
Promise.race([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  new Promise((_, reject) => setTimeout(reject, 3000, 'Timeout'))
])
.then(response => response.json())
.catch(error => console.error("Failed:", error));
```

### Async/Await Patterns
```javascript
async function getUserWithPosts(userId) {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userRes.json();
    
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsRes.json();
    
    return { ...user, posts };
  } catch(error) {
    console.error("Failed to load data:", error);
    throw error;
  }
}

// Usage
getUserWithPosts(1)
  .then(data => console.log("User with posts:", data))
  .catch(() => console.log("Couldn't load data"));
```

---

<a name="closures"></a>
## 2. Closures

### What are Closures?
A closure is a function that remembers its outer variables and can access them even after the outer function has finished.

**Simple Example**:
```javascript
function createCounter() {
  let count = 0;
  
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Practical Use Case**:
```javascript
function createTheme(themeName) {
  const prefix = `[${themeName}] `;
  
  return {
    log: (message) => console.log(prefix + message),
    error: (message) => console.error(prefix + message)
  };
}

const darkTheme = createTheme('Dark');
darkTheme.log('Error occurred'); // [Dark] Error occurred
```

---

<a name="prototypes"></a>
## 3. Prototypes & Inheritance

### Prototype Basics
```javascript
// Constructor function
function User(name) {
  this.name = name;
}

// Add method to prototype
User.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
};

const user1 = new User('Ali');
user1.greet(); // Hello Ali
```

### Prototypal Inheritance
```javascript
function Admin(name) {
  User.call(this, name);
  this.role = 'admin';
}

// Inherit prototype
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

// Add admin method
Admin.prototype.manage = function() {
  console.log(`${this.name} is managing`);
};

const admin = new Admin('Sarah');
admin.greet(); // Hello Sarah (from User)
admin.manage(); // Sarah is managing (from Admin)
```

### Modern Class Syntax
```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
    this.role = 'admin';
  }

  manage() {
    console.log(`${this.name} is managing`);
  }
}
```

---

<a name="oop"></a>
## 4. Classes & OOP

### Class Fundamentals
```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  applyDiscount(percent) {
    this.price *= (1 - percent/100);
  }
}

const book = new Product("JS Guide", 29.99);
book.applyDiscount(10);
console.log(book.formattedPrice); // $26.99
```

### Inheritance
```javascript
class DigitalProduct extends Product {
  constructor(name, price, downloadLink) {
    super(name, price);
    this.downloadLink = downloadLink;
  }

  preview() {
    console.log(`Download available at: ${this.downloadLink}`);
  }
}
```

---

<a name="modules"></a>
## 5. Modules

### Named Exports
```javascript
// math.js
export const PI = 3.14159;
export const circleArea = r => PI * r ** 2;

// app.js
import { PI, circleArea } from './math.js';
```

### Default Exports
```javascript
// logger.js
export default function(message) {
  console.log(`[LOG]: ${message}`);
}

// app.js
import log from './logger.js';
```

---

<a name="es6"></a>
## 6. Modern ES6+ Features

### Optional Chaining
```javascript
const street = user?.address?.street || 'Unknown';
```

### Nullish Coalescing
```javascript
const price = item.price ?? 0;
```

### Dynamic Imports
```javascript
const loadModule = async () => {
  const helpers = await import('./helpers.js');
  helpers.formatDate(new Date());
};
```

---

<a name="hands-on"></a>
## 7. Hands-On Example

**E-Commerce Dashboard**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Session 5 Task</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; }
        .counter { margin: 20px 0; padding: 10px; border: 1px solid #ccc; }
        button { padding: 8px 15px; margin: 0 5px; cursor: pointer; }
        .user-card { margin-top: 20px; padding: 15px; background: #f5f5f5; }
        .loader { display: none; color: #666; }
    </style>
</head>
<body>
    <h1>User Profile & Counter</h1>
    
    <div class="counter">
        <h3>Counter: <span id="count">0</span></h3>
        <button id="increment">+</button>
        <button id="decrement">-</button>
    </div>

    <div id="user-info">
        <div class="loader">Loading user...</div>
        <div class="user-card"></div>
    </div>

    <script>
        // Closure Counter Implementation
        function createCounter() {
            let count = 0;
            
            return {
                increment: () => ++count,
                decrement: () => count > 0 ? --count : 0,
                getCount: () => count
            };
        }

        // Async User Data Fetch
        async function fetchUserData(userId) {
            try {
                document.querySelector('.loader').style.display = 'block';
                
                // Simulate API call with delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const mockUser = {
                    name: "John Doe",
                    email: "john@example.com",
                    id: userId
                };
                
                document.querySelector('.user-card').innerHTML = `
                    <h3>${mockUser.name}</h3>
                    <p>Email: ${mockUser.email}</p>
                    <p>User ID: ${mockUser.id}</p>
                `;
                
            } catch (error) {
                document.querySelector('.user-card').innerHTML = 
                    '<p class="error">Error loading user data</p>';
            } finally {
                document.querySelector('.loader').style.display = 'none';
            }
        }

        // Initialize Application
        document.addEventListener('DOMContentLoaded', () => {
            const counter = createCounter();
            const countDisplay = document.getElementById('count');
            
            // Counter Controls
            document.getElementById('increment').addEventListener('click', () => {
                counter.increment();
                countDisplay.textContent = counter.getCount();
            });
            
            document.getElementById('decrement').addEventListener('click', () => {
                counter.decrement();
                countDisplay.textContent = counter.getCount();
            });

            // Load user data
            fetchUserData(1);
        });
    </script>
</body>
</html>
```

---

<a name="react"></a>
## 8. React Preparation
### Component Analogy
```javascript
// JavaScript Component
function ProductCard({ name, price }) {
  return `
    <div class="card">
      <h3>${name}</h3>
      <p>Price: $${price}</p>
    </div>
  `;
}

// React Equivalent
function ProductCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
    </div>
  );
}
```

### Key Concepts Mapping  
| JavaScript          | React Equivalent       |
|---------------------|------------------------|
| `class`             | `class Component`      |
| `fetch()`           | `useEffect()`          |
| `localStorage`      | `useState()` + Context |
| Event Listeners     | `onClick` Props        |
| Template Literals   | JSX Syntax             |

---

<a name="mistakes"></a>
## 9. Common Mistakes
1. **Promise Handling**  
```javascript
// Wrong: Unhandled promise
fetch(url).then(data => console.log(data));

// Right: Always add catch
fetch(url)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

2. **Class Method Binding**  
```javascript
// Wrong: Lost context
button.addEventListener('click', user.greet);

// Right: Bind or use arrow functions
class User {
  greet = () => {
    console.log(this.name);
  }
}
```

3. **Module Circular Dependencies**  
```javascript
// fileA.js
import { b } from './fileB.js'; // ❌ Before export
export const a = 1;

// Solution: Import after exports
export const a = 1;
import { b } from './fileB.js'; // ✅
```

---
```


