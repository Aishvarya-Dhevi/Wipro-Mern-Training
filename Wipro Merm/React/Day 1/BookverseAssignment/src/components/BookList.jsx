// src/components/BookList.js
import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = () => {
  const [books] = useState([
    { id: 1, title: '1984', author: 'George Orwell', price: 9.99 },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 15.99 },
  ]);

  const [view, setView] = useState('grid'); // grid or list
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={() => setView('grid')}>Grid View</button>
      <button onClick={() => setView('list')}>List View</button>

      <div className={view === 'grid' ? 'grid-container' : 'list-container'}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;