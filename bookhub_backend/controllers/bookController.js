// controllers/bookController.js

const Book = require('../models/Book');


const getBooks = async (_req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Create a book
// @route POST /api/books
// @access Public
const createBook = async (req, res) => {
    const { title, author, publicationDate, pages, genre, about } = req.body;
    const newBook = new Book({
        title,
        author,
        publicationDate,
        pages,
        genre,
        about,
    });

    try {
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateBook = async (_req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(_req.params.id, _req.body, {
            new: true,
            runValidators: true,
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
