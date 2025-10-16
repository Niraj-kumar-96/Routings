import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockBooks, mockUsers, mockBorrowings, Borrowing } from '../models';

const BorrowReturn = () => {
  const [books, setBooks] = useState(mockBooks);
  const [borrowings, setBorrowings] = useState(mockBorrowings);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  const handleBorrow = () => {
    if (!selectedUser || !selectedBook) return;

    const book = books.find(b => b.id === parseInt(selectedBook));
    if (!book || !book.available) return;

    const newBorrowing = new Borrowing(
      borrowings.length + 1,
      parseInt(selectedUser),
      parseInt(selectedBook),
      new Date().toISOString().split('T')[0]
    );

    setBorrowings([...borrowings, newBorrowing]);
    setBooks(books.map(b => b.id === book.id ? { ...b, available: false } : b));
    setSelectedUser('');
    setSelectedBook('');
  };

  const handleReturn = () => {
    if (!selectedBook) return;

    const borrowing = borrowings.find(b => b.bookId === parseInt(selectedBook) && !b.returnDate);
    if (!borrowing) return;

    setBorrowings(borrowings.map(b =>
      b.id === borrowing.id ? { ...b, returnDate: new Date().toISOString().split('T')[0] } : b
    ));
    setBooks(books.map(b => b.id === parseInt(selectedBook) ? { ...b, available: true } : b));
    setSelectedBook('');
  };

  return (
    <div className="container">
      <h1>Borrow or Return Books</h1>

      <h2>Borrow a Book</h2>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {mockUsers.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
        <option value="">Select Book</option>
        {books.filter(book => book.available).map(book => (
          <option key={book.id} value={book.id}>{book.title}</option>
        ))}
      </select>
      <button onClick={handleBorrow}>Borrow</button>

      <h2>Return a Book</h2>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
        <option value="">Select Book to Return</option>
        {books.filter(book => !book.available).map(book => (
          <option key={book.id} value={book.id}>{book.title}</option>
        ))}
      </select>
      <button onClick={handleReturn}>Return</button>

      <Link to="/">Home</Link>
    </div>
  );
};

export default BorrowReturn;
