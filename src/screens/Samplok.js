import React, { useState } from 'react';
import axios from 'axios';

const Samplok = () => {
  const [username, setUsername] = useState('Samplox@sampak.ok');
  const [profilePic, setProfilePic] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profile_pic', profilePic);

    axios.post(`http://localhost:8000/update-profile/${username}/`, formData)
      .then((response) => {
        console.log(response.data);
        // Handle the response or perform any additional actions
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Samplok;
