import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/confirmdialog.css";
import { useDispatch } from 'react-redux';
import { logout } from '../components/Redux/Auth/AuthSlice';

function Confirm(props) {
  const signout = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    signout("/");
  };

  return (
    <div className="divback">
      <div className="dialogback">
        <div className="dialogform">
          <text className="txtdialog">Are you sure you want to Logout?</text>

          <button className="yesdialog" onClick={handleLogout}>
            <text>yes</text>
          </button>
          <button className="nodialog" onClick={() => props.setShow(false)}>
            <text>no</text>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
