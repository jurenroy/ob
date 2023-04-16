import React from "react";
import ob from '../assets/ob.png'

const Header = () => {
  return (
    <div style={{ backgroundColor: '#33083A', display: 'flex', height: '80px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999' }}>
      <img src={ob} style={{ height: "60px", width: "60px", marginTop: '10px', marginLeft: '10px', marginBottom: '10px' }} alt="Logo" />
      <h1 style={{ color: '#fff', marginLeft: '10px', fontSize: '24px', lineHeight: '80px', marginTop:-2 }}>ONLINE BUGAW</h1>
    </div>
  );
};

export default Header;
