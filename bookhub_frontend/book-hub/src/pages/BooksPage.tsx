// src/pages/BooksPage.tsx

import React, { useState, useEffect } from 'react';
import BooksList from '../components/BooksList';
import BookDetail from '../components/BookDetail'; // Import BookDetail component
import Filtering from '../components/Filtering';
import SearchForm from '../components/SearchForm';
import './BooksPage.css'; // Import CSS for styling

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]); // State for storing books data
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]); // State for filtered books
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term
  const [filters, setFilters] = useState<{ genre: string; author: string; publicationDate: string }>({ genre: '', author: '', publicationDate: '' }); // State for filters
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // State for selected book

  // Example function to fetch books data (replace with your actual data fetching logic)
  const fetchBooks = async () => {
    try {
      // Replace with actual API call or data fetching logic
      const response = await fetch('https://api.example.com/books');
      const data = await response.json();
      setBooks(data); // Set fetched books to state
      setFilteredBooks(data); // Initialize filtered books with all books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to handle filtering books based on current filters
  const applyFilters = (filters: { genre: string; author: string; publicationDate: string }) => {
    let filtered = [...books];

    // Apply filters
    if (filters.genre) {
      filtered = filtered.filter(book => book.genre.toLowerCase().includes(filters.genre.toLowerCase()));
    }
    if (filters.author) {
      filtered = filtered.filter(book => book.author.toLowerCase().includes(filters.author.toLowerCase()));
    }
    if (filters.publicationDate) {
      filtered = filtered.filter(book => book.publicationDate === filters.publicationDate);
    }

    setFilteredBooks(filtered); // Update filtered books state
  };

  // Effect to fetch books data on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = books.filter(book => {
      return (
        book.title.toLowerCase().includes(searchTermLower) ||
        book.author.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredBooks(filtered);
  };

  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
    applyFilters({ ...filters, [name]: value });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({ genre: '', author: '', publicationDate: '' });
    setFilteredBooks(books);
  };

  // Handle book selection
  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="books-page">
      <div className='welcome'>
        <h1> Welcome to Our Book Collection! </h1>
        <p> Explore a world of stories and knowledge with our vast collection of books. Whether you're searching for a new adventure, diving into a classic, or discovering the latest bestsellers, you'll find something for every interest. </p>
      </div>
      <SearchForm
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Filtering
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <div className="books-container">
        <BooksList books={filteredBooks} onBookSelect={handleBookSelect} />
        {selectedBook && <BookDetail book={selectedBook} />} {/* Conditional rendering */}
      </div>
    </div>
  );
};

export default BooksPage;
