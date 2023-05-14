import React, { useRef } from "react";
import profiled from "../assets/profiled.png"

function FileInput({ onImageSelected }) {
  const inputRef = useRef();

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
      <img src={profiled} style={{ height: "250px", width: "250px", marginTop:'-150px', marginLeft: '-23px', position: 'absolute',  }} alt="Logo" />
      <h1 style={{color: 'white', marginLeft: '40px', marginTop: 100}}>PROFILE</h1>
      <button className="btn" style={{padding: '10px', width: '200px'}} onClick={onChooseImg}>
        Choose Image
      </button>
    </div>
  );
}

export default FileInput;
