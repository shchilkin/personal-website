import React, { useState } from "react";
import Avatar from "./Avatar_1.svg";
import ArrowRight from "../../../icons/ArrowRight.svg";
import ArrowLeft from "../../../icons/ArrowLeft.svg";
import Hair_1 from "./Hair_1.svg";
import Hair_2 from "./Hair_2.svg";
import Hair_3 from "./Hair_3.svg";
import Lips_1 from "./Lips_1.svg";
import Lips_2 from "./Lips_2.svg";
import Lips_3 from "./Lips_3.svg";
import Background_1 from "./Background_1.svg";
import Background_2 from "./Background_2.svg";
import Background_3 from "./Background_3.svg";
import Background_4 from "./Background_4.svg";
import Background_5 from "./Background_5.svg";
import Background_6 from "./Background_6.svg";
import Background_7 from "./Background_7.svg";
import Background_8 from "./Background_8.svg";
import Background_9 from "./Background_9.svg";
import Background_10 from "./Background_10.svg";
import Eyes_green from "./Eyes_green.svg";
import Eyes_blue from "./Eyes_blue.svg";
import Eyes_brown from "./Eyes_brown.svg";
import EmptyArea from "./Empty_area.svg";
import Glasses from "./Glasses_1.svg";

const AvatarGenerator = () => {
  const [hairCounter, setHairCounter] = useState(3);
  const [eyesCounter, setEyesCounter] = useState(1);
  const [glassesCounter, setGlassesCounter] = useState(2);
  const [lipsCounter, setLipsCounter] = useState(2);
  const [backgroundCounter, setBackgroundCounter] = useState(1);

  // Hair counters
  const changeHairUp = () => {
    let Counter = hairCounter;
    if (Counter < 4) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setHairCounter(Counter);
  };
  const changeHairDown = () => {
    let Counter = hairCounter;
    if (Counter > 1) {
      Counter -= 1;
    } else {
      Counter = 4;
    }
    setHairCounter(Counter);
  };

  // Eyes counters
  const changeEyesUp = () => {
    let Counter = eyesCounter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setEyesCounter(Counter);
  };
  const changeEyesDown = () => {
    let Counter = eyesCounter;
    if (Counter > 1) {
      Counter -= 1;
    } else {
      Counter = 3;
    }
    setEyesCounter(Counter);
  };

  // Glasses counters
  const changeGlassesUp = () => {
    let Counter = glassesCounter;
    if (Counter < 2) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setGlassesCounter(Counter);
  };
  const changeGlassesDown = () => {
    let Counter = glassesCounter;
    if (Counter > 1) {
      Counter -= 1;
    } else {
      Counter = 2;
    }
    setGlassesCounter(Counter);
  };

  // Lips counters
  const changeLipsUp = () => {
    let Counter = lipsCounter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setLipsCounter(Counter);
  };
  const changeLipsDown = () => {
    let Counter = lipsCounter;
    if (Counter > 1) {
      Counter -= 1;
    } else {
      Counter = 3;
    }
    setLipsCounter(Counter);
  };

  // Background counters
  const changeBackgroundUp = () => {
    let Counter = backgroundCounter;
    if (Counter < 10) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setBackgroundCounter(Counter);
  };
  const changeBackgroundDown = () => {
    let Counter = backgroundCounter;
    if (Counter > 1) {
      Counter -= 1;
    } else {
      Counter = 10;
    }
    setBackgroundCounter(Counter);
  };

  //  Set Feature functions
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

  const setBackground = counter => {
    if (counter === 1) return Background_1;
    else if (counter === 2) return Background_2;
    else if (counter === 3) return Background_3;
    else if (counter === 4) return Background_4;
    else if (counter === 5) return Background_5;
    else if (counter === 6) return Background_6;
    else if (counter === 7) return Background_7;
    else if (counter === 8) return Background_8;
    else if (counter === 9) return Background_9;
    else if (counter === 10) return Background_10;
    return null;
  };

  //Render
  return (
    <div>
      <h1 className='text-center mb-3 mt-3'>
        Avatar Generator <span className='badge badge-info'>v. Alpha 0.8</span>
      </h1>
      <div className='row'>
        <div className='col-md-5 text-center'>
          <h5>Avatar:</h5>
          <div className='row d-flex justify-content-center'>
            <img
              src={Avatar}
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
              src={setGlasses(glassesCounter)}
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
              src={setEyes(eyesCounter)}
              style={{
                width: "300px",
                height: "300px",
                zIndex: 3,
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
                zIndex: 5,
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
                zIndex: 2,
                position: "absolute"
              }}
              className='img-fluid'
              alt='Responsive'
            />
            <img
              src={setBackground(backgroundCounter)}
              style={{
                width: "300px",
                height: "300px",
                zIndex: 0,
                position: "absolute"
              }}
              className='img-fluid'
              alt='Responsive'
            />
          </div>
        </div>
        <div className='col-md-7 text-center'>
          <p className='text-center'>Currently in early stage of development</p>
          <div className='container-fluid text-center'>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-danger'>Change Hairstyle</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeHairDown}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'></img>
              </button>
              <button className='btn btn-secondary mr-1' onClick={changeHairUp}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                ></img>
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-warning'>Change Eye color</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeEyesDown}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'></img>
              </button>
              <button className='btn btn-secondary mr-1' onClick={changeEyesUp}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                ></img>
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-secondary'>Change Glasses</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeGlassesDown}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'></img>
              </button>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeGlassesUp}
              >
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                ></img>
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-success'>Change Lips</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeLipsDown}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'></img>
              </button>
              <button className='btn btn-secondary mr-1' onClick={changeLipsUp}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                ></img>
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-primary'>Change Background</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeBackgroundDown}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'></img>
              </button>
              <button
                className='btn btn-secondary mr-1'
                onClick={changeBackgroundUp}
              >
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                ></img>
              </button>
            </div>
          </div>
        </div>
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
