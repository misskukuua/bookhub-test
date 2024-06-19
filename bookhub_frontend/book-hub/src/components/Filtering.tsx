// src/components/Filtering.tsx

import React from 'react';
import './Filtering.css';

interface FilteringProps {
  filters: { genre: string; author: string; publicationDate: string };
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onClearFilters: () => void;
}

const Filtering: React.FC<FilteringProps> = ({ filters, onFilterChange, onClearFilters }) => {
  return (
    <div className="filter-fields">
      <input
        type="text"
        name="genre"
        placeholder="Filter by genre"
        value={filters.genre}
        onChange={onFilterChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Filter by author"
        value={filters.author}
        onChange={onFilterChange}
      />
      <input
        type="text"
        name="publicationDate"
        placeholder="Filter by publication date"
        value={filters.publicationDate}
        onChange={onFilterChange}
      />
      <button type="button" onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filtering;
