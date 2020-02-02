import React, { useState, Fragment} from "react";
import Avatar from "./Avatars-4.2.svg";
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
import TShirt_golden from './Clothes/T-shirt_golden.svg'
import TShirt_skyblue from './Clothes/T-shirt_skyblue.svg'
import TShirt_green from './Clothes/T-shirt_green.svg'
import TShirt_light from './Clothes/T-shirt_light.svg'
import TShirt_dark from './Clothes/T-shirt_dark.svg'
import TShirt_pink from './Clothes/T-shirt_pink.svg'
import TShirt_rose from './Clothes/T-shirt_rose.svg'
import TShirt_brown from './Clothes/T-shirt_brown.svg'
import Eyes_green from "./Eyes/Eyes_green.svg";
import Eyes_blue from "./Eyes/Eyes_blue.svg";
import Eyes_brown from "./Eyes/Eyes_brown.svg";
import Eyes_amber from "./Eyes/Eyes_amber.svg";
import Eyes_grey from "./Eyes/Eyes_grey.svg";
import Eyes_red from "./Eyes/Eyes_red.svg";
import Eyes_violet from "./Eyes/Eyes_violet.svg";
import Eyes_black from "./Eyes/Eyes_black.svg";
import EmptyArea from "./Empty_area.svg";
import Glasses from "./Glasses_1.svg";
import Eyebrows_ginger from './Eyebrows/Eyebrows_ginger.svg'
import Eyebrows_brown from './Eyebrows/Eyebrows_brown.svg'

