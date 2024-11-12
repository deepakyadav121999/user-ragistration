import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css'
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:8000/users');
    setUsers(response.data);
  };

  const addUser = async (user) => {
    const response = await axios.post('http://localhost:8000/users', user);
    setUsers([...users, response.data]);
  };

  const updateUser = async (user) => {
    const response = await axios.put(`http://localhost:8000/users/${user.id}`, user);
    setUsers(users.map(u => (u.id === user.id ? response.data : u)));
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className='app'>
      <h1>User Registration</h1>
      <UserForm addUser={addUser} updateUser={updateUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList users={users} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default App;
