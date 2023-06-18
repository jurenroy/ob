import React,{ useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Headeded from "../components/Headeded";
import NotFoundPage from "./NotFoundPage";
import '../styles/Profile.css'
import profiled from '../assets/profiled.png'
import Confirm from "../components/ConfirmDialog";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const [show , setShow] = useState(false)
  const navigate = useNavigate();
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
          "https://onlinebugaw.pythonanywhere.com/users/"
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
        <div class = "container">
        {filteredUser ? (
          <div class = "secondss">
            <h2 style={{color:'#fff', fontFamily: 'serif', marginTop: '660px', fontSize: '30px', fontWeight: 'bold'}}>Profile</h2>
            <img src={filteredUser.profile_pic ? `https://onlinebugaw.pythonanywhere.com${filteredUser.profile_pic}` : profiled} alt="Profile Picture" style={{ height: "180px", width: "180px", marginBottom:'50rem', borderRadius: '100px'}}/>
            <h2 style={{color:'#fff', fontFamily: 'serif', textDecorationLine:'underline', position: 'absolute', marginTop: '170px'}}>{filteredUser.first_name} {filteredUser.last_name}, {ageInYears || 'Unknown'}</h2>
            <h4 style={{color:'#fff', fontFamily: 'serif', position: 'absolute', marginTop: '230px', marginLeft: '-450px'}}>Interested in: {filteredUser.gender === "Male" ? "Female" : "Male"}</h4>
            <div class = "Bg-container3" style={{marginTop: '17rem', paddingLeft: '10px'}}>Bio: I love Online Bugaw</div>
            <div class = "Bg-container4" style={{marginTop: '22rem', paddingLeft: '10px'}}>Address:Bulua, Cagayan de Oro City</div>           
            <div style={{justifyContent: 'space-evenly', position: 'absolute', marginTop: '650px'}}>
            <div classname="button-edit" >
            {showButtons && (
              <button Variant="contained" as="input" type="button" className="btn-edit" onClick={() => {navigate(`/mandatoryprof/${username}`);}}>
                <text className="button-text">EDIT</text>
              </button>)}
            </div>
            <div classname="button-edit" style={{ marginLeft: '250px' }}>
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