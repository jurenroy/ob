import React from "react";
import ob from '../assets/ob.png'
import loveus from '../assets/loveus.png'
import dobook from '../assets/dobook.png'
import messages from '../assets/messages.png'
import profiled from '../assets/profiled.png'
import { Navigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Headeded = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{backgroundColor: '#33083A', display: 'flex', height: '70px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <img src={ob} style={{ height: "50px", width: "50px", marginBottom:'10px' , cursor: 'pointer'}} alt="Logo" onClick={() => navigate('/homepage')}/>
        <h1 style={{ color: '#fff', marginLeft: '10px', fontSize: '24px', lineHeight: '80px' , cursor: 'pointer'}} onClick={() => navigate('/homepage')}>ONLINE BUGAW</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <img src={loveus} style={{ height: "130px", width: "130px", marginTop:'-30px',  marginBottom:'-35px',marginLeft:-130, cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/loveus')}/>
        <img src={dobook} style={{ height: "130px", width: "130px", marginTop:'-30px',  marginBottom:'-35px', cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/dobook')}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px'}}>
        <img src={messages} style={{ height: "60px", width: "60px", marginTop:'5px', marginBottom:'10px', cursor: 'pointer', marginLeft: 'auto' }} alt="Logo" onClick={() => navigate('/message')}/>
        <img src={profiled} style={{ height: "60px", width: "60px", marginTop:'5px', marginBottom:'10px', cursor: 'pointer', marginLeft: '30px' }} alt="Logo"  onClick={() => navigate('/profile')}/>
      </div>
    </div>
  );
};

export default Headeded;
