// src/components/BookItem.tsx

import React from 'react';

interface BookItemProps {
  book: {
    id: number;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  };
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
    </div>
  );
};

export default BookItem;
