# TypeScript Node.js API with MongoDB

This project is a simple RESTful API built with **TypeScript**, **Node.js**, and **MongoDB**. It includes basic CRUD operations (Create, Read, Update, Delete) for managing **Users**. The API is structured using Express.js and integrates with MongoDB via Mongoose.

## Features

- **CRUD** operations (Create, Read, Update, Delete) for **Users**
- Uses **MongoDB** as the database (via **Mongoose**)
- Written in **TypeScript** for better type safety
- **Postman collection** included for API testing
- **ESLint** and **Prettier** for code linting and formatting

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/typescript-node-api.git
cd typescript-node-api
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```ini
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=3000
```

Make sure to replace `your-database-name` with the actual name of your MongoDB database.

### 4. Build and Start the Project

#### In Development Mode (with Nodemon):
Run the following command to start the server with automatic restarts:

```bash
npm run dev
```

#### In Production Mode:
If you want to build and run the app in production, first compile the TypeScript files and then start the server:

```bash
npm run build   # Compile TypeScript to JavaScript
npm start       # Run the compiled code in production
```

The server will start on `http://localhost:3000`.

## Running and Testing with Postman

### Step 1: Import Postman Collection

You can find the **Postman collection** used for API testing in the `postman/` directory. The collection is exported as a JSON file and contains predefined requests for testing all the API endpoints.

1. **Open Postman**.
2. Click on the **Import** button (located in the top-left corner).
3. Select **File** and choose the `postman/api-collection.json` file from your project directory.
4. The collection will be imported into Postman and available in the left sidebar.

### Step 2: Test the API Endpoints

Once the collection is imported, you can run the requests to test the API.

1. **Open the collection** in Postman.
2. Select any request (e.g., `GET users`, `POST create user`) and click the **Send** button to test the API.
3. The results will appear in the response section.

### Example Postman Requests:

- **GET all users**: Run the request labeled `Get All Users`.
- **POST new user**: Run the request labeled `Create New User` with the necessary data in the request body.

### Step 3: Modify and Test More Endpoints

You can modify the data in the requests to test other endpoints (e.g., updating or deleting users).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project, open issues, or submit pull requests for improvements or fixes.