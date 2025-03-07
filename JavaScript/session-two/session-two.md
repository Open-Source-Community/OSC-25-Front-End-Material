# JavaScript Fundamentals - Session 2: Arrays, Strings & Objects  


## Table of Contents  
1. [Arrays](#arrays)  
2. [Array Methods](#array-methods)  
3. [Strings](#strings)  
4. [String Methods](#string-methods)  
5. [Objects](#objects)  
6. [Object Methods](#object-methods)  
7. [Iteration](#iteration)  
8. [Common Mistakes](#common-mistakes)  

---

## 1. Arrays  
**What they do**: Store ordered collections of values  

```javascript
// Create an array of fruits
const fruits = ["apple", "banana", "orange"];

// Mixed data types in array
const mixed = [1, "two", true, null];
```

### Key Array Features  
**1. Length Property**:  
```javascript
fruits.length; // Returns 3 (total items)
```  
**2. Access by Index**:  
```javascript
fruits[1]; // Returns "banana" (index starts at 0)
```  

---

## 2. Array Methods  
**Modify Original Array**  
1. **push()**: Add item to end  
   ```javascript
   fruits.push("mango"); // ["apple","banana","orange","mango"]
   ```  
2. **pop()**: Remove last item  
   ```javascript
   fruits.pop(); // Removes "mango"
   ```  
3. **unshift()**: Add item to start  
   ```javascript
   fruits.unshift("kiwi"); // ["kiwi","apple","banana"]
   ```  
4. **shift()**: Remove first item  
   ```javascript
   fruits.shift(); // Removes "kiwi"
   ```  
5. **splice()**: Modify at specific position  
   ```javascript
   // At index 1: remove 1 item, add "grape"
   fruits.splice(1, 1, "grape"); 
   ```  

**Create New Arrays**  
6. **slice()**: Copy portion of array  
   ```javascript
   const citrus = fruits.slice(1, 3); // ["banana","orange"]
   ```  
7. **concat()**: Merge arrays  
   ```javascript
   const allFruits = fruits.concat(["mango"]); 
   ```  

**Search Arrays**  
8. **indexOf()**: Find item position  
   ```javascript
   fruits.indexOf("banana"); // Returns 1
   ```  
9. **includes()**: Check existence  
   ```javascript
   fruits.includes("apple"); // Returns true
   ```  
10. **find()**: Get first matching item  
    ```javascript
    fruits.find(fruit => fruit.startsWith("b")); // "banana"
    ```  

**Transform Arrays**  
11. **map()**: Create new array by processing items  
    ```javascript
    const lengths = fruits.map(fruit => fruit.length); // [5,6,6]
    ```  
12. **filter()**: Create array with filtered items  
    ```javascript
    const longFruits = fruits.filter(fruit => fruit.length > 5); 
    ```  
13. **reduce()**: Calculate single value  
    ```javascript
    const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
    ```  

**Loop Through Arrays**  
14. **forEach()**: Execute function for each item  
    ```javascript
    fruits.forEach((fruit, index) => {
      console.log(`${index}: ${fruit}`);
    });
    ```  

---

## 3. Strings  
**What they do**: Store and manipulate text  

```javascript
const message = "Hello World!";
const name = 'Alice';
```

---

## 4. String Methods  
**Change Case**  
1. **toLowerCase()**: Convert to lowercase  
   ```javascript
   message.toLowerCase(); // "hello world!"
   ```  
2. **toUpperCase()**: Convert to uppercase  
   ```javascript
   message.toUpperCase(); // "HELLO WORLD!"
   ```  

**Search Strings**  
3. **includes()**: Check for substring  
   ```javascript
   message.includes("World"); // true
   ```  
4. **indexOf()**: Find substring position  
   ```javascript
   message.indexOf("W"); // 6
   ```  

**Manipulate Strings**  
5. **slice()**: Extract portion  
   ```javascript
   message.slice(6, 11); // "World"
   ```  
6. **split()**: Convert to array  
   ```javascript
   message.split(" "); // ["Hello", "World!"]
   ```  
7. **replace()**: Replace substring  
   ```javascript
   message.replace("World", "JS"); // "Hello JS!"
   ```  

**Clean Strings**  
8. **trim()**: Remove whitespace  
   ```javascript
   "  text  ".trim(); // "text"
   ```  

---

## 5. Objects  
**What they do**: Store key-value pairs  

```javascript
const user = {
  name: "Alice",
  age: 30,
  isAdmin: false,
  skills: ["JS", "HTML"],
  greet() {
    console.log(`Hello ${this.name}`);
  }
};
```

---

## 6. Object Methods  
**Access Values**  
1. **Dot Notation**:  
   ```javascript
   user.name; // "Alice"
   ```  
2. **Bracket Notation**:  
   ```javascript
   user["age"]; // 30
   ```  

**Modify Objects**  
3. **Add Property**:  
   ```javascript
   user.email = "alice@mail.com";
   ```  
4. **Delete Property**:  
   ```javascript
   delete user.isAdmin;
   ```  

**Object Tools**  
5. **for...in Loop**: Iterate properties  
   ```javascript
   for (const key in user) {
     console.log(`${key}: ${user[key]}`);
   }
   ```  
6. **Object.keys()**: Get all keys  
   ```javascript
   Object.keys(user); // ["name", "age"...]
   ```  
7. **Object.values()**: Get all values  
   ```javascript
   Object.values(user); // ["Alice", 30...]
   ```  

---

## 7. Iteration  
**Loop Through Data**  
1. **for...of** (Arrays):  
   ```javascript
   for (const fruit of fruits) {
     console.log(fruit);
   }
   ```  
2. **for...in** (Objects):  
   ```javascript
   for (const key in user) {
     console.log(key);
   }
   ```  

---

## 8. Common Mistakes  

1. **Confusing slice/splice**  
   ```javascript
   [1,2,3].slice(1);    // Copies [2,3] (original unchanged)
   [1,2,3].splice(1,1); // Modifies array → [1,3]
   ```  

2. **Modifying Objects**  
   ```javascript
   const obj1 = { a: 1 };
   const obj2 = obj1;
   obj2.a = 2; // Also changes obj1.a!
   ```  

---

