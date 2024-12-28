Overview

The Task Manager API is a RESTful service for managing tasks with user authentication. It is built using Node.js, Express.js, and MongoDB.

-----------------------------------------------------------------------------------------
Features

User Authentication: Register, login, and password reset functionality.

Task Management: Create, retrieve, update, and delete tasks.

----------------------------------------------------------------------------------------

Prerequisites

Node.js and npm installed.

MongoDB running locally or hosted

--------------------------------------------------------------------------------------
Setup Instructions

1. Clone the Repository

2. Install Dependencies
      npm install

3.Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=helloqwsaaqwe8fdhjdbdsjjidsj

----------------------------------------------------------------------------
Start the server using "node app.js" or using nodemon " npx nodemon app.js"



--------------------------------------------------------------------------
Entering Data

Enter the data for register , login  and creating task using " json format /RAW "

----------------------------------------------------------------------------------

below is the examples of tested data

Register User

- POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "1234"
}


Response:
{
  "id": "64eaea73824a9b1adf2a3b4",
  "message": "User registered successfully"
}

----------------------------------------

Login User

-- POST /auth/login

{
  "email": "john@example.com",
  "password": "securepassword"
}


Response :

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGVhZWE3MzgyNGE5YjFhZGYyYTNiNCIsImlhdCI6MTY4OTI3NjgyMywiZXhwIjoxNjg5MzYzMjIzfQ.abc12345xyz67890"
}

-----------------------------------------------------------
Task Management

Create Task

POST /tasks

{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}

Response: {
  "_id": "648ebf293824a9b1adf2a3c1",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "userId": "648eaea73824a9b1adf2a3b4",
  "__v": 0
}