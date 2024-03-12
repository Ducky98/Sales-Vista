# Sales Vista

Sales Vista is a web application designed to streamline sales entry processes. It provides features for users to log in, register, add sales, view today's top sales, and access all sales data. The project is built using a combination of backend and frontend technologies to ensure a smooth user experience.

## Technologies Used

### Backend
- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication
- CORS for cross-origin resource sharing
- Joi for input validation
- Joi-password-complexity for enforcing password complexity rules
- Bcrypt for password hashing
- Mongoose for MongoDB object modeling

### Frontend
- React.js
- Tailwind CSS for styling
- Material UI for UI components

## Features

- **User Authentication**: Users can register and log in securely using JWT authentication.
- **Sales Entry**: Users can add sales data efficiently, providing necessary details.
- **Today's Top Sale**: View the top sale of the day at a glance.
- **All Sales**: Access all sales data for analysis and reporting.

## Project Structure

The project structure is organized to maintain clarity and modularity:

- **Backend**: Contains all server-side code.
  - **Routes**: Manages routing for different API endpoints.
  - **Models**: Defines MongoDB schemas and models.
- **Frontend**: Houses all client-side code.
  - **Components**: Contains reusable React components.
  - **Pages**: Manages routing and navigation within the application.

## Setup Instructions

1. Clone the repository.
2. Navigate to the backend directory and run `npm install` to install backend dependencies.
3. Set up a MongoDB database and update the connection string in the backend configuration.
4. Run `npm start` to start the backend server.
5. Navigate to the frontend directory and run `npm install` to install frontend dependencies.
6. Run `npm start` to start the frontend server.
7. Access the application in your web browser at the specified address.

