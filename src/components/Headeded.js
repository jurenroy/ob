import React from "react";
import ob from '../assets/ob.png'
import loveus from '../assets/loveus.png'
import dobook from '../assets/dobook.png'
import messages from '../assets/messages.png'
import profiled from '../assets/profiled.png'


const Headeded = () => {
  return (
    <div style={{backgroundColor:'#33083A', display:'flex'}}>
      <img src={ob} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'10px', marginBottom:'10px' }} alt="Logo" />
      <h1 style={{color:'#fff', marginLeft:'10px'}}>ONLINE BUGAW</h1>
      <img src={loveus} style={{ height: "150px", width: "150px", marginTop:'-30px', marginLeft:'500px', marginBottom:'-30px' }} alt="Logo" />
      <img src={dobook} style={{ height: "150px", width: "150px", marginTop:'-30px', marginLeft:'100px', marginBottom:'-30px' }} alt="Logo" />
      <img src={messages} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'480px', marginBottom:'10px' }} alt="Logo" />
      <img src={profiled} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'30px', marginBottom:'10px' }} alt="Logo" />
    </div>
  );
};

export default Headeded;
