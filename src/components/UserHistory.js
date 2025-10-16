import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockUsers, mockBorrowings, mockBooks } from '../models';

const UserHistory = () => {
  const { id } = useParams();
  const user = mockUsers.find(u => u.id === parseInt(id));
  const userBorrowings = mockBorrowings.filter(b => b.userId === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container">
      <h1>Borrowing History for {user.name}</h1>
      <ul>
        {userBorrowings.map(borrowing => {
          const book = mockBooks.find(b => b.id === borrowing.bookId);
          return (
            <li key={borrowing.id}>
              <strong>{book ? book.title : 'Unknown Book'}</strong> - Borrowed: {borrowing.borrowDate}
              {borrowing.returnDate ? `, Returned: ${borrowing.returnDate}` : ', Not returned'}
            </li>
          );
        })}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default UserHistory;
