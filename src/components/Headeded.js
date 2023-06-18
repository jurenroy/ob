import React, { useEffect, useState } from "react";
import ob from '../assets/ob.png';
import loveus from '../assets/loveus.png';
import dobook from '../assets/dobook.png';
import messages from '../assets/messages.png';
import profiled from '../assets/profiled.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Headeded = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        const response = await fetch(
          `https://onlinebugaw.pythonanywhere.com/users/`,
          {
            headers: {
              Authorization: 'Token 7a75f7cd22326a6d3c13112d856e55644ef39592',
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          const user = userData.find((user) => user.username === auth.username);
          if (user && user.profile_pic) {
            setProfilePic(user.profile_pic);
          }
        } else {
          console.error('Error fetching profile picture:', response.status);
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePic();
  }, [auth.username]);

  return (
    <div style={{backgroundColor: '#33083A', display: 'flex', height: '70px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <img src={ob} style={{ height: "50px", width: "50px", marginBottom:'10px' , cursor: 'pointer', marginTop: '5px'}} alt="Logo" onClick={() => navigate('/')}/>
        <h1 style={{ position:'absolute' ,color: '#fff', marginLeft: '60px', fontSize: '24px', lineHeight: '80px' , cursor: 'pointer'}} onClick={() => navigate('/')}>ONLINE BUGAW</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <img src={loveus} style={{ height: "130px", width: "130px", marginTop:'-30px',  marginBottom:'-35px', cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/error')}/>
        <img src={dobook} style={{ height: "130px", width: "130px", marginTop:'-30px',  marginBottom:'-35px', cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/error')}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px'}}>
        <img src={messages} style={{ height: "60px", width: "60px", marginTop:'5px', marginBottom:'10px', cursor: 'pointer', marginLeft: '-10%' }} alt="Logo" onClick={() => navigate('/error')}/>
        {profilePic ? (
          <img src={`https://onlinebugaw.pythonanywhere.com${profilePic}`} style={{ height: "50px", width: "50px", marginTop:'15px', marginBottom:'10px', cursor: 'pointer', marginLeft: '20px', borderRadius: '100px' }} alt="Profile Picture" onClick={() => navigate(`/profile/${auth.username}`)}/>
        ) : (
          <img src={profiled} style={{ height: "60px", width: "60px", marginTop:'5px', marginBottom:'10px', cursor: 'pointer', marginLeft: '30px' }} alt="Logo" onClick={() => navigate(`/profile/${auth.username}`)}/>
        )}
      </div>
    </div>
  );
};

export default Headeded;
