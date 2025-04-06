const express = require('express');

const app = express()
const tasks = require('./tasks');
const cors = require('cors');
const port = 6000;

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "hello user" }); // use key value pair 
});

app.get("/tasks", (req, res) => {

    res.json(tasks);
})


// post creating new task
app.post("/tasks", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newtask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false, // pass this as a false so that we can update it in put 
    };

    tasks.push(newtask);
    res.json(newtask);
});
// updating existing tasks
app.put("/tasks/:id", (req, res) => {
    const getId = parseInt(req.params.id); // find task id so that we can update in that task


    const newtitle = req.body.title; // give input new title
    const newdescription = req.body.description;
    const newcompleted = req.body.completed;

    const task = tasks.find(t => t.id === getId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    task.title = newtitle;
    task.description = newdescription;
    task.completed = newcompleted;

    res.json(task);


});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // Get the task ID from the URL
    const taskIndex = tasks.findIndex(t => t.id === taskId); // Find the index of the task


    console.log(taskId)
    // If task is not found, return a 404 error
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    // Remove the task from the array
    tasks.splice(taskIndex, 1);


    // Respond with a 204 No Content status (successfully deleted, no response body)
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is hosting on  http://localhost:${port}`)
})
