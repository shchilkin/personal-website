import React, { useState } from "react";
import AvatarBold from "./Avatars_bold.svg";
import Hair_1 from "./Hair_1.svg";
import Hair_2 from "./Hair_2.svg";
import Hair_3 from "./Hair_3.svg";

const AvatarGenerator = () => {
  const [counter, setCounter] = useState(1);
  const onClick = () => {
    let Counter = counter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setCounter(Counter);
  };

  const setHair = counter => {
    if (counter === 1) return Hair_1;
    else if (counter === 2) return Hair_2;
    else if (counter === 3) return Hair_3;
    return null;
  };

  return (
    <div>
      <h1 className='text-center mb-3 mt-3'>
        Avatar Generator <span className='badge badge-info'>v. Alpha 0.3</span>
      </h1>
      <h5 className='text-center'>Avatar:</h5>
      <div class='row d-flex justify-content-center'>
        <img
          src={AvatarBold}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 1,
            position: "absolute"
          }}
          className='img-fluid'
          alt='Responsive'
        />
        <img
          src={setHair(counter)}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 1,
            position: "relative"
          }}
          className='img-fluid'
          alt='Responsive'
        />
      </div>
      <p className='text-center'>Currently in early stage of development</p>
      <p className='text-center'>
        Only option <span className='badge badge-danger'>Change Hairstyle</span>{" "}
        works at the moment
      </p>
      <div className='container-fluid text-center'>
        <button className='btn btn-danger mr-2 mb-2' onClick={onClick}>
          Change Hairstyle
        </button>
        <button className='btn btn-warning mr-2 mb-2'>Change Eye Color</button>
        <button className='btn btn-secondary mr-2 mb-2'>Change Glasses</button>
        <button className='btn btn-primary mr-2 mb-2'>Change Skin Color</button>
        <button className='btn btn-success mr-2 mb-2'>Change Glasses</button>
      </div>
    </div>
  );
};

export default AvatarGenerator;
