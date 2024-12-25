
const express = require("express");
const Books = require("./BooksSchema"); // Ensure this file exports a Mongoose model
const mongodbConnected = require("./MongoDBConnect"); // Ensure MongoDB connection is established properly
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the MongoDB Express React and Mongoose app!");
});

// About route
app.get('/about', async (req, res) => {
    res.send("MongoDB Express React and Mongoose app. React runs in another application.");

    try {
        const count = await Books.countDocuments().exec();
        console.log("Total documents count before addition:", count);
    } catch (err) {
        console.error("Error counting documents:", err);
    }
});

// Get all books
app.get('/allbooks1', async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
    } catch (err) {
        console.error("Error fetching all books:", err);
        res.status(500).json({ error: "Error fetching books." });
    }
});

// Get a single book by ID
app.get('/getbook/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: "Book not found." });
        }
    } catch (err) {
        console.error("Error fetching book:", err);
        res.status(500).json({ error: "Error fetching book." });
    }
});

// Add a new book
app.post('/addbooks', async (req, res) => {
    try {
        const newBook = new Books(req.body);
        await newBook.save();
        res.status(200).json({ message: "Book added successfully." });
    } catch (err) {
        console.error("Error adding book:", err);
        res.status(400).json({ error: "Failed to add book." });
    }
});

// Update a book by ID
app.post('/updatebook/:id', async (req, res) => {
    try {
        const updatedBook = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (updatedBook) {
            res.status(200).json({ message: "Book updated successfully." });
        } else {
            res.status(404).json({ error: "Book not found." });
        }
    } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ error: "Failed to update book." });
    }
});

// Delete a book by ID
app.post('/deleteBook/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id);

        if (deletedBook) {
            res.status(200).json({ message: "Book deleted successfully." });
        } else {
            res.status(404).json({ error: "Book not found." });
        }
    } catch (err) {
        console.error("Error deleting book:", err);
        res.status(500).json({ error: "Failed to delete book." });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



