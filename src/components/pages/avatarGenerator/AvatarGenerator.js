import React, { useState } from "react";
import Avatar from "./Avatar.svg";
import Hair_1 from "./Hair_1.svg";
import Hair_2 from "./Hair_2.svg";
import Hair_3 from "./Hair_3.svg";
import Lips_1 from "./Lips_1.svg";
import Lips_2 from "./Lips_2.svg";
import Lips_3 from "./Lips_3.svg";
import Eyes_green from "./Eyes_green.svg";
import Eyes_blue from "./Eyes_blue.svg";
import Eyes_brown from "./Eyes_brown.svg";
import EmptyArea from "./Empty_area.svg";
import Glasses from "./Glasses_1.svg";

const AvatarGenerator = () => {
  const [hairCounter, setHairCounter] = useState(1);
  const [eyesCounter, setEyesCounter] = useState(1);
  const [glassesCounter, setGlassesCounter] = useState(1);
  const [lipsCounter, setLipsCounter] = useState(1);

  const changeHair = () => {
    let Counter = hairCounter;
    if (Counter < 4) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setHairCounter(Counter);
  };

  const changeEyes = () => {
    let Counter = eyesCounter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setEyesCounter(Counter);
  };

  const changeGlasses = () => {
    let Counter = glassesCounter;
    if (Counter < 2) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setGlassesCounter(Counter);
  };

  const changeLips = () => {
    let Counter = lipsCounter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setLipsCounter(Counter);
  };

  const setHair = counter => {
    if (counter === 1) return Hair_1;
    else if (counter === 2) return Hair_2;
    else if (counter === 3) return Hair_3;
    else if (counter === 4) return EmptyArea;
    return null;
  };

  const setEyes = counter => {
    if (counter === 1) return Eyes_green;
    else if (counter === 2) return Eyes_blue;
    else if (counter === 3) return Eyes_brown;
    return null;
  };

  const setGlasses = counter => {
    if (counter === 1) return EmptyArea;
    else if (counter === 2) return Glasses;
    // else if (counter === 3) return Eyes_brown;
    return null;
  };

  const setLips = counter => {
    if (counter === 1) return Lips_1;
    else if (counter === 2) return Lips_2;
    else if (counter === 3) return Lips_3;
    return null;
  };

  return (
    <div>
      <h1 className='text-center mb-3 mt-3'>
        Avatar Generator <span className='badge badge-info'>v. Alpha 0.6</span>
      </h1>
      <h5 className='text-center'>Avatar:</h5>
      <div className='row d-flex justify-content-center'>
        <img
          src={Avatar}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 0,
            position: "absolute"
          }}
          className='img-fluid'
          alt='Responsive'
        />
        <img
          src={setGlasses(glassesCounter)}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 3,
            position: "absolute"
          }}
          className='img-fluid'
          alt='Responsive'
        />
        <img
          src={setEyes(eyesCounter)}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 2,
            position: "relative"
          }}
          className='img-fluid'
          alt='Responsive'
        />
        <img
          src={setHair(hairCounter)}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 4,
            position: "absolute"
          }}
          className='img-fluid'
          alt='Responsive'
        />
        <img
          src={setLips(lipsCounter)}
          style={{
            width: "300px",
            height: "300px",
            zIndex: 1,
            position: "absolute"
          }}
          className='img-fluid'
          alt='Responsive'
        />
      </div>
      <p className='text-center'>Currently in early stage of development</p>
      <div className='container-fluid text-center'>
        <button className='btn btn-danger mr-2 mb-2' onClick={changeHair}>
          Change Hairstyle
        </button>
        <button className='btn btn-warning mr-2 mb-2' onClick={changeEyes}>
          Change Eye Color
        </button>
        <button className='btn btn-secondary mr-2 mb-2' onClick={changeGlasses}>
          Change Glasses
        </button>
        <button className='btn btn-success mr-2 mb-2' onClick={changeLips}>
          Change Lips
        </button>
        {/* <button className='btn btn-primary mr-2 mb-2'>Change Skin Color</button>*/}
      </div>
      <div className='container-fluid text-center'>
        <h5>Plans:</h5>
        <div className='row d-flex justify-content-center'>
          <ul className='list-group  list-group-flush'>
            <li className='list-group-item'>
              Add Avatar rendering (server-side)
            </li>
            <li className='list-group-item'>Add more customization options</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;
