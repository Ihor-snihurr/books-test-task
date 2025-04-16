## Arhitecture
Used suggested approach, modular architecture, used a simple array to simulate persistence, models methods are asynchronous to simulate DB queries

## What was implemented
- Create a new book
- Get a list of all books, with optional filters: By status, By author
- Update the status of a book (implemented PUT method for the whole book, status included)
- Delete a book by ID 
- Use TypeScript
- Add pagination to the list endpoint
- Implement simple middleware for logging and error handling
- Add a test case for one route using jest

## Postman collection attached

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **Testing**: Jest + Supertest
- **Validation**: Joi
- **Development**: Nodemon


## Available commands
- Run in develop mode: "npm run dev"
- Build & start: "npm run build" & "npm run start"
- Test: "npm run test". Note: When testing the GET /books route, ensure the server is running first.