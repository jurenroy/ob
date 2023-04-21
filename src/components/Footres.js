import React from "react";
import froggy from '../assets/froggy.png'
import { useNavigate } from "react-router-dom";

const Footres = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "https://www.facebook.com/messages/t/4473921586057943/";
  }

  return (
    <div style={{ backgroundColor: '#000', display: 'flex', height: '40px', position: 'fixed', bottom: '1', left: '0', right: '0', zIndex: '999',justifyContent:'center' }} >
      <img src={froggy} style={{ height: "40px", width: "40px", marginTop: '3px', marginBottom: '0px', cursor: 'pointer' }} alt="Logo" onClick={handleClick}/>
      <h1 style={{ color: '#fff', marginLeft: '10px', fontSize: '24px', lineHeight: '80px', marginTop:-17 , cursor: 'pointer'}} onClick={handleClick}>POWERED BY FROGGIES</h1>
    </div>
  );
};

export default Footres;
