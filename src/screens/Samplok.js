import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Samplok = ({ initialUsername }) => {
  const [username, setUsername] = useState(initialUsername);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profile_pic', profilePic);

    axios.post(`http://jurenroy.pythonanywhere.com/update-profile/${username}/`, formData)
      .then((response) => {
        console.log(response.data);
        // Handle the response or perform any additional actions
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} hidden/>
        <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} style={{ color: 'white', marginLeft: 50 }} />
        <button type="submit" style={{padding: 10, width: 200, marginTop: 100, position: 'absolute', marginLeft: -237}}>Update Profile</button>
      </form>
    </div>
  );
};

export default Samplok;
