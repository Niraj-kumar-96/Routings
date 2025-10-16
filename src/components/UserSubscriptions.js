import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockUsers } from '../models';

const UserSubscriptions = () => {
  const { id } = useParams();
  const user = mockUsers.find(u => u.id === parseInt(id));
  const [users, setUsers] = useState(mockUsers);

  if (!user) {
    return <div>User not found</div>;
  }

  const toggleSubscription = () => {
    const updatedUsers = users.map(u =>
      u.id === user.id ? { ...u, subscriptionActive: !u.subscriptionActive } : u
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>User Subscriptions</h1>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p className={user.subscriptionActive ? 'status-available' : 'status-borrowed'}>
        <strong>Subscription:</strong> {user.subscriptionActive ? 'Active' : 'Inactive'}
      </p>
      <button onClick={toggleSubscription}>
        {user.subscriptionActive ? 'Deactivate' : 'Activate'} Subscription
      </button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default UserSubscriptions;
