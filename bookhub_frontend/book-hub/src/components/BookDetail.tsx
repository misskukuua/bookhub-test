// src/components/BookDetail.tsx

import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  // Add more properties if needed
}

interface BookDetailProps {
  book: Book;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>; // Handle case when book is not available yet
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
      {/* Add additional book details as needed */}
    </div>
  );
};

export default BookDetail;
