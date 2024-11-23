//===========================================
/*
Hi
Ali Darvishi*/

//===========================================

let firstName = 'Ali';
let LastName = 'Darvishi';
let age = 39;
const pi = 3.14;

//===========================================

const person1 = {
    firstName: 'Ali',
    age: 39
};

//===========================================

let a = 10;
let b = 5;

let sum = a + b;

let remain = a % b;

a++;

a += 5;

//===========================================

let age1 = 18;

let canVote = age1 >= 18 ? 'Eligible to vote' : 'Not Eligible to vote'

console.log(canVote);

//===========================================

let temperature = 12;

if (temperature >= 30){
    console.log('Hot')
} else if (temperature >= 20 && temperature <= 29) {
    console.log('Nice!')
} else {
    console.log('Cold')
}

//===========================================

let day = 't';

switch (day) {
case 'Moonday':
    console.log('Beginning');
    break;
case 'Sunday':
case 'Saturday':
    console.log('Weekend');
    break
default:
    console.log('Weekday');
    break;
}

//===========================================

for (let i = 1; i <= 10; i++){
    if (i % 3 ===0) {
        console.log('Fizz');
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}

//===========================================

const person = {
    firstName: 'Ali',
    lastName: 'Darvishi',
    age: 39,
    greet () {
        console.log(`Hello`);
    }
}

person.isStudent = false;

//===========================================

if ('age' in person) {
    console.log('Founded!')
} else {
    console.log('Not Founded!')
}

//===========================================

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.great = function() {
        console.log('Hello!')
    };
    this.isStudent = false;
}

function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        greet() {
            console.log('Hello!')
        },
        isStudent: false
    }
}

// const p1 = createPerson('Ali', 'Darvishi', 20);

const p1 = new Person('Ali', 'Darvishi', 39);

console.log(p1);


//===========================================

let numbers = [1,2,3,4]

numbers.push(5);
numbers.unshift(0);
numbers.splice(3,0,10);

console.log(numbers.indexOf(4));

//===========================================












