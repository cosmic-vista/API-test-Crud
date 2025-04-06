
# Web Main Api-test-crud  - Task Management API

This is a simple Node.js-based API for managing tasks. It provides endpoints to create, update, delete, and fetch tasks. The backend is built using **Express.js**.

## Features

- Get all tasks
- Create a new task
- Update an existing task
- Delete a task

## Setup Instructions

### Prerequisites

- Install **Node.js** (Recommended version: latest LTS)
- Install **npm** (comes with Node.js)

### Installation Steps

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd web-main
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run the Server**
   ```sh
   npm start
   ```
   or directly with:
   ```sh
   node server.js
   ```

### API Endpoints

| Method | Endpoint     | Description                                                                      |
| ------ | ------------ | -------------------------------------------------------------------------------- |
| GET    | `/`          | Returns a welcome message                                                        |
| GET    | `/tasks`     | Fetch all tasks                                                                  |
| POST   | `/tasks`     | Create a new task (requires `title` and `description` in the request body)       |
| PUT    | `/tasks/:id` | Update an existing task (provide `title`, `description`, and `completed` status) |
| DELETE | `/tasks/:id` | Delete a task by ID                                                              |

### Example Request (Creating a Task)

```sh
curl -X POST http://localhost:3001/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "New Task", "description": "This is a new task"}'
```

### Example Response

```json
{
  "id": 6,
  "title": "New Task",
  "description": "This is a new task",
  "completed": false
}
```

### Notes

- The API runs on **http://localhost:3001/** by default.
- Make sure `express` and `cors` are installed (`npm install`).
- Modify `server.js` to add more functionalities if needed.




