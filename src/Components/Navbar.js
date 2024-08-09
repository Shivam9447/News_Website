// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onSelectCategory, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState(''); // for search bar..

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img style={{ cursor: 'pointer' }} src="https://logonoid.com/images/sky-news-logo.png" alt="News Logo" onClick={() => {
          onSelectCategory('general')
        }} />
      </div>
      <ul className="navbar__links">
        <li onClick={() => onSelectCategory('sports')}>Sports</li>
        <li onClick={() => onSelectCategory('technology')}>Technology</li>
        <li onClick={() => onSelectCategory('business')}>Business</li>
        <li onClick={() => onSelectCategory('entertainment')}>Entertainment</li>
        <li onClick={() => onSelectCategory('general')}>General</li>
      </ul>
      <form onSubmit={handleSearchSubmit} className="navbar__search">
        <input
          className='form-control'
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search news..."
        />
        <button className='btn btn-outline-secondary' type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
