// src/components/BooksList.tsx

import React from 'react';
import BookItem from './BookItem';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BooksListProps {
  books: Book[];
  onBookSelect: (book: Book) => void; // Define onBookSelect function prop
  filters: {
    genre: string;
    author: string;
    publicationDate: string;
    title: string;
    // Add more filters as needed
  };
}

const BooksList: React.FC<BooksListProps> = ({ books, onBookSelect, filters }) => {
  // Filter books based on current filters
  const filteredBooks = books.filter(book => {
    return (
      book.publicationDate.includes(filters.publicationDate) &&
      book.genre.toLowerCase().includes(filters.genre.toLowerCase()) &&
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase())
      // Add more conditions as needed for other filters
    );
  });

  return (
    <div className="books-list">
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
