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
}

const BooksList: React.FC<BooksListProps> = ({ books, onBookSelect }) => {
  return (
    <div className="books-list">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
