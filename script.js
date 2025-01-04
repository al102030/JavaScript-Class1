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

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year
// }

// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

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

// document.getElementById('app-title').title = 'Another title';


// class Flower {
//     constructor(name, color) {
//       this.name = name;
//       this.color = color;
//     }
  
//     setProperty(key, value) {
//       if (key in this) {
//         console.log(`Property '${key}' updated to '${value}'.`);
//       } else {
//         console.log(`Property '${key}' added with value '${value}'.`);
//       }
//       this[key] = value;
//     }
//   }
  

// const myFlower = new Flower("Rose", "Red");
// console.log(myFlower);
  
// myFlower.setProperty("size", "Medium");
// console.log(myFlower);
  
// myFlower.setProperty("color", "Blue");
// console.log(myFlower);
  
// myFlower.setProperty("type", "Wild");
// console.log(myFlower);

// function onClear() {
//     const listItems = document.querySelector('ul');
//     const items = document.querySelectorAll('li');
    
//     // listItems.innerHTML = '';

//     items.forEach(item => item.remove());
// }

// const claerBtn = document.querySelector('#clear');

// // claerBtn.onclick = function () {
// //     alert('Clear button clicked');
// // }

// claerBtn.addEventListener('click', onClear);

// // setTimeout(() => claerBtn.removeEventListener('click', onClear), 5000);

// // setTimeout(() => claerBtn.click(), 5000);


// const logo = document.querySelector('img');

// const onClick = () => console.log('Clicked on the logo');

// const onDoubleClick = () => {
//     if (document.body.style.backgroundColor != 'blue'){
//         document.body.style.backgroundColor = 'blue';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// };

// const onRightClick = () => console.log('Right Click Event');

// const onMouseDown = () => console.log('Mouse down Event');

// const onMouseUp = () => console.log('Mouse Up Event');


// // Event Listeners for mouse events
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);

// const inputItem = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// function onInput(e) {
//     // console.log(e.target.value);
//     heading.textContent = e.target.value;
// }

// function onChecked(e) {
//     console.log(e.target.checked);
// }
// function onFocus(e) {
//     console.log('Input is Focused');
//     inputItem.style.outlineStyle = 'solid';
//     inputItem.style.outlineColor = 'lightblue';
//     inputItem.style.outlineWidth = '5px';
// }
// function onBlur(e) {
//     console.log('Input is not Focused');
//     inputItem.style.outlineStyle = 'none';
// }

// inputItem.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
// inputItem.addEventListener('focus', onFocus);
// inputItem.addEventListener('blur', onBlur);


// const form = document.getElementById('item-form');


// function onSubmit(e) {
//     e.preventDefault();
    
//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     console.log(item, priority);
// }

// // form.addEventListener('submit', onSubmit);

// function onSubmit2(e) {
//     e.preventDefault();
     
//     const formData = new FormData(form);

//     const item = formData.get('item');
//     const priority = formData.get('priority');

//     console.log(item, priority);
// }

// form.addEventListener('submit', onSubmit2);

const removeBtn = document.querySelectorAll('.remove-item');

removeBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.closest('li').remove();
    });
});


// localStorage.setItem('name', 'Ali');
// console.log(localStorage.getItem('name'));

// document.cookie = 'name=John';
// document.cookie = 'age=30';

// sessionStorage.setItem('name', 'Ali');