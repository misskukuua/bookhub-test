// src/components/SearchForm.tsx

import React from 'react';
import './SearchForm.css';

interface SearchFormProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
