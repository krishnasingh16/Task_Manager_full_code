Task Manager API - README

## How to Run the App
### Backend (Express + MongoDB)
1. Go to the backend directory:
   cd backend

2. Install dependencies:
   npm install

3. Start the server:
   npm run dev

### Frontend (React)
  
1. Go to the frontend directory:
   cd frontend

2. Install dependencies:
   npm install

3. Start the React app:
   npm start

4. App will run at:
   http://localhost:3000

## API Details
### Auth Routes
 Method  Endpoint       Description         
1. POST   /api/register  Register a new user 
2. POST   /api/login     Login and get token 

### Task Routes
  Method  Endpoint               Access      Description               

1. GET     /api/task              Admin/User  Get all tasks (filtered) 
2. GET     /api/task/\:id         Admin/User  Get task by ID            
3. POST    /api/task/create       User/Admin  Create a new task         
4. PUT     /api/task/update/\:id  User/Admin  Update a task             
5. DELETE  /api/task/delete/\:id  Admin Only  Delete a task             
6. GET     /api/task/counts       Admin/User  Get dashboard task counts 

## Technologies Used
### Backend:

1. Node.js
2. Express.js
3. MongoDB + Mongoose
4. JSON Web Tokens (JWT)
5. bcrypt.js

### Frontend:

1. React.js
2. Axios
3. React Query
4. Tailwind CSS
5. React Router
