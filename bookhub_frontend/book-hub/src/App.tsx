import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CreatePage from './pages/CreatePage'


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/create" element={<CreatePage/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
