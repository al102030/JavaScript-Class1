# JavaScript Course

This repository contains examples and exercises on JavaScript classes, demonstrating key concepts such as inheritance, encapsulation, constructors, and methods. Ideal for learners looking to deepen their understanding of object-oriented programming in JavaScript.

## <span style="color: #ebce14;">About JavaScript</span>

JavaScript is a versatile, high-level `interpreted` programming language that was created in `1995` by `Brendan Eich` while working at Netscape. Initially designed to add interactivity to web pages, it has evolved into a powerful tool for server-side programming, mobile app development, and game development, thanks to frameworks like `Node.js`, `React`, and `Angular`. Its rise in popularity is fueled by its ability to run natively in browsers, making it essential for front-end development and enabling the creation of dynamic, user-friendly web applications. Today, JavaScript is one of the `core technologies` of the web, alongside HTML and CSS, and is utilized by millions of developers worldwide for various applications, reflecting its immense power and flexibility in the tech industry .

### <span style="color: #44cecc;">Getting Start</span>

- <span style="color: Red;">What is the JavaScript?</span>

  - It is one of the most popular and fast growing programming language in the world
  - Big companies like `Paypal`, `NetFlix`, `WallMart`, and etc. build their entire website using JavaScript
  - You can work as Front-end or Back-end or Full-Stack developer
  - JavaScript Today
  - ![](assets/1.png)
  -
  - JavaScript designed to execute in <span style="color: #0099ff;">browsers</span>
  - JavaScript engin in FireFox is `FireMonkey` and in Chrome is `V8`
  - In 2009 an engineer imbedded Chrome V8 engin inside a C++ code and create <span style="color: #0099ff;">Node</span> for back-end side of programming with JavaScript

- <span style="color: Red;">What is JavaScript Used for?</span>

  - <span style="color: #0099dd;">DOM</span> (Document Object Model) manipulation.
  - It can change DOM objects dynamically like changing an attribute or tag, content of a div od styles of an element
  - <span style="color: #0099dd;">Event handling</span>. It can response to clicks, drags, hovers and the like
  - <span style="color: #0099dd;">Asynchronous requests</span>. like Http request through working with backend or AJax like events
  - <span style="color: #0099dd;">Animation effects</span>
  - <span style="color: #0099dd;">Data Manipulation</span> It's full featured language for working with arrays(Sorting, filtering, etc)
  - <span style="color: #0099dd;">Storing Data</span> (Cookies, localStorage, etc)
  - <span style="color: #0099dd;">Single Page Application</span> (SPA) (no need to reload single pages)
  - <span style="color: #0099dd;">Creating APIs and Web Servers (Node.js, Deno)

- <span style="color: Red;">Why Learn JavaScript?</span>

  - ![](assets/2.png)

- <span style="color: Red;">JavaScript Execution in Browser</span>

  - Open FireFox or Chrome and inside developer tools open console and write first JS code (`alert`, `log`, `a math operation`)

