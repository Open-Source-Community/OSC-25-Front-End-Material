# 📘 React Course – Session 3: State, Forms, and Lifecycle with Hooks

Welcome to **Session 3** of our React course!  
In this session, we'll explore some of the most fundamental and essential concepts in React: **component state, form handling, and lifecycle management** using the `useState` and `useEffect` hooks.

By the end of this session, you will be able to:
- Understand how state works in React using `useState`
- Handle form inputs and validations
- Use the `useEffect` hook to run side effects
- Understand how React lifecycle works with functional components

---

## 🧠 Table of Contents

1. [What is State in React?](#what-is-state-in-react)
2. [The `useState` Hook](#the-usestate-hook)
3. [Event Handling in React](#event-handling-in-react)
4. [Handling Forms](#handling-forms)
5. [Class Components (Reference Only)](#class-components-reference-only)
6. [Component Lifecycle](#component-lifecycle)
7. [The `useEffect` Hook](#the-useeffect-hook)
8. [Common Mistakes](#️-common-mistakes-in-session-3-topics)

---

## 📌 What is State in React?

In React, **state** refers to any data that a component needs to remember or track over time.

For example: A counter value, a form input, or whether a modal is open.

Each component can **own its own state**, and React re-renders the component automatically whenever the state changes.

---

## ⚙️ The `useState` Hook

React provides the `useState` hook to allow functional components to have state.

### 📌 Syntax:

```js
const [stateValue, setStateFunction] = useState(initialValue);
```

### ✅ Example 1: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

* `count` is the current value of the state
* `setCount` is a function to update it
* `useState(0)` means the initial value is `0`

### 🧠 Tips:

* Updating state causes re-render
* State updates are **asynchronous** and **batched**
* You can use **multiple** `useState` calls in one component

---

## 🔄 Event Handling in React

React handles events similar to HTML, but with camelCase and function references.

### ✅ Example: Click Event

```jsx
function ClickMe() {
  const handleClick = () => alert("You clicked me!");

  return <button onClick={handleClick}>Click Me</button>;
}
```

* Use `onClick` instead of `onclick`
* Don't call the function directly (`onClick={handleClick}` not `onClick={handleClick()}`)

---

## 📝 Handling Forms

### 📌 Controlled Components

In React, form elements like `<input>` should be **controlled** by React state.

📌 Note: There's also something called Uncontrolled Components, which are managed using `useRef`. We'll learn about them later. For now, just remember:
* Controlled = managed with `useState`
* Uncontrolled = managed with `useRef`

### ✅ Example: Input Field

```jsx
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>Your Name: </label>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

* `value={name}` makes the input controlled
* `onChange` updates the state with every keystroke

### ✅ Example: Simple Login Form

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## 🏛️ Class Components (Reference Only)

Although we use function components with hooks in this course, React used to rely heavily on class components. Here's what you need to know to understand lifecycle references like `componentDidMount`:

### ✅ Example:

```jsx
import React, { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    console.log("Timer mounted");
  }

  componentWillUnmount() {
    console.log("Timer will be removed");
  }

  render() {
    return <div>Timer Running...</div>;
  }
}
```

* `componentDidMount()` → runs after the component is added to the DOM
* `componentWillUnmount()` → runs just before the component is removed
* These lifecycle methods are replaced by `useEffect` in functional components
* We won't use class components, but you may see them in tutorials or job interviews

---

## 🔄 Component Lifecycle (Concept)

React components go through **3 phases**:

1. **Mounting** – When the component is added to the DOM
2. **Updating** – When state or props change
3. **Unmounting** – When the component is removed

In class components, we used methods like:
* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`

But in **functional components**, we use `useEffect`.

---

## 🔁 The `useEffect` Hook

`useEffect` allows you to perform **side effects** in function components:
* Fetching data
* Setting up timers
* Directly manipulating the DOM
* Subscribing to events

### 📌 Syntax:

```js
useEffect(() => {
  // code to run (side effect)
  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);
```

### ✅ Example: Run Once on Mount (like `componentDidMount`)

```jsx
useEffect(() => {
  console.log("Component mounted!");
}, []);
```

* Empty array `[]` means this runs **only once** after the component mounts

### ✅ Example: Run when state changes

```jsx
useEffect(() => {
  console.log("The count has changed:", count);
}, [count]);
```

* This runs **every time** `count` changes

### ✅ Example: Cleanup (like `componentWillUnmount`)

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(interval); // Cleanup
}, []);
```

### ✅ Example: Timer Component with Cleanup

```jsx
import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <div className="bg-[#0000002c] rounded-lg  p-5">
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default App;
```

* When you return a function from your `useEffect` callback, React treats it as a cleanup function
* React runs the cleanup function to clean up the previous effect before executing a new one

### ✅ Recap

| Concept            | Summary                                      |
|--------------------|----------------------------------------------|
| `useState`         | Adds and manages local component state       |
| `onChange`/`onClick` | Handles user input and actions             |
| Controlled Inputs  | Input fields controlled via state            |
| `useEffect`        | Runs side effects and lifecycle logic        |
| Cleanup Function   | Stops timers, listeners, etc. on unmount    |

---

## ⚠️ Common Mistakes in Session 3 Topics

### ❌ 1. Calling the state updater directly inside JSX

```jsx
// ❌ Wrong:
<button onClick={setCount(count + 1)}>Click</button>

// ✅ Correct:
<button onClick={() => setCount(count + 1)}>Click</button>
```

### ❌ 2. Forgetting to pass an empty array to `useEffect`

```js
// ❌ Runs on every render
useEffect(() => {
  console.log("Infinite loop!");
});

// ✅ Runs only on mount
useEffect(() => {
  console.log("Mounted!");
}, []);
```

### ❌ 3. Not preventing default form submission

```js
// ❌ Page reloads
const handleSubmit = () => {
  // ...
}

// ✅ Prevents refresh
const handleSubmit = (e) => {
  e.preventDefault();
  // ...
}
```

### ❌ 4. Using uncontrolled inputs by mistake

```jsx
// ❌ Not controlled
<input type="text" onChange={(e) => setName(e.target.value)} />

// ✅ Controlled
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

### ❌ 5. Wrong initial type in `useState`

```js
// ❌ Using string when you want numbers
const [count, setCount] = useState(""); // ❌

const [count, setCount] = useState(0); // ✅
```

### ❌ 6. Updating state based on old value

```js
// ❌ Might be stale
setCount(count + 1);

// ✅ Safer when depending on previous value
setCount(prev => prev + 1);
```

### ❌ 7. Not cleaning up side effects

```js
// ❌ Keeps running even after component unmounts
useEffect(() => {
  setInterval(() => console.log("tick"), 1000);
}, []);

// ✅ Clean it up
useEffect(() => {
  const interval = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(interval);
}, []);
```
