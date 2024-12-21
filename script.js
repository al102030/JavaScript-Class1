// // Declare and assign a variable
// let fullName = "YOUR_FIRST_NAME" + " " + "YOUR_LAST_NAME";
// console.log(fullName); // Output: YOUR_FIRST_NAME YOUR_LAST_NAME


// //=====================================

// // Declare a variable
// let x = -5;

// // Check if the number is positive, negative, or zero
// if (x > 0) {
//     console.log("Positive");
// } else if (x < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }
// // Output: Negative




// // Write a for loop to check even and odd numbers
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}: Even`);
//     } else {
//         console.log(`${i}: Odd`);
//     }
// }
// // Output: Odd or Even for each number from 1 to 15

// //=====================================


// // Create and modify an array
// let fruits = ["apple", "banana", "cherry"];

// // Add "orange" to the end and "mango" to the beginning
// fruits.push("orange");
// fruits.unshift("mango");

// // Remove "banana" from the array
// fruits.splice(fruits.indexOf("banana"), 1);

// console.log(fruits); 
// // Output: [ 'mango', 'apple', 'cherry', 'orange' ]

// //=====================================

// // Task 5: Objects and Methods
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     getDetails: function() {
//         console.log(`${this.make} ${this.model} (${this.year})`);
//     }
// };

// // Using a factory function
// function createCar(make, model, year) {
//     return {
//         make: make,
//         model: model,
//         year: year,
//         getDetails: function() {
//             console.log(`${this.make} ${this.model} (${this.year})`);
//         }
//     };
// }

// car.getDetails(); // Output: Toyota Camry (2020)

// let newCar = createCar("Honda", "Civic", 2022);
// newCar.getDetails(); // Output: Honda Civic (2022)

// //=====================================

// // Task 6: Ternary Operator
// let score = 85;
// let result = score >= 50 ? "Pass" : "Fail";
// console.log(result);
// // Output: Pass

// const book1 = {
//     title: 'B1',
//     author: 'Ali',
//     year: '2020',
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// };

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// Book.prototype.getAge = function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
// }

// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }

// const book2 = new Book('b2', 'borna', 2022)

// console.log(book2);
// book2.revise('2024');
// console.log(book2);

// function Magazine (title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }
// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine('mag1', 'ali', 2024, 'Jul');

// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

// let outPut;

// outPut = document.all;

// console.log(outPut);

// document.forms[0].id = 'new-id';

document.getElementById('app-title').title = 'Another title';