import React from "react";
import ob from '../assets/ob.png'

const Headed = () => {
  return (
    <div style={{backgroundColor:'#33083A', display:'flex'}}>
      <img src={ob} style={{ height: "60px", width: "60px", marginTop:'10px', marginLeft:'10px', marginBottom:'10px' }} alt="Logo" />
      <h1 style={{color:'#fff', marginLeft:'10px'}}>ONLINE BUGAW</h1>
    </div>
  );
};

export default Headed;
