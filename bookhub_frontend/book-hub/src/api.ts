// src/api.ts

import axios from 'axios';


const API_URL = 'http://localhost:5000/api/books';

export interface Book {
    _id?: string;
    title: string;
    author: string;
    publishedDate: string;
    pages: number;
    genre: string;
}

// Fetch all books
export const getBooks = async (): Promise<Book[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

// Fetch a single book by ID
export const getBook = async (id: string): Promise<Book | null> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
        return null;
    }
};

// Create a new book
export const createBook = async (book: Book): Promise<Book | null> => {
    try {
        const response = await axios.post(API_URL, book);
        return response.data;
    } catch (error) {
        console.error('Error creating book:', error);
        return null;
    }
};

// Update a book by ID
export const updateBook = async (id: string, book: Book): Promise<Book | null> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, book);
        return response.data;
    } catch (error) {
        console.error(`Error updating book with ID ${id}:`, error);
        return null;
    }
};

// Delete a book by ID
export const deleteBook = async (id: string): Promise<Book | null> => {
    try {
        const response = await axios.post(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error creating book:', error);
        return null;
    }
};
