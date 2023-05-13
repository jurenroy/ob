import React from "react";
import ob from '../assets/ob.png'
import { useNavigate, useLocation} from "react-router-dom";

const Headed = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let secondText = "Register";
  let secondPath = "/registration";
  if (location.pathname === "/registration") {
    secondText = "Login";
    secondPath = "/";
  } else if (location.pathname === "/") {
    secondText = "Sign Up";
  } else if (location.pathname === "/forgotpass") {
    secondText = "";
  }

  return (
    <div style={{ backgroundColor: '#33083A', display: 'flex', height: '70px', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ob} style={{ height: "50px", width: "50px", marginTop: '-5px', marginLeft: '10px', marginBottom: '0px', cursor: 'pointer'}} alt="Logo" onClick={() => navigate('/')}/>
        <h1 style={{ color: '#fff', marginLeft: '10px', fontSize: '24px', lineHeight: '80px', marginTop:7 , cursor: 'pointer'}} onClick={() => navigate('/')}>ONLINE BUGAW</h1>
      </div>
      <div>
      {secondText && <h1 style={{ color: '#fff', marginRight: '20px', fontSize: '24px', lineHeight: '80px', marginTop:7 , cursor: 'pointer'}} onClick={() => navigate(secondPath)}>{secondText}</h1>}
      </div>
    </div>
  );
};

export default Headed;
