  import React, { useState, useEffect } from 'react';
  import Headeded from '../components/Headeded';
  import heart from '../assets/heart1.png'
  import broke from '../assets/heart2.png'
  import '../styles/homepage.css';

  const Homepage = () => {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch(
            'https://onlinebugaw.pythonanywhere.com/users/',
            {
              headers: {
                Authorization: 'Token 7a75f7cd22326a6d3c13112d856e55644ef39592',
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setUsers(data);
          } else {
            console.error('Error fetching users:', response.status);
          }
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

      fetchUsers();
    }, []);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= users.length) {
          return 0; // Reset index to 0 if it reaches the end
        } else {
          return prevIndex + 1;
        }
      });
    };

    const calculateAge = (birthday) => {
      const ageInYears = birthday
        ? Math.floor((new Date() - new Date(birthday)) / (1000 * 60 * 60 * 24 * 365.25))
        : null;
      return ageInYears;
    };

    return (
      <div className="container">
        <Headeded />
        <div className="secondss">
          <h1 style={{ color: 'white', marginBottom: '-50', marginTop: '-60px' }}>Profile</h1>
          {users.length > 0 && currentIndex < users.length ? (
            <div style={{ color: 'white' }}>
              <div>
                <img 
                  style={{height: '200px', width: '200px', borderRadius: '100px'}}
                  src={`https://onlinebugaw.pythonanywhere.com${users[currentIndex].profile_pic}`}
                  alt="Profile Picture"
                />
              </div>
              <div style = {{textDecoration: 'underline', textAlign: 'center'}}>{users[currentIndex].first_name} {users[currentIndex].last_name}, {calculateAge(users[currentIndex].birthday)}</div>
              <div style = {{textAlign: 'center'}}>Interested in: {users[currentIndex].gender === "Male" ? "Female" : "Male"}</div>
              
              <div style={{marginTop: '100px', position: 'absolute', marginLeft: '-50px'}}> 
              <img 
              style = {{height: '130px', width: '130px', marginLeft: '-20px'}}
              src = {broke}
              onClick={handleNext}/>

              <img 
              style = {{height: '130px', width: '130px',marginLeft: '70px' }}
              src = {heart}
              onClick={handleNext}/>
              </div>

            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      </div>
    );
  };

  export default Homepage;
