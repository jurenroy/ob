import React, { useState } from "react";
import Headed from "../components/Headed";
import profiled from "../assets/profiled.png";

const MandatoryProf = () => {
  const [storedImage, setStoredImage] = useState(null);

  const pickImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setStoredImage(reader.result);
    };
  };

  const handleUpload = () => {
    // Handle the upload logic here
    // You can send the image data (storedImage) to the server or perform any other actions
    console.log("Upload button clicked");
  };

  return (
    <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
      <Headed />
      <div className="container">
        <div className="second">
          <img src={profiled} style={{ height: "250px", width: "250px", marginTop:'-30px', justifyContent: 'center', alignItems: 'center'}} />
          <h1 style={{color: 'white', fontSize: '40px',fontStyle: 'Poppins', marginTop: '-1rem', justifyContent: 'center', alignItems: 'center'}}>PROFILE</h1>
          {storedImage && (
            <img
              src={storedImage}
              style={{ width: 150, height: 150, justifyContent: 'center', marginTop: 5 }}
            />
          )}
          <label htmlFor="image-picker" style={{ display: 'block', marginTop: 10 }}>
            <input
              type="file"
              accept="image/*"
              id="image-picker"
              style={{ display: 'none' }}
              onChange={pickImage}
            />
            <button
              style={{ backgroundColor: '#007AFF', color: 'white', padding: 10, borderRadius: 5, marginTop: '-6%', width: '200px'}}
              onClick={pickImage}
            >
              Upload Image
            </button>
          </label>
          <h3 style={{color: 'white', fontSize: '20px',fontStyle: 'Poppins', marginTop: '1rem', justifyContent: 'center', alignItems: 'center', fontWeight: 'normal'}}>Please insert photo for your profile.</h3>
          <button style={{height: '43px', width: '10rem', marginTop: '-10px', padding: 10}}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default MandatoryProf;