- <span style="color: Red;">Setting Up the Development Environment</span>

  - We can write our JvaScript code inside any text editor like notepad or Sublime. Also we can work with VSCode
  - Install `VSCode` and `Node` (It's not a Node course) for windows
  - Create essential file (`.html`) and `Live Server` for starting the project
  - Install `git` (We learn the basics)
  - Create your first JavaScript code inside your index file using `script` element
  - Put your script tag at end of the file before body closing tag as best practice
  - By placing your script tag you don't make your webpage busy or never loose any elements
  - Write your first statement between your script tags
  - Explain `console.log('Hello World!');`
  - Add a comment to your code using `//`

- <span style="color: Red;">Separation of Concerns</span>

  - Create a JavaScript file and transfer all your code into it
  - In a real world application we can have lots of JS file
  - Reference your JS file in your script tag using `src="..."` attribute

- <span style="color: Red;">JavaScript in Node</span>

  - Inside terminal or command prompt go to the project folder and execute JS file using this command: `node index.js`
  - Run that command inside VSCode internal integrated terminal

- <span style="color: Red;">Using the Console</span>

  - Check Chrome or Firefox developer tool and show warnings in console (`Ctr+Alt+K`)
  - Also we can type JavaScript code inside console
  - Talk about `undefined` statement inside console (Also `new Date();`)
  - Use `clear()` to clean up your console (`Ctrl+L`)
  - Talk about console object and show all types(`i1`)
  - Remind the `Emmet` toolkit
  - Install `JavaScript ES6 Snippets` Extension and talk about it (`clg`, `tryc`) and all kind of console methods (`log`, `error`, `warning`, `table`) (`i6`)

- <span style="color: Red;">Comments and Shortcuts</span>

  - We use `comments` for documenting code or explaining things in the human readable ways
  - Sometimes we use comments to disable code for testing
  - `//` only work on one line and we can comment a line using `Ctrl+/` keyboard Shortcut
  - Comment multiline we can use `/*...*/` of codes by selecting them and using keyboard Shortcut
  - By holding `Ctrl` and pushing `left arrow` or `right arrow` we can jump to the end or start of a line (Also `home` and `end` keys)
  - By holding `alt` and pressing `up` and `down` arrows we can move a line to the top or bottom
  - Also by holding `alt+shift` and press `down` button we can duplicate a line
  - By holding `shift+ctrl` and highlight a word we can edit all instance of that
  - We can hold `alt` and click different places and make change there altogether

### <span style="color: #44cecc;">Types</span>

- <span style="color: Red;">Variables</span>

  - To save data in memory and recall it for further uses we use variables
  - This is the most fundamental concept in programming
  - ![](assets/3.png)
  -
  - We cannot use a variable before initializing it (`*`) (`img7-2`)
  - Talk about the differences between `var` and `let`
  - Before ES6 we use `var` keyword to declare a variable. Now we use `let` keyword
  - Remember to terminate your codes in each line with `;` notation
  - Default value for all variable in JavaScript is `undifined` (`i2`)
  - Naming conventions for variables in JavaScript:
    - Never use `reserved keywords` (like let / check it)
    - They Should be `meaningful`
    - They cannot start with a `number`
    - They cannot contain `space` (' ') or `hyphen` ('-')
    - Typically we use `camel notation` convention in JavaScript
    - JavaScript is `Case Sensitive` language
    - We can declare multiple variable in one line and separate them using `,` notation (`*`)
    - In modern best practice we declare each variable in different line
    - Talk about different forms of naming and valid characters (`*`) (`i7-3`)

- <span style="color: Red;">Constants</span>

  - When we want to have a variable that its value never change through the execution of the code until we use `constant` keyword instead of `let` (`i3`)
  - Check the error in the console when you try to change a constant value

- <span style="color: Red;">Primitive Types</span>

  - In JavaScript we have two categories of types
  - ![](assets/4.png)

  - In the case of primitive types, we have Five different primitive type in JavaScript : (`img4`)
    - <span style="color: #00ff00;">Numbers</span>
    - <span style="color: #00ff00;">Strings</span>
    - <span style="color: #00ff00;">Booleans</span>
    - <span style="color: #00ff00;">Undefined</span>
    - <span style="color: #00ff00;">null</span>
    - In ES6 update another primitive type named `symbol` and `Bigint` that we talk about later

- <span style="color: Red;">Dynamic Typing</span>

  - JavaScript is a dynamic type language. It means you can change a variable type by assigning to new value
  - ![](assets/5.png)
  - Test it in the console using `typeof` statement
  - `undefined` is actually a type also a value(`i5`)

- <span style="color: Red;">Reference Types</span>

  - In the case of Reference types, we have three different Reference type in JavaScript :
  - <span style="color: #ffff00;">Object</span>
  - <span style="color: #ffff00;">Array</span>
  - <span style="color: #ffff00;">Function</span>
  - Notice all reference type are a kind of object (except for function - look at the documents)
  - Object in JavaScript and Object in real life is completely the same
  - We can put our related primitive types inside an object to reference them later
  - Keys inside an object are properties of that object (`i8`)
  - We can change the value of properties inside an object in two different ways (`i9`)
    - Using `Dot notation` (Is better way)
    - Using `Bracket notation`
  - We can use bracket notation through the runtime and give the control it to user (`i10`)

- <span style="color: Red;">Array</span>

  - When we want to save a list of objects or together like user selected colors, we use a data structure named `arrays`
  - `[]` is array literal and we use it to collect items
  - We use `indexes` to access items in an array and it starts from `0`
  - Also we can add an item to an array using index system and length of array is dynamic (`i11`)
  - The type of object in array is dynamic and we can assign different type of items in an array
  - Arrays are a kind of object and it has lots of properties and methods (typof in console) (`i12`)
  - Talk about `length` property
  - When we declare a constant array or object we can change the properties of them by using `push()` method or dot notation (`i12-1`)

- <span style="color: Red;">Function</span>

  - Functions are one of the fundamental building blocks in JS
  - A function is a set of statement that perform a task or calculate a value
  - Talk about how to declare a function and its structure (`i13`)
  - A function can have inputs that change its behavior
  - A variable that we use in a function parentheses during the definition a function is called `parameter` and it has meaning only inside the function (`img14`)
  - Actual value that we give to a function is a `argument`
  - We can reuse a function number of times
  - Expand greet function with two variables (`i15`) and talk about undefined arguments
  - Write two types of functions and initialize a variable using `return` value of calculation function (`i16,17`)
  - We can pass a variable or a expression (like another function) to a function

- <span style="color: Red;">Where they are saved?</span>

  - ![](assets/6.png)
  - (`i17-2`)
  - ![](assets/7.png)

- <span style="color: Red;">Type Conversion (Type Casting)</span>

  - We can change a variable type to another by using these functions and methods: (`i18`)
  - `parseInt()` or `Number` to convert a string variable to an integer variable (`+`sign = unary)
  - `toString()`(its a method) or `String()` to convert an integer variable to a string variable
  - `parseFloat()` to convert a string variable to a floating point number variable variable (compare to parseInt())
  - `Boolean()` to convert a number variable to a boolean variable variable
  - Check when you try to convert a character to integer (`i19`)
  - Talk about `NaN` (Not a Number)

### <span style="color: #44cecc;">Operators</span>

<span style="color: Red;">Operators</span>

- We use operators along with variables and constants to create expressions and with these expressions we can create logics and algorithms
- ![](assets/8.png)
- We have different type of operators:

  - <span style="color: #00ff00;">Arithmetic</span> Operators
  - <span style="color: #00ff00;">Assignment</span> Operators
  - <span style="color: #00ff00;">Comparison</span> Operators
  - <span style="color: #00ff00;">Logical</span> Operators
  - <span style="color: #00ff00;">Bitwise</span> Operators

- <span style="color: Red;">Arithmetic Operators</span>

  - We can use these mathematic operators in JS: (`i20`)
  - `operand operator operand`
    - `+` for addition
    - `-` for subtraction
    - `*` for multiplication
    - `/` for division
    - `%` for remain of division
    - `**` for Exponent
    - `++` for increment (Position of operators before of after the operand is important)
    - `--` for decrement (Position of operators before of after the operand is important)

- <span style="color: Red;">Assignment Operators</span>

  - We use `=` operator for assigning a value to a variable
  - Talk about `increment` and assignment operator
  - Talk about augmented assignment (`x += 5`)
  - Other augmented assignment like `*=` `/=`, ...

- <span style="color: Red;">Comparison Operators</span>

  - We use comparison operator to compare value of a variable to something else or two things (`i21`)
  - Comparison operators like:
    - `>` Greater than
    - `>=` Greater than or equal
    - `<` less than
    - `<=` less than or equal
    - All above operators are `Relational` operators
    - `===` is equal
    - `!==` is not equal
    - All above operators are `Equality` operators
  - Result an expression that contain a comparison operator is boolean

- <span style="color: Red;">Equality Operators</span>

  - We have two kinds of equality operators (`i22`)
    - <span style="color: #00ff00;">Strict Equality</span> `===` (same type + same value)
    - <span style="color: #00ff00;">Lose Equality</span> `==` (same value)
    - In most of the time try to use strict equality, because it's more precise and accurate

- <span style="color: Red;">Type Coercion</span>

  - JavaScript convert type of a value automatically in arithmetic operation between two different operand type (`i22-2`)
  - JavaScript return different type in the case of `+` and `*` based on type coercion

- <span style="color: Red;">Ternary Operators (Conditional)</span>

  - We can define a variable with conditional value using ternary operator (`i23`)
  - Structure: `variable = condition ? value1 : value2`

- <span style="color: Red;">Logical Operators</span>

  - We have three types of logical operators in JavaScript:
    - `AND` which is indicated by `&&`: It returns `true` if both operands is true (`i24`)
    - Talk about real world use case of logical operators (`i25`)
    - `OR` which is indicated by `||`: It returns `true` if on of operands is true (`i26`)
    - `NOT` which is indicated by `!`: It returns `true` it reverse the value of a logical operand (`i27`)

- <span style="color: Red;">Logical Operators with Non-booleans</span>

  - We can use logical operators for `Non-logical` values
  - `The result of a logical expression is not necessarily true ore false`
  - There are all `falsy` values in JavaScript: (`i28`)
    - `undefined`
    - `null`
    - `0`
    - `false`
    - `''`
    - `NaN`
  - Anything that is not falsy is `Truthy`
  - Talk about Short-circuit and real example of it (`i29`)

- <span style="color: Red;">Bitwise Operators</span>

  - It's far beyond the course but we try to cover it
  - Talk about binary numbers (`8 bytes`)
  - Bitwise `or` indicate by `|` (`i30`)
  - Bitwise `and` indicate by `&`
  - Talk about real world example related to bitwise operators (`i31`)

- <span style="color: Red;">Operators Precedence</span>

  - Evaluation of a expression that have operators may have different result based on the order of operators (`i32`)
  - ![](assets/9.png)
  - Parentheses have highest precedence

- <span style="color: Red;">Exercise</span>

  - Write a piece of code that swap values of two variable (`i33, 34`)

### <span style="color: #44cecc;">Control Flow</span>

- <span style="color: Red;">If... Else</span>

  - In JavaScript we have two kinds of conditions
    - `if...else`
    - `switch...case`
  - By using if condition we can check a statement and have different kind of reactions
  - The `if` structure is: `if (condition) {statement}` ('i35')
  - The `if...else` structure: `if (condition) {statement1} esle if (another_condition) {statement2}`
  - Work on a real world example (`i36`)

- <span style="color: Red;">Switch...Case</span>

  - We use variables instead of conditions in using `switch...case`
  - The `switch...case` structure is: `switch(variable){case value1: statement; break; case value2: statement; break; ...}` (`i37`)
  - There is no limitation for using `cases`
  - We can use `default` statement optionally when none of cases are true
  - We can compare variables by using `switch...case` statement but in the case of booleans it's better to use `if` statement
  - Using of switch...case become deprecated in new programming style

- <span style="color: Red;">Loop</span>

  - We use loops to repeat an action for number of times
  - Talk about poor way of logging something five times
  - We have five kind of loops in js
    - `For` loop
    - `While` loop
    - `Do...While` loop
    - `For...in` loop
    - `For...of` loop

- <span style="color: Red;">For Loop</span>

  - Structure: `for (initialExpression; condition; incrementExpression) {Statement}`
  - `i` in for loop is `loop variable`
  - Talk about the working cycle on a real example (`i38-39-40`)
  - Talk about for loop indexing and different conditions

- <span style="color: Red;">While Loop</span>

  - In for loop, loop variable is the part of the loop but in while loop we have to declare it externally
  - Loop variable works only in the loop scope but while loop variable is out of the scope
  - Structure: `While (condition) {Statement; increment statement}` (`i41`)
  - Talk about the working cycle on a real example

- <span style="color: Red;">Do...While Loop</span>

  - `do..while` loops are always executed at least once even th condition evaluate to false
  - Structure: `do {Statement; increment statement}  while(condition) ` (`i42`)
  - Show differences between while and do...while loop by an example
  - In modern programming using do...while loop is not common and it's not practical

- <span style="color: Red;">Infinite Loop</span>

  - Infinite loops can continue infinitely and cause crash for your browser or computer
  - Explain it through a while loop without increment statement (`i43`)

- <span style="color: Red;">For...in Loop</span>

  - We use for...in loop on a iterable object like array or properties of an object
  - Structure: `for (variable in object) {statement}` (`i44`)
  - Talk about it through an real example of array and object
  - We don't use this loop for array typically (`i45`)

- <span style="color: Red;">For...of Loop</span>

  - It is completely new in JS (After EcmaScript6)
  - It doesn't need to handel indexes and the loop is over the items

- <span style="color: Red;">Break and Continue</span>

  - If in some case we need to jump out of the loop quickly we use `break` statement
  - If in some case we need to jump at beginning of the loop quickly we use `continue` statement
  - continue is a king of legacy from old fashion programming in it's not common

- <span style="color: Red;">Exercise</span>

  - `Number 1`: Write a function that takes two numbers and returns the maximum of the two (`i48-49`)
  - `Number 2`: Write a function that takes width and height of a picture and define the frame of it (landscape or portrait) (`i50-51`)
  - `Number 3`: Write a `fizzBuzz` function (`i52-53`)
  - `Number 4`: Write a function that check a car speed and return ok if it's under a specific value (`i54-56`)
  - `Number 5`: Write a function that returns all numbers till a specific number with its `Odd/Even` label (`i57-58`)
  - `Number 6`: Write a function that returns number of all truthy elements inside a array (`i59-60`)
  - `Number 7`: Write a function that returns all string properties inside a object (`i61-62`)
  - `Number 8`: Write a function that returns the sum of all divisible numbers by 3 and 5 from 0 to a limit number (`i63-64`)
  - `Number 9`: Write a function that returns the average of all scores of a student in the form of label (`i65-67`)
  - `Number 10`: Write a function that gets a number and returns a triangle of stars with height of that number (`i68-69`)
  - `Number 11`: Write a function that returns all prime numbers up to a limit (`70-72`)

### <span style="color: #44cecc;">Objects</span>

- <span style="color: Red;">Basics</span>

  - Why we define objects (Highly related properties)(`i73`)
  - A property of an object can be another object
  - A compose of properties and functions inside an object is the refer to OOP (Object Oriented Programming)(`i74`)
  - We call a function of an object, `method`

- <span style="color: Red;">Factory Functions</span>

  - To avoid duplication and nemours bug fixing we use factory functions (`i75-78`)

- <span style="color: Red;">Constructor Functions</span>

  - Naming convention for defining a constructor function is different (`i79`)
  - We use `Pascal` notation instead of `Camel case` notation
  - We use <span style="color: #09f;">this</span> statement to initialize an object instead of returning it
  - In JS objects are dynamic
  - We use `new` statement to define a new object in this method
  - By using new three actions are happen
    - Creating and empty object
    - Pointing methods and properties to the empty object
    - Return new object
  - To recap,Talk about the differences between two methods
  - The second method is old fashion (C++, Java)

- <span style="color: Red;">Dynamic Nature of Objects</span>

  - We can always add or remove a property or method from objects anytime (`i80`)
  - We cannot reassign an object (`=`) because of `const` statement

- <span style="color: Red;">Constructor Property</span>

  - Every object in JavaScript has property called `constructor` (`i81-83`)

  - This property references to the function that create that object
  - Talk about other kinds of objects like strings in js

- <span style="color: Red;">Functions are Objects</span>

  - Actually functions in JS is a kind of object and by using dot notation we can see all methods and properties which related to a function (`i84-85`)
  - We can use `call` and `apply` methods on our function to pass the variables
  - If we never use `new` statement for definition of an object it refers to global constructor object which is `window`

- <span style="color: Red;">Value vs Reference Types</span>

  - Actually in JavScript we have two types of values: Primitive and Objects (`i86-92`)
  - Variables store independently in JS but objects store in another place (reference)
  - Local variables are the best example of separation of the stor location related to two different variables
  - Remember that primitives are copied by their values but Objects are copied by their reference

- <span style="color: Red;">Enumerating Properties of an Object</span>

  - Typically we use `for...in` loop to iterate over an Object properties (`i93-94`)
  - An object is not iterable and you cannot use `for...of` loop over it. It works only with arrays and maps
  - By using `keys()` and `entries()` methods we can use for...of loop over an object
  - Talk about their functionality and performance
  - We can use `in` operator to check the existence of a property in an object

- <span style="color: Red;">Cloning an Object</span>

  - By using a simple for loop we can assign all properties of an object to another (`i95-96`)
  - Also by using `assign()` method we can do the same thing like above
  - `Spread` operator (`{...}`) is the third way of assigning an object to another

- <span style="color: Red;">Garbage Collection</span>

  - We don't need to allocate and de-allocate memory to an object in JavaScript (Like C++ and Java)
  - JavaScript engin has something called `Garbage Collector` which is doing that for use

- <span style="color: Red;">Math</span>

  - Search JavaScript Math module in Google
  - Talk about the document and use some Math module methods (round, max, min,...)

- <span style="color: Red;">String</span>

  - We have two types of string in JS: `String Primitive` , `String Object`
  - Any time when we use dot notation for an string JS engin wraps that to an object string automatically
  - Search for JavaScript strings in Google (`i97-100`)
  - Talk about scape characters

- <span style="color: Red;">Template Literals</span>

  - It's better to use template literal to present strings in JS (`i101-103`)
  - Talk a out other Literals
  - Another benefit of using template literal is ability of using `placeholders`

- <span style="color: Red;">Date</span>

  - We can use Date Object in JS in 6 different ways (`i104`)
  - Using this object without any argument returns current date time
  - To find all possible formats for string value in Date object it's better to read documentation (JavaScript date in Google)
  - Use `toDateString()` method to convert date to string

- <span style="color: Red;">Exercise</span>

  - `Number 1`: Create an address object with three properties and a function which returns all properties and their values of this object(`i105`)
  - `Number 2`: Create address object using factory function and constructor function(`i106-107`)
  - `Number 3`: Write two functions that check equality and resemblance of two different object(`i108-110`)
  - `Number 4`: Write a Blog post object(`i111-112`)
  - `Number 5`: Write a constructor function for our Blog post object(`i113`)

### <span style="color: #44cecc;">Arrays</span>

- <span style="color: Red;">Introduction</span>

  - In this part of the course we try to learn how to do different operations over arrays like adding, finding, removing, splitting, and combining

- <span style="color: Red;">Adding Elements</span>

  - We cannot reassign an constant array to a new value (`i114-115`)
  - By using `.push()` method we can add a value or a list of values to the `end` of an array
  - By using `.unshift()` method we can add a value or a list of values to the `beginning` of an array
  - By using `.splice()` method we can add a value or a list of values to the `middle` of an array

- <span style="color: Red;">Finding Elements (Primitives)</span>

  - By using `.indexOf()` method we can Find a value in our array
  - If that element doesn't exist it returns `-1`
  - Also by using `.lastIndexOf()` method we can Find the last repetition of a value in our array
  - Instead of all checking index of an elements we can use `.include()` method
  - Talk about the condition for if statement
  - Second parameter in all methods we talk about is the first index that we want to our search begin

- <span style="color: Red;">Finding Elements (Reference Types)</span>

  - `.include()` doesn't work on reference types (because of two different references) (`i118-119`)
  - We can `.find()` method. Search for it in Google
  - We use a predicate (Callback) function to pass reference type object to and perform a operation on its elements
  - This method returns an Item or `undefined` (if it doesn't find anything)
  - Also We can `.findIndex()` method. This method returns index of item or `-1`

- <span style="color: Red;">Arrow Functions</span>

  - If you want to pass a function as callback function or argument to a method you can use different syntax (`i120`)
  - You can remove parenthesis and return statement and make your function simpler

- <span style="color: Red;">Removing Elements</span>

  - By using `.pop()` method we can remove a value or a list of values from the `end` of an array (`i121`)
  - By using `.shift()` method we can remove a value or a list of values from the `beginning` of an array
  - By using `.splice()` method we can remove a value or a list of values from the `middle` of an array

- <span style="color: Red;">Empty an Array</span>

  - Solution1: By assigning an array to `[]` we can make it empty (`i122-125`)
  - Solution2: Also by setting an array's length to 0 we can make it empty and garbage collecting issue is going to be solved
  - Solution3: By using `.splice()` method we can make an array empty
  - Solution4: (Not recommended) Using a while loop and `.pop()` method
  - Two first Solution is my preferences

- <span style="color: Red;">Combining and Slicing Arrays</span>

  - We can use concatenate (`.concat()`) method to combine two different array (`i126`)
  - In the opposite we can slice an array to sub arrays using `.slice()` method (`i127-129`)
  - Using `.splice()` method without argument return a copy of original array
  - Remember primitive and reference types behavior about saving in the memory

- <span style="color: Red;">The Spread Operator</span>

  - The spread operator can combine items of two different array into a combine array (`i130-131`)
  - We can add new items to combine array during spreading operation

- <span style="color: Red;">Iterating an Array</span>

  - By using `for...of` statement we can iterate over an array (`i132-134`)
  - Also by using `forEach()` method and passing a function we can do the same thing
  - Make sample your callback function in arrow function format
  - This call back function can return index of each item

- <span style="color: Red;">Joining Arrays</span>

  - By using `.join()` method we can stick all elements on an array together (`i135-136`)
  - Talk about `.split()` method and using it on a string with `.join()` method
  - URLs are a good example for using this method in real world problems

- <span style="color: Red;">Sorting Arrays</span>

  - By using `.sort()` method we can sort an array (`i137-`)
  - By using `.reverse()` method we can sort an array in reverse order
  - To sort an array of objects we need to pass an optional parameter (a special `function`) to this method
  - Talk about the differences between lower and upper case characters and ascii table (Google it)

- <span style="color: Red;">Testing Elements of an Array</span>

  - By using `.every()` method you can check a criteria over all elements of an array (`i140-141`)
  - It takes three parameters which the first one is a callback function
  - If every method find a value that return false stop checking and return false value
  - If you want that only one element in an array have a specific criteria use the `.some()` method

- <span style="color: Red;">Filtering an Array</span>

  - We can filter an array based on a criteria using `.filter()` method (`i142-143`)
  - Filter method returns a new array which in it all items matches to our function criteria
  - Write down your filter function using a sample arrow function
  - Talk about filtering in real-world problems

- <span style="color: Red;">Mapping an Array</span>

  - We can map an array items to something else based on a criteria using `.map()` method (`i144-149`)
  - Map all items of your array to an object using `.map()` method
  - Optimize your arrow function and use `()` instead of return statement
  - Chain your `.filter()` and `.map()` method to simplify your code
  - It's because of that the map and filter method return another array

- <span style="color: Red;">Reducing an Array</span>

  - To calculate the sum of all items inside an array we can use a loop over it or use `.reduce()` method (`i150-151`)
  - First parameter of this method is a callback function with two parameters `(accumulator, currentValue)`
  - Second parameter of `.reduce()` method is the initial value of accumulator which we set it to `0`
  - If we forget to set the accumulator to `0` at beginning of the execution of reduce method it going to be set as first item in the array

- <span style="color: Red;">Exercises</span>

  - `Number1`: Write a function that take to parameter and return of all numbers between two numbers as an array (`i152-153`)
  - `Number2`: Write a function that works like `.includes()` method (`i154-155`)
  - `Number3`: Write a function that takes two array and remove all items of second array from the first one (`i156-157`)
  - `Number4`: Write a function that takes an array and two parameters and move an item which to another offset (`i158-159`)
  - `Number5`: Write a function that takes an array and an item and returns the number of occurrence of that item (`i160-162`)
  - `Number6`: Write a function that takes an array and returns the largest number in that array (`i163-166`)
  - `Number7`: Write a function that takes an array of objects and returns the sorted form of it based on the rating (`i167-168`)

### <span style="color: #44cecc;">Functions</span>

- <span style="color: Red;">Function Declarations vs. Expressions</span>

  - We can define a function in JavaScript in two different way: `Declaration` and `Expression` (`i169`)
  - In the second way we assign our function to a variable like an object
  - We don't terminate a function declaration using a `;` by conventions

- <span style="color: Red;">Hoisting</span>

  - We can call a function which is defined by function declaration syntax before it's definition (`i170`)
  - When we define a function using function declaration syntax JS engin move it to the top of the code virtually and this is what we call `Hoisting`

- <span style="color: Red;">Arguments</span>

  - JS is a dynamic type language (`i171-174`)
  - Call `argument` object for our function and explain it
  - We can iterate over argument object for a function and also we can remove parameters

- <span style="color: Red;">The Rest Operator</span>

  - Don't confuse rest and spread operators (`i175-177`)
  - It turns your arguments to an array and you can use `.reduce()` method to operate on it
  - We cannot add any argument after our rest operator. Rest parameter should be the last formal parameter

- <span style="color: Red;">Default Parameters</span>

  - By using `OR` logical operator (`||`) we can define a default value for an actual parameter (`i178-180`)
  - After setting a default value for a parameter all parameters after it must have default value

- <span style="color: Red;">Getters and Setters</span>

  - Using regular methods to present properties of an object is read only and you can't change properties in this way
  - We use `getters` to access properties of an object (`i181-182`)
  - By using `setters` we can change an mutate them
  - Prefix your method with get statement and this way you can have access to this method like a property and use it like a property
  - By using setter and .split() method you can mutate this string value inside your object

- <span style="color: Red;">Try and Catch</span>

  - All kinds of errors in JavaScript:
    - `Syntax Error`: Code violates JavaScript syntax rules. Detected at compile time.
    - `Reference Error`: Accessing undeclared or out-of-scope variables. Detected at runtime.
    - `Logical Error`: Code produces incorrect results. Detected during debugging.
    - `Exception Error`: Code runs into unexpected situations. Can be handled with `try...catch`
  - In last Example if user set a none String value to getter property it can cause a error in your code (`i183-184`)
  - For error handling we need to use `defensive programming`
  - If we need to report the error to user we can trow an exception
  - By using `Try...Catch` statement we can catch error message and show it in `alert` or `red label` form
  - After throw an exception codes after it don't be executed

- <span style="color: Red;">Local vs Global Scope</span>

  - A scope of a variable or constant determines where that variable or constant is accessible (`i185-187`)
  - When we define a variable using `const` or `let` their scope is limited to the block in which they are defined
  - Talk about other code blocks like if, for, or functions
  - When we define a variable outside of any block this variable has `global scope` and can be accessible anywhere in the code
  - A global variable can be changed inside a inner scope
  - As long as you can, you should avoid using a global variable in your code

- <span style="color: Red;">Let vs Var</span>

  - The concept of block is right even in the case of `{}` absence (`i188-191`)

  - Check Scope error when using `var` keyword for a i variable
  - When you declare a variable with `var` keyword its scope is not limited to the block in which it's defined
  - `Let` and `const` (ES6) create block-scope variables and `var` creates function-scope variable
  - Defining a `Global` variable using `var` keyword attach this keyword to window `object` and it's `bad`

- <span style="color: Red;">The "This" Keyword</span>

  - `This` references the `Object` that is executing the current function (`i192-201`)
  - If we use `this` of a function this has the reference of the object of this function
  - In the case of a regular function (when it's not part of an object) `this` references to global object (window, global)
  - In the case of constructor functions `this` has the reference of a new object
  - Remember that a call back function is a regular function and this in for it has the reference of window object
  - Use the second parameter of `forEach()` method to pass your arguments
  - We can save `this` value in another variable before calling a function, to save current object reference
  - Also we can use `call` and `apply` function to change this value
  - The better way and prefer way is using arrow function because arrow functions inherit current object variable from previous block

- <span style="color: Red;">Exercises</span>

  - `Number1`: Write a function called `Sum` that takes a varying number of arguments and return their sum. Also modify this to accept an array as argument (`i201-203`)
  - `Number2`: Write an object which has a property and a method which is only readable and not writeable (`i204`)
  - `Number2`: Change the `countOccurrence()` function which we practice in the last section and handel its errors if we pass boolean value instead of an array (`i205`)

### <span style="color: #44cecc;">Object Oriented Programming (OOP)</span>

- <span style="color: Red;">Basics (Recap)</span>

  - Talk about an object, property, method, dot notation and it's literal
  - Talk about object oriented point of view and the concept
  - Talk about how can we declare a string primitive (Not An actual object) or a string object
  - Also talk about window object (`Browser`) and global object (`Node`)again and two kinds of programming
  - Example of a simple object and its literal
  - We can call all values by `Object.values()` method and keys by using `Object.keys()` method

- <span style="color: Red;">Constructors</span>

  - Talk about constructor and instantiation
  - And write a constructor for book object and add a method to it

- <span style="color: Red;">Prototypes</span>

  - You can add your methods to prototype of your object and create a `prototype property`
  - This way of defining a method move that method to the property list of our object
  - By doing that this method never be created for all instance and they can be callable when an object call them
  - An example of writing a prototype method for students (`.getAge()` method)
  - By using another function called `revise` we can change a property value

- <span style="color: Red;">Inheritance</span>

  - By using `.call()` method we can inherit from another object constructor function in a new one
  - To inherit prototype method we need to use `.create()` method of `Object`
  - Also we need to change the constructor name of our new constructor function

- <span style="color: Red;">Object Create</span>

  - There is different ways to create an object
  - We can create an object using `Object.create()` method and add properties after (Through another object as parameter which contain other properties)

- <span style="color: Red;">Class</span>

  - Talk about classes and how to implement constructor and other properties inside it
  - to add a constructor to our class we can use the `constructor` statement as method name and it's different from `constructor function`
  - We can create our objects based on the `class definition` and its the better and easy way
  - Also add `revise` method to your class definition and revise your book object
  - We can create a `static method` in our class which is only callable with the actual class and you don't need to instantiated for using this method

- <span style="color: Red;">Sub Class</span>

  - By using `extends` statement we can create a sub class based on our original class
  - `supper()` function can call all the properties from the original class
  - Using inheritance in ES6 version of JS and class definition is better and easy way to use OOP in our code

### <span style="color: #44cecc;">The Document Object Model (DOM)</span>

- <span style="color: Red;">Intro to DOM</span>

  - ![](assets/10.png)
  - DOM is a structure that we can interact with via JavaScript
  - We can use other languages to do that but in most cases we use JS
  - It is a kind of tree structure
  - ![](assets/11.png)
  -
  - Talk about window object and also document object (cld)
  - To get HTML elements in our page we can call the sections like body or head after document property
  - Also by using `innerHTML` property we can do the same thing
  - By using `innerText` property we can get the actual text nodes
  - By using `links` property we can get the URLs in the page and it returns an array called `HTMLCollection`
  - We can use it like an array and its indexing ability
  - And we can change anything in the page using these properties temporary using assignment symbol (`=`)
  - We can also use methods like `write` inside the page using document property
  - Also we have methods to select elements and tags in the page like `getElementById()`
  -
  - Also we have methods to select elements a specific tag like `querySelector()`

- <span style="color: Red;">Document Element Properties</span>

  - Initialize Sample page to work with DOM
  - Get all (`all` property) Document items in a variable and console it (Use it in the form of an array)
  - By using `documentElement` we can get all HTML elements in the page
  - Test some properties like `head`, `body`, `children`, `!doctype`, `domain`, `URL`, `characterSet`, `contentType`, `forms`(it's like an array)
  - We also can change links by using `links` property and set it to a new value (It's not the best way)
  - We can use `forEach` method on our elements (first we should convert them to an array)

- <span style="color: Red;">DOM Selectors - Single Elements</span>

  - By using `getElementById()` method we can select a single item by its `id`
  - To access to the class name we should use className property (class is not a property)
  - We can check an attribute of an element using `getAttribute()` method
  - Using `setAttribute()` we can set a new attribute or change an another one
  - By placing an item in a variable we can write less code to do all things that we talk about setting and getting attributes
  - Using this new variable we can change text of our elements using `textContent` property
  - Also you can do it using `innerText` property and change format by using `innerHTML` attribute
  - By using `style` property we can change style of elements
  - We don't have dash `-` in JavaScript like `CSS` so properties' name in JS are camelCase
  - Also by using `querySelector()` method we can select items in better way (It comes with ES6 and is the new one)
  - THis oly select oly a single element and it's different from JQuery selection mode and only the first element
  - We also can use `querySelector()` method on a variable which contains result of another querySelector
  - You can use this selector with pseudo selectors in CSS

- <span style="color: Red;">DOM Selectors - Multiple Elements</span>

  - To select multiple elements we can use `querySelectorAll()` method
  - This method returns a NodeList and we need to access actual items using array indexing ability
  - By using a `forEach()` loop we can change all items together
  - We can select multiple items by using `getElementByClassName()` method
  - To apply a forEach loop on our HTMLCollection we need to make an array of it using `Array.From()` method
  - We can also select multiple items by using `getElementByTagName()` method

- <span style="color: Red;">Traversing the DOM - Elements</span>

  - ![](assets/12.png)
  - These methods just work with elements nodes
  - All items in DOM is a node and have a kind of parent-child relationship with each other
  - Also elements in the same level are a kind of siblings for each other
  - By using properties like `firstElementChild` and `lastElementChild` we can select children based on their parent
  - Also we can get the parent node from a child using `parentElement` property
  - To traverse inside the children list and get siblings by using `nextElementSibling` or `previousElementSibling` properties

- <span style="color: Red;">Traversing the DOM - All Nodes</span>

  - Search `Dome Node Types` in Google and find the list of DOM node elements in `W3School.com`
  - ![](assets/13.png)
  - These methods work with all nodes
  - Check All nodes in `nodelist` and show the differences
  - By using `childNode` (it's a property) we can access to the child nodes of a specific node
  - Use all other methods to work with node instead of elements
  - In most cases we work with element nodes

- <span style="color: Red;">Create & append Elements</span>

  - We can create any kind of elements and insert it anywhere that we want inside the page
  - To make new element we can use `createElement()` method
  - Create a new div with all its attributes using dom methods
  - Better way to create text element is creating by `createTextNode()` method and add it to our div element using `appendChild()` method

- <span style="color: Red;">InnerHTML vs. createElement</span>

  - It's better to create and append your elements by using `createElement()` method instead of using `innerHTML`
  - We should use different methods to create elements instead of hard coding all items inside a single method

- <span style="color: Red;">Insert Elements, Text and HTML</span>

  - To insert a new element before an element in our document we can use `insertAdjacentElement()` method with `beforebegin` argument
  - ![](assets/14.png)
  - It's happen completely the same for inserting after an element if we pass `afterbegin` argument to this method
  - The above process is right for `insertAdjacentText` and `insertHTML` methods

- <span style="color: Red;">Replace Elements</span>

  - We use `replaceWith()` method to replace an item with another one
  - We can do the same by using `outerHTML` property
  - Exercise: Do this for all items in the list
  - Exercise: Do this for all items in the list using ternary operator

- <span style="color: Red;">Remove Elements</span>

  - By using two different methods named `remove` and `removeChild` we can remove an element

### <span style="color: #44cecc;">Events</span>

- <span style="color: Red;">Intro to Events</span>

  - `Events` in JavaScript are actions or occurrences that happen in the web browser which the browser can respond to. These events can be triggered by user interactions like clicking, typing, or scrolling, or by other actions like page load
  - Examples of Events:
    - click
    - mouseover
    - keydown
    - submit
    - resize
    - load
    - ...
  -
