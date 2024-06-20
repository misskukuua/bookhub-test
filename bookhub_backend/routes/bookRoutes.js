// Example in routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Assuming you have a Book model
const { createBook, updateBook, deleteBook, getBook } = require('../controllers/bookController');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



router.post('/', createBook);
router.delete('/:id', deleteBook);
router.put('/:id', updateBook);
router.get('/:id', getBook);

module.exports = router;
