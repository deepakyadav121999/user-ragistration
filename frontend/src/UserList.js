import React from 'react';

function UserList({ users, deleteUser, setSelectedUser }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.dob}
          <button onClick={() => setSelectedUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
