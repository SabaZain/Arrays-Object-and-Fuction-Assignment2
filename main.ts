// Assignment 1 - Building Friend List
// Defining an object named people containing an empty array called friends.
//const people = {
//   friends: []
//};
// Creating three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
// type friends = {
//     firstName: string,
//     lastName: string,
//     id: number,
// };
// let friend1:friends = {
//     firstName: "Sana",
//     lastName: "Sohail",
//     id: 2124
// };
// let friend2:friends = {
//     firstName: "Farah",
//     lastName: "Rahim",
//     id: 2125
// };
// let friend3:friends = {
//     firstName: "Kiran",
//     lastName: "Ali",
//     id: 2126
// };
// Adding these friend objects to the friends array within the people object
interface friends {
    firstName: string,
    lastName: string,
    id: number
}

const people: {friends:friends[]} = {
    friends: []
}
const friend1 = {
    firstName: "Sana",
    lastName: "Sohail",
    id: 2124
};
 const friend2 = {
    firstName: "Farah",
     lastName: "Rahim",
   id: 2125
};
 const friend3 = {
    firstName: "Kiran",
    lastName: "Ali",
    id: 2126 };
// Output the entire people object to the console, displaying your information friend list.
people.friends.push(friend1 , friend2 , friend3);
console.log(people);


// Assignment 2 - Manipulating an array - Rearranging words
// Rearranging an array using array methods to form the sentence "I am a student of GIAIC".
// 1. Scrambled Array

// Modifing the Array
// Using methods like split(), join(), push(), pop(), shift(), and unshift() to Rearrange array
const scrambledArray:string[] = ["student","I","GIAIC","a","am","of"]
const rearrangedArray:string[] = [];
rearrangedArray.push(scrambledArray[1]);
rearrangedArray.push(scrambledArray[4]);
rearrangedArray.push(scrambledArray[3]);
rearrangedArray.push(scrambledArray[0]);
rearrangedArray.push(scrambledArray[5]);
rearrangedArray.push(scrambledArray[2]);

// Using join() to combine elements back into a single string: "I am a student of GIAIC".
const originalArray:string = rearrangedArray.join(' ');
console.log(originalArray);

// Assignment 3 - Company Product Catalog
// 1. Defining an array named inventory to store product information.
// const inventory = [];
// 2. Creating three separate objects, each representing a product, with properties like name,model,cost,quantity
interface products {
    name: string,
    model: string,
    cost: number,
    quantity: number
}; 
const inventory : {products:products[]} = {products:[]
};
const product1:products = {
    name: "Smart Phone",
    model: "Realme5",
    cost: 25000,
    quantity: 30
};
const product2:products = {
    name: "Hp Laptop",
    model: "Elitebook",
    cost: 55000,
    quantity: 45
};
const product3:products = {
    name: "Smart Watch",
    model: "SW123",
    cost: 16000,
    quantity: 50
};
// 3. Adding these product objects to the inventory array using an appropriate array method.
inventory.products.push(product1 , product2 , product3);
console.log(inventory);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array
console.log("Quantity of first product:" , inventory.products[0].quantity);
console.log("Quantity of second product:" , inventory.products[1].quantity);
console.log("Quantity of third product:" , inventory.products[2].quantity);
// 5. Exploring adding and accessing more elements within the inventory array to understand how to manage product data.

const product4:products = {
    name: "Digital Camera",
    model: "Dc456",
    cost: 30000,
    quantity: 10
};
const product5:products = {
    name: "Chargeable Battery",
    model: "CB666",
    cost: 3000,
    quantity: 25
};
inventory.products.push(product4 , product5);
console.log("List Of Products:" , inventory);
console.log("Name of Product 4:" , inventory.products[3].name , "Cost:" , inventory.products[3].cost);
console.log("Name of Product 5:" , inventory.products[4].name , "Cost:" , inventory.products[4].cost);
console.log("Model of Product 5:" , inventory.products[4].model);

// Assignment 4 - Student List Organizer
// Student data defining an interface named Student that describes student information like name, senior status (true/false), and whether they've completed their assignments (true/false).
interface Student {
    name: string,
    seniorStatus: boolean,
    isAssignmentCompleted: boolean
}
// Student list - An array named students stores information about several students using the Student template
const students:Student[] = [];
const Student1:Student = {
    name: "Sarah",
    seniorStatus: true,
    isAssignmentCompleted: true
};
const Student2:Student = {
    name: "Salman",
    seniorStatus: false,
    isAssignmentCompleted: true
};
const Student3:Student = {
    name: "Fatima",
    seniorStatus: false,
    isAssignmentCompleted: false
};
const Student4:Student = {
    name: "Zain",
    seniorStatus: true,
    isAssignmentCompleted: false
};
const Student5:Student = {
    name: "Hina",
    seniorStatus: true,
    isAssignmentCompleted: true
};
students.push(Student1,Student2,Student3,Student4,Student5);
console.log("Student List:",students);
// Finding Senior Students with Assignments completed using function in code
function assignmentsCompletedSeniorStudents (students:Student[]):Student[] {
    return students.filter(student => student.seniorStatus && student.isAssignmentCompleted);
}
const seniorStudentsWithAssignmentsCompleted = assignmentsCompletedSeniorStudents(students);
console.log(seniorStudentsWithAssignmentsCompleted);
// Reasons why this information is helpful:
// 1. By filterout this information about senior students administration can monitor students who are on track and can help out 
// students who are lacking & facing difficulties in this course.
// 2. Also senior students who have completed their assignments successfully can help junior students and can be selected for assissting teachers as well.

// Updated Class List - function removing senior students who haven't completed their assignments 
function removeaAssignmentsNotCompletedSeniorStudents (students:Student[]):Student[] {
    return students.filter(student => !(student.seniorStatus && !student.isAssignmentCompleted));
}
const seniorStudentsAssignmentsNotCompleted = removeaAssignmentsNotCompletedSeniorStudents(students);
console.log(seniorStudentsAssignmentsNotCompleted);
// Reasons why this information is helpful:
// 1. By removing senior students who have not completed their assignments administration can keep track who are not serious and can give chance
// to junior students to come forward who are making progress.
// 2. Administration can know about overall progess of all students whether senior or junior.












