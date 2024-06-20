// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: String,
        required: null,
    },
    pages: {
        type: Number,
        required: null,
    },
    genre: {
        type: String,
        required: true,
    },

    path: {
        type: String,
        required: false,
    },

    about: {
        type: String,
        required: true,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
