import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, selectedUser, setSelectedUser }) {
  const [user, setUser] = useState({ name: '', email: '', dob: '' });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '', dob: '' });
    setSelectedUser(null);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>

    <form onSubmit={handleSubmit} className='form'>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input type="date" name="dob" value={user.dob} onChange={handleChange} required />
      <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
    </form>
    </div>
  );
}

export default UserForm;
