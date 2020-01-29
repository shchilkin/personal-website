import React from "react";
import Avatar from "./Avatar-example.png";

const AvatarGenerator = () => {
  return (
    <div>
      <h1 className='text-center mb-3'> Avatar Generator</h1>
      <p className='text-center'>Currently in early stage of development</p>
      <h5 className='text-center'>Avatar example:</h5>
      <div class='d-flex justify-content-center'>
        <img
          src={Avatar}
          style={{ width: "300px", height: "300px" }}
          class='img-fluid'
          alt='Responsive'
        />
      </div>
    </div>
  );
};

export default AvatarGenerator;
