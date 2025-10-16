import React from 'react';
import { Link } from 'react-router-dom';
import { mockBooks } from '../models';

const BookList = () => {
  return (
    <div className="container">
      <h1>All Books</h1>
      <ul>
        {mockBooks.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title} by {book.author}</Link>
            <p className={book.available ? 'status-available' : 'status-borrowed'}>
              Status: {book.available ? 'Available' : 'Borrowed'}
            </p>
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default BookList;
