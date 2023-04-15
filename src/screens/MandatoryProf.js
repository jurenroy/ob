import React from "react";
import Headed from "../components/Headed";
import styles from "../components/styles.css";
import profiled from "../assets/profiled.png"
import { useState } from 'react';

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
      
    return( 
        <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
            <Headed/>
            <div className='container'>
          <div className='second'>
            <img src={profiled} style={{ height: "350px", width: "350px", marginTop:'15px', justifyContent: 'center', alignItems: 'center', marginLeft: '130px'}} />
            <h1 style={{color: 'white', fontSize: '50px',fontStyle: 'Poppins', marginTop: '-1rem', justifyContent: 'center', alignItems: 'center', marginLeft: "13.5rem"}}>PROFILE</h1>
            {storedImage && (
        <img
          src={storedImage}
          style={{ width: 150, height: 150, justifyContent: 'center', marginTop: 5, marginLeft: 100 }}
        />
      )}
      <label htmlFor="image-picker" style={{ display: 'block', marginTop: 10 }}>
        <input type="file" accept="image/*" id="image-picker" style={{ display: 'none' }} onChange={pickImage} />
        <button style={{ backgroundColor: '#007AFF', color: 'white', padding: 10, borderRadius: 5, marginLeft: '15.5rem', marginTop: '-6%', position: 'absolute'}}>
          Upload Image
        </button>
      </label>
            <h3 style={{color: 'white', fontSize: '20px',fontStyle: 'Poppins', marginTop: '1rem', justifyContent: 'center', alignItems: 'center', marginLeft: "10rem", fontWeight: 'normal'}}>Please insert photo for your profile.</h3>
            <button style={{height: '43px', width: '10rem', marginLeft: '14.7rem', marginTop: '-10px'}}>Continue</button>
        </div>
        </div>
    </div>
    )
}

export default MandatoryProf
