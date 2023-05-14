import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(1 / 1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div className="cropper">
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "35%",
              height: "35%",
              backgroundColor: "#fff",
              marginTop: 42,
              marginLeft: 163,
              borderRadius: 100
            },
          }}
        />
      </div>

      <div className="action-btns">
        <div className="aspect-ratios" onChange={onAspectRatioChange} hidden>
          <input type="radio" value={1 / 1} name="ratio" /> 1:1
        </div>

        <h2 style={{color: 'white', marginLeft: '50px', marginTop: 100}}>Cropping Stage</h2>

        <button className="btn btn-outline" onClick={onCropCancel} style={{padding: '10px', width: '100px', marginRight: '50px'}}>
          Cancel
        </button>

        <button
          className="btn"
          style={{padding: '10px', width: '100px', marginTop: '10px'}}
          onClick={() => {
            onCropDone(croppedArea);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ImageCropper;
