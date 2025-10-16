import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBooks } from '../models';

const BookDetail = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container">
      <h1>Book Details</h1>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p className={book.available ? 'status-available' : 'status-borrowed'}>
        <strong>Status:</strong> {book.available ? 'Available' : 'Borrowed'}
      </p>
      <Link to="/books">Back to Books</Link>
    </div>
  );
};

export default BookDetail;
