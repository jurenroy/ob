import React from "react";
import ob from '../assets/ob.png'

const Headed = () => {
  return (
    <div style={{ backgroundColor: '#33083A', display: 'flex', height: '70px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999' }}>
      <img src={ob} style={{ height: "50px", width: "50px", marginTop: '10px', marginLeft: '10px', marginBottom: '0px' }} alt="Logo" />
      <h1 style={{ color: '#fff', marginLeft: '10px', fontSize: '24px', lineHeight: '80px', marginTop:-7 }}>ONLINE BUGAW</h1>
    </div>
  );
};

export default Headed;
