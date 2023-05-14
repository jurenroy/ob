import React, { useState } from "react";
import Headed from "../components/Headed";
import FileInput from "../components/FileInput";
import ImageCropper from "../components/ImageCropper";
//import profiled from "../assets/profiled.png";

const MandatoryProf = () => {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };


  return (
    <div style={{ backgroundColor: "lightgray", height:'100vh'}}>
      <Headed />
      <div className="container">
        <div className="second">
        {currentPage === "choose-img" ? (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <div>
            <img src={imgAfterCrop} className="cropped-img" style={{height: '185px', width: '185px', borderRadius: 200, position: 'absolute', marginTop: '-118px', marginLeft: '31px'}} alt='logo'/>
          </div>

          <h2 style={{color: 'white', marginLeft: '30px', marginTop: 100,}}>Your Profile Picture</h2>
          <button
          style={{padding: '10px', width: '100px', marginRight: 50, marginTop: '10px'}}
            onClick={() => {
              setCurrentPage("crop-img");
            }}
            className="btn"
          >
            Edit
          </button>

          <button
          style={{padding: '10px', width: '100px'}}
            onClick={() => {
              
            }}
            className="btn"
          >
            Done
          </button>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default MandatoryProf;
