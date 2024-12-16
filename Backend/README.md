# 🚀 HisaabKitab Backend

The backend of **HisaabKitab** is the server-side engine that powers the app's functionalities. It is built with **Node.js**, **Express.js**, and **MongoDB**, and it handles RESTful APIs for user authentication, expense management, group transactions, and notifications. 🔧

---

## **📦 Project Details**

### **Key Technologies**
- **MongoDB**: A NoSQL database to store user data, transactions, and group information.
- **Express.js**: A lightweight web framework for building RESTful APIs.
- **Axios**: A promise-based HTTP client used for making API requests (frontend-backend communication).
- **CORS**: Middleware for enabling cross-origin requests between the client and server.
- **Nodemon**: A development utility that automatically restarts the server on file changes.

---

## **🔧 Setup and Installation**

### **1. Prerequisites**
Before starting, ensure the following are installed on your system:
- **Node.js**: Version `16.x` or later
- **npm**: Version `7.x` or later
- **MongoDB**: Installed locally or available via a cloud provider like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### **2. Clone the Repository**
Clone the project and navigate to the backend directory:
```bash
git clone https://github.com/your-username/HisaabKitab.git
cd HisaabKitab/backend
```
**3. Install Dependencies**
Install all required dependencies:
```
npm install
This will install the following:
```
**Dependencies:**
```
axios: For handling HTTP requests.
bcryptjs: For securely hashing passwords.
cors: Middleware for enabling cross-origin requests.
dotenv: For managing environment variables.
express: Framework for building RESTful APIs.
jsonwebtoken: For secure user authentication with tokens.
mongoose: For interacting with MongoDB.
nodemailer: For sending transactional emails.
passport and passport-local: For handling authentication.
Dev Dependencies:
nodemon: For automatic server restarts during development.
```
**4. Set Up MongoDB**
Install MongoDB Locally:
Download MongoDB and follow the installation instructions for your operating system.
Start the MongoDB service:
```
mongod
Alternatively, you can use MongoDB Atlas to set up a cloud-based MongoDB instance.
```
Create a .env File: In the backend/ directory, create a .env file with the following keys:
**.env :**
```
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-jwt-secret
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email-address
EMAIL_PASS=your-email-password
Replace your-mongodb-connection-uri with your local or cloud MongoDB connection string.
```

**5. Start the Backend Server**
Run the backend in development mode:
```
npm run dev
The server will start on http://localhost:5000 by default.
```
