import React, { useState, useEffect } from 'react'
import Headeded from '../components/Headeded'
import '../styles/homepage.css'

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://onlinebugaw.pythonanywhere.com/api/v1/accounts/users/",
          {
            headers: {
              Authorization: "Token 7a75f7cd22326a6d3c13112d856e55644ef39592",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Error fetching users:", response.status);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  return (
    <div className='container'>
      <Headeded />
      <div className='second'>
      <h1 style={{color: 'white'}}>User List</h1>
      <ul style={{color: 'white'}}>
        {users
        .filter(user => user.id !== 1)
        .map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Homepage;
