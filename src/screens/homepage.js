  import React, { useState, useEffect } from 'react';
  import Headeded from '../components/Headeded';
  import heart from '../assets/heart1.png'
  import broke from '../assets/heart2.png'
  import profile_pic from '../assets/profiled.png'
  import { useSelector } from 'react-redux';
  import '../styles/homepage.css';

  const Homepage = () => {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const auth = useSelector((state) => state.auth);

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
            const filteredUsers = data.filter(
              (user) => user.id !== 1 && user.username !== auth.username
            );
            setUsers(filteredUsers);
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
        <h2 style={{color:'#fff', fontFamily: 'serif', marginTop: '-110px', fontSize: '30px', fontWeight: 'bold'}}>Profile</h2>
          {users.length > 0 && currentIndex < users.length ? (
            <div style={{ color: 'white' }}>
              <div >

                <img 
                  style={{height: '180px', width: '180px', borderRadius: '100px', marginTop: '-20px'}}
                  src={users[currentIndex].profile_pic ? `https://onlinebugaw.pythonanywhere.com${users[currentIndex].profile_pic}` : profile_pic}
                  alt="Profile Picture"
                />
              </div>
              <div style = {{textDecoration: 'underline', textAlign: 'center', fontWeight: 'bold', fontSize: '30px', position: 'absolute', width: '500px', marginLeft: '-170px'}}>{users[currentIndex].first_name} {users[currentIndex].last_name}, {calculateAge(users[currentIndex].birthday)}</div>
              <div style = {{textAlign: 'left', marginLeft: '-205px', fontWeight: 'bold', marginTop: '50px'}}>Interested in: {users[currentIndex].gender === "Male" ? "Female" : "Male"}</div>

              <div class = "Bg-container3" style={{marginTop: '1rem', marginLeft: '-210px', color: 'black', paddingLeft: '10px'}}>{' '} Bio: I love Online Bugaw</div>
              <div class = "Bg-container4" style={{marginTop: '4rem', marginLeft: '-210px', color: 'black', paddingLeft: '10px'}}>{' '} Address:Bulua, Cagayan de Oro City</div>  
              
              <div style={{marginTop: '125px', position: 'absolute'}}> 
              <img 
              style = {{height: '100px', width: '100px', marginLeft: '-70px'}}
              src = {broke}
              onClick={handleNext}/>

              <img 
              style = {{height: '100px', width: '100px',marginLeft: '120px' }}
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
