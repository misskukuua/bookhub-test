import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignpPage';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
