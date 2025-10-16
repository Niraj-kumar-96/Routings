import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import UserSubscriptions from './components/UserSubscriptions';
import UserHistory from './components/UserHistory';
import BorrowReturn from './components/BorrowReturn';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">All Books</Link></li>
            <li><Link to="/borrow">Borrow/Return</Link></li>
            <li><Link to="/users/1/subscriptions">User Subscriptions</Link></li>
            <li><Link to="/users/1/history">User History</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/users/:id/subscriptions" element={<UserSubscriptions />} />
          <Route path="/users/:id/history" element={<UserHistory />} />
          <Route path="/borrow" element={<BorrowReturn />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Moon Knight Library</h1>
      <p>Navigate through the shadows of knowledge...</p>
      <h2>Available Portals:</h2>
      <ul>
        <li><Link to="/books">📚 /books - View all books</Link></li>
        <li><Link to="/books/1">🔍 /books/:id - View specific book details</Link></li>
        <li><Link to="/users/1/subscriptions">👤 /users/:id/subscriptions - Manage user subscriptions</Link></li>
        <li><Link to="/users/1/history">📜 /users/:id/history - View user borrowing history</Link></li>
        <li><Link to="/borrow">⚔️ /borrow - Borrow or return books</Link></li>
      </ul>
    </div>
  );
}

export default App;
