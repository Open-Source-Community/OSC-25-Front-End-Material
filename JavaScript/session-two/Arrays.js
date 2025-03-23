const fruits = ["apple", "banana", "orange"]; 


//-------------------------------------------------

//!splice() method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start: The index at which to start changing the array.
// deleteCount: An integer indicating the number of elements in the array to remove from start.
// item1, item2, ...: The elements to add to the array, beginning from start.

// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(2, 1); // Removes 1 element at index 2
// console.log(arr1); // Output: [1, 2, 4, 5]

// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(2, 0, 99); // Inserts 99 at index 2 without removing anything
// console.log(arr2); // Output: [1, 2, 99, 3, 4, 5]

// let arr3 = [1, 2, 3, 4, 5];
// arr3.splice(1, 2, 99, 100); 
// console.log(arr3); 

// let arr4 = [1, 2, 3, 4, 5];
// arr4.splice(2); // Removes everything from index 2 onwards
// console.log(arr4); // Output: [1, 2]

// let arr5 = [1, 2, 3, 4, 5];
// let removed = arr5.splice(1, 2);
// console.log(arr5); // [1, 4, 5]
// console.log(removed); // [2, 3] (returned values)


//------------------------------------------------------------

//!slice() method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// let arr1 = [1, 2, 3, 4, 5];
// let sliced1 = arr1.slice(1, 3); // Extracts elements from index 1 to 2 (excluding 3)
// console.log(sliced1); // Output: [2, 3]
// console.log(arr1); // Original array remains unchanged: [1, 2, 3, 4, 5]

// let arr2 = [1, 2, 3, 4, 5];
// let sliced2 = arr2.slice(2); // Extracts from index 2 to the end
// console.log(sliced2); // Output: [3, 4, 5]

// let arr3 = [1, 2, 3, 4, 5];
// let sliced3 = arr3.slice(-3); // Extracts last 3 elements
// console.log(sliced3); // Output: [3, 4, 5]

// let arr4 = [1, 2, 3, 4, 5];
// let sliced4 = arr4.slice(); // Extracts all elements
// console.log(sliced4); // Output: [1, 2, 3, 4, 5]

// let arr5 = [1, 2, 3, 4, 5];
// let copy5 = arr5;

// arr5.push(6);
// console.log(arr5); 
// console.log(copy5); 
//------------------------------------------------------------
// fruits.push(["pear", "peach"]);
// console.log(fruits); // Output: ["apple", "banana", "orange"]
//!Transforming Arrays
// const lengths = fruits.map((fruit) => fruit.length);
// console.log(lengths); // Output: [5, 6, 6]

// const longFruits = fruits.filter(fruit => fruit.length > 5);
// console.log(longFruits); 

// const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 1);
// console.log(totalLength); 

fruits.forEach((fruit, x) => { console.log(`${x}: ${fruit}`); });
