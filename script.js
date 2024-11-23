courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

// console.log(courses.includes('a')); 
const course = courses.find(course => course.name === 'a');
console.log(course);