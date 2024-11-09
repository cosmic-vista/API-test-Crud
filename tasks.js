// here we will store tasks as array object


let tasks = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Buy vegetables, fruits, and other daily essentials.",
        completed: false
    },
    {
        id: 2,
        title: "Clean the house",
        description: "Vacuum the floors, dust the furniture, and clean the windows.",
        completed: true
    },
    {
        id: 3,
        title: "Finish project report",
        description: "Complete the final draft of the project report for submission.",
        completed: false
    },
    {
        id: 4,
        title: "Call Mom",
        description: "Call mom to check in and catch up.",
        completed: true
    },
    {
        id: 5,
        title: "Read a book",
        description: "Read the next chapter of the current book.",
        completed: false
    }
];

module.exports = tasks;

// to import this in server.js we can use
// const task = require('.tasks');