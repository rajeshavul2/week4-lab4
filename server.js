const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  patchBook,
  putBook,
} = require("./controllers/bookController");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// GET a single book
app.get("/api/books/:id", getBook);
// DELETE a book
app.delete("/api/books/:id", deleteBook);
// Update book using PATCH
app.patch("/api/books/:id", patchBook);
// Update book using PUT
app.put("/api/books/:id", putBook);
// Add a new book
app.post("/api/books", createBook);
// GET all books
app.get("/api/books", getBooks);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
