import React from "react";
import ob from '../assets/ob.png'
import loveus from '../assets/loveus.png'
import dobook from '../assets/dobook.png'
import messages from '../assets/messages.png'
import profiled from '../assets/profiled.png'
import { Navigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Headeded = () => {
  const navigate  = useNavigate();
  return (
    <div style={{backgroundColor:'#33083A', display:'flex'}}>
      <img src={ob} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'10px', marginBottom:'10px' }} alt="Logo" />
      <h1 style={{color:'#fff', marginLeft:'10px'}}>ONLINE BUGAW</h1>
      <img src={loveus} style={{ height: "150px", width: "150px", marginTop:'-30px', marginLeft:'500px', marginBottom:'-30px', cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/loveus')}/>
      <img src={dobook} style={{ height: "150px", width: "150px", marginTop:'-30px', marginLeft:'80px', marginBottom:'-30px', cursor: 'pointer'}} alt="Logo" onClick={() => navigate('/dobook')}/>
      <img src={messages} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'80px', marginBottom:'10px',cursor: 'pointer' }} alt="Logo" onClick={() => navigate('/message')}/>
      <img src={profiled} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'30px', marginBottom:'10px',cursor: 'pointer' }} alt="Logo"  onClick={() => navigate('/message')}/>
    </div>
  );
};

export default Headeded;
