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
  - Talk about console object and show all types(`img1`)
  - Remind the `Emmet` toolkit
  - Install `JavaScript ES6 Snippets` Extension and talk about it (`clg`, `tryc`) and all kind of console methods (`log`, `error`, `warning`, `table`) (`img6`)

- <span style="color: Red;">Variables</span>

  - To save data in memory and recall it for further uses we use variables
  - ![](assets/3.png)
  -
  - Before ES6 we use `var` keyword to declare a variable. Now we use `let` keyword
  - Remember to terminate your codes in each line with `;` notation
  - Default value for all variable in JavaScript is `undifined` (`img2`)
  - Naming conventions for variables in JavaScript:
    - Never use `reserved keywords` (like let / check it)
    - They Should be `meaningful`
    - They cannot start with a `number`
    - They cannot contain `space` (' ') or `hyphen` ('-')
    - Typically we use `camelCase` convention in JavaScript
    - JavaScript is `Case Sensitive` language
    - We can declare multiple variable in one line and separate them using `,` notation
    - In modern best practice we declare each variable in different line

- <span style="color: Red;">Constants</span>

  - When we want to have a variable that its value never change through the execution of the code until we use `constant` keyword instead of `let` (`img3`)
  - Check the error in the console when you try to change a constant value

- <span style="color: Red;">Primitive Types</span>

  - In JavaScript we have two categories of types
  - ![](assets/4.png)

  - In the case of primitive types, we have four different primitive type in JavaScript :
    - <span style="color: #00ff00;"> Numbers</span>
    - <span style="color: #00ff00;">Strings</span>
    - <span style="color: #00ff00;">Booleans</span>
    - <span style="color: #00ff00;">Undefined</span>
    - <span style="color: #00ff00;">null</span>

- <span style="color: Red;">Dynamic Typing</span>

  - JavaScript is a dynamic type language. It means you can change a variable type by assigning to new value
  - ![](assets/5.png)
  - Test it in the console using `typeof` statement
  - `undefined` is actually a type also a value(`img5`)
