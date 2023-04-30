import React, { useState, useEffect } from 'react'
import Headeded from '../components/Headeded'
import '../styles/homepage.css'

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jurenroy.pythonanywhere.com/api/v1/accounts/users/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
        setUsers(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Headeded />
      <div className='homecontainer'>
        <h1>Users:</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
