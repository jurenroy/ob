import React from "react";
import Headeded from "../components/Headeded";

const Activated = () => {
  const handleGoBack = () => {
    window.open('https://jurenroy.github.io/ob', '_blank');
  };

  return (
    <div>
      <Headeded/>
      <div className='container'>
      <div className='second' style={{backgroundColor:'transparent'}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column'}}>
          <h1 style={{color: "white"}}>Account Successfully Registered</h1>
          <p style={{color: "white"}}>You may now open your acc</p>
          <button style={{ padding: "10px 20px", cursor: "pointer", marginTop: '20px' }} onClick={handleGoBack}>Get Started</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Activated;
