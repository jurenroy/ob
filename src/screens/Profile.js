import React,{ useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Headeded from "../components/Headeded";
import NotFoundPage from "./NotFoundPage";
import '../styles/Profile.css'
import profiled from '../assets/profiled.png'
import Confirm from "../components/ConfirmDialog";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [show , setShow] = useState(false)
  const handleNoClick = () => {
    setShow(false);
  }
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const auth = useSelector((state) => state.auth);

  const showButtons = username === auth.username;

  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jurenroy.pythonanywhere.com/users/"
        );

        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        } else {
          console.error("Error fetching users:", response.status);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUser = users.find((user) => user.username === username);
  
  const ageInYears = filteredUser?.birthday
  ? Math.floor((new Date() - new Date(filteredUser.birthday)) / (1000 * 60 * 60 * 24 * 365.25))
  : null;

    return( 
        <div style={{justifyContent:"center"}}>
        <Headeded/>
        <div class = "Bg-container">
        {filteredUser ? (
          <div class = "Bg-container2">
            <h2 style={{color:'#fff', marginLeft:'17rem', fontFamily: 'serif'}}>Profile</h2>
            <img src={profiled} style={{ height: "10rem", width: "10rem", marginTop:'45px', marginLeft:'-7rem', marginBottom:'50rem'}} />
            <h2 style={{color:'#fff', marginLeft:'-13rem', marginTop:'13rem', fontFamily: 'serif', textDecorationLine:'underline'}}>{filteredUser.first_name} {filteredUser.last_name}, {ageInYears || 'Unknown'}</h2>
            <h4 style={{color:'#fff', marginLeft:'-25rem', marginTop:'15rem', fontFamily: 'serif'}}>Interested in: {filteredUser.gender === "Male" ? "Female" : "Male"}</h4>
            <div class = "Bg-container3" style={{marginTop: '17rem', marginLeft: '1rem'}}> Bio: I love Online Bugaw</div>
            <div class = "Bg-container4" style={{marginTop: '25rem', marginLeft: '1rem'}}> Address:Bulua, Cagayan de Oro City  {auth.username}</div>           
            <div style={{justifyContent: 'space-evenly'}}>
            <div classname="button-edit" style={{ marginTop:600, marginLeft: -30}}>
            {showButtons && (
              <button Variant="contained" as="input" type="button" className="btn-edit" onClick={() => {console.log(auth.isLoggedIn)}}>
                <text className="button-text">EDIT</text>
              </button>)}
            </div>
            <div classname="button-edit" style={{ marginTop:600, marginLeft: 200 }}>
            {showButtons && (
              <button Variant="contained" as="input" type="button"className="btn-edit"
                onClick={() => setShow(true)}
              >
                <text className="button-text">LOGOUT</text>
              </button>)}
            </div>
            </div>
          </div>
        ) : (
          <div style={{marginTop: '120px'}}>
            <NotFoundPage />
          </div>
        )}          
        </div>
        
        
            {show && <Confirm setShow={setShow} handleNoClick={handleNoClick} />}

         
    </div>
    )
}

export default Profile