const AvatarGenerator = () => {
  const [hairCounter, setHairCounter] = useState(3);
  const [eyesCounter, setEyesCounter] = useState(1);
  const [eyeBrowsCounter, setEyesBrowsCounter] = useState(1);
  const [glassesCounter, setGlassesCounter] = useState(2);
  const [lipsCounter, setLipsCounter] = useState(2);
  const [backgroundCounter, setBackgroundCounter] = useState(1);
  const [clothesCounter, setClothesCounter] = useState(1);

  //Count up function
  // isCountUp = true => Count up, false => count down
  function count(counterName, setCounter, itemsQuantity, isCountUp) {
    if (isCountUp){
      let Counter = counterName;
      if (Counter < itemsQuantity) {
        Counter += 1;
      } else {
        Counter = 1;
      }
      setCounter(Counter);
    } else {
      let Counter = counterName;
      if (Counter > 1) {
        Counter -= 1;
      } else {
        Counter = itemsQuantity;
      }
      setCounter(Counter);
    }
  }

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
    else if (counter === 4) return Eyes_grey;
    else if (counter === 5) return Eyes_red;
    else if (counter === 6) return Eyes_black;
    else if (counter === 7) return Eyes_violet;
    else if (counter === 8) return Eyes_amber;
    return null;
  };

  const setGlasses = counter => {
    if (counter === 1) return EmptyArea;
    else if (counter === 2) return Glasses;
    return null;
  };

  const setLips = counter => {
    if (counter === 1) return Lips_1;
    else if (counter === 2) return Lips_2;
    else if (counter === 3) return Lips_3;
    return null;
  };

  const setEyebrows = counter => {
    if (counter === 1) return Eyebrows_ginger;
    else if (counter === 2) return Eyebrows_brown;
    return null;
  };

  const setClothes = counter => {
    if (counter === 1) return TShirt_golden;
    else if (counter === 2) return TShirt_skyblue;
    else if (counter === 3) return TShirt_green;
    else if (counter === 4) return TShirt_pink;
    else if (counter === 5) return TShirt_rose;
    else if (counter === 6) return TShirt_light;
    else if (counter === 7) return TShirt_dark;
    else if (counter === 8) return TShirt_brown;
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
    <Fragment>
      <h1 className='text-center mb-3 mt-3'>
        Avatar Generator <span className='badge badge-info'>version 0.11</span>
      </h1>
      <h6 className='text-center'>Currently in early stage of development</h6>
      <div className='row'>
        <div className='col-lg-6 text-center mb-5'>
          <h5>Avatar:</h5>
          <div className='row d-flex justify-content-center' style={{height:'100%', minHeight:'250px'}}>
            <img
                src={Avatar}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
            <img
                src={setGlasses(glassesCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
            <img
                src={setEyes(eyesCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
            <img
                src={setEyebrows(eyeBrowsCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
            <img
                src={setHair(hairCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 5,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
              <img
                  src={setClothes(clothesCounter)}
                  style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 4,
                      position: "absolute"
                  }}
                  className='img-fluid'
                  alt='Responsive'
              />
            <img
                src={setLips(lipsCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='static'
            />
            <img
                src={setBackground(backgroundCounter)}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  position: "absolute"
                }}
                className='img-fluid'
                alt='Responsive'
            />
          </div>
        </div>
        <div className='col-lg-2 text-center'>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-danger'>Change Hairstyle</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={() => count(hairCounter, setHairCounter,4, false)}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
              </button>
                <button className='btn btn-secondary mr-1' onClick={() => count(hairCounter, setHairCounter,4, true)}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                />
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-warning'>Change Eye color</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={() => count(eyesCounter, setEyesCounter,8, false)}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
              </button>
              <button className='btn btn-secondary mr-1' onClick={() => count(eyesCounter, setEyesCounter,8, true)}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                />
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-secondary'>Change Glasses</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={() => count(glassesCounter, setGlassesCounter,2, false)}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
              </button>
              <button
                className='btn btn-secondary mr-1'
                onClick={() => count(glassesCounter, setGlassesCounter,2, true)}
              >
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                />
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-primary'>Change Eyebrows</span>
              </p>
              <button
                  className='btn btn-secondary mr-1'
                  onClick={() => count(eyeBrowsCounter, setEyesBrowsCounter, 2, false)}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
              </button>
              <button
                  className='btn btn-secondary mr-1'
                  onClick={() => count(eyeBrowsCounter, setEyesBrowsCounter, 2, false)}
              >
                <img
                    src={ArrowRight}
                    style={{ width: "24px" }}
                    alt='Right'
                />
              </button>
            </div>
            <div className='mb-2'>
              <p className='card-title'>
                <span className='badge badge-success'>Change Lips</span>
              </p>
              <button
                className='btn btn-secondary mr-1'
                onClick={() => count(lipsCounter, setLipsCounter,3, false)}
              >
                <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
              </button>
              <button className='btn btn-secondary mr-1' onClick={() => count(lipsCounter, setLipsCounter,3, true)}>
                <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
                />
              </button>
            </div>
          </div>
        <div className='col-lg-2 text-center'>
          <div className='mb-2'>
            <p className='card-title'>
              <span className='badge badge-danger'>Change Background</span>
            </p>
            <button
                className='btn btn-secondary mr-1'
                onClick={() => count(backgroundCounter, setBackgroundCounter, 10, false)}
            >
              <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
            </button>
            <button
                className='btn btn-secondary mr-1'
                onClick={() => count(backgroundCounter, setBackgroundCounter, 10, true)}
            >
              <img
                  src={ArrowRight}
                  style={{ width: "24px" }}
                  alt='Right'
              />
            </button>
          </div>
          <div className='mb-2'>
                <p className='card-title'>
                    <span className='badge badge-warning'>Change Clothes</span>
                </p>
                <button
                    className='btn btn-secondary mr-1'
                    onClick={() => count(clothesCounter, setClothesCounter, 8, false)}
                >
                    <img src={ArrowLeft} style={{ width: "24px" }} alt='Left'/>
                </button>
                <button
                    className='btn btn-secondary mr-1'
                    onClick={() => count(clothesCounter, setClothesCounter, 8, false)}
                >
                    <img
                        src={ArrowRight}
                        style={{ width: "24px" }}
                        alt='Right'
                    />
                </button>
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
    </Fragment>
  );
};

export default AvatarGenerator;
