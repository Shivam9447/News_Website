// src/App.js
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsList from './Components/NewsList';
import './App.css';
import Footer from './Components/Footer';
const App = () => {
  const [category, setCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <header className="app__header">
        <Navbar onSelectCategory={handleSelectCategory} onSearch={handleSearch} />
      </header>
      <main className="app__main">
        <NewsList category={category} searchTerm={searchTerm} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
