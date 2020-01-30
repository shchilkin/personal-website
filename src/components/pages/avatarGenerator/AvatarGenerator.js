import React, { useState } from "react";
import Avatar from "./Avatar-example.png";
import AvatarBold from "./Avatars_bold.svg";
import Hair_1 from "./Hair_1.svg";
import Hair_2 from "./Hair_2.svg";
import Hair_3 from "./Hair_3.svg";

const AvatarGenerator = () => {
  const [hair_1_Visibility, setHair1Visibility] = useState(true);
  const [counter, setCounter] = useState(1);
  // const [hair_2_Visibility, setHair2Visibility] = useState(false);
  const onClick = () => {
    let Counter = counter;
    if (Counter < 3) {
      Counter += 1;
    } else {
      Counter = 1;
    }
    setCounter(Counter);
  };
  console.log("global", counter);
  const setHair = counter => {
    if (counter === 1) return Hair_1;
    else if (counter === 2) return Hair_2;
    else if (counter === 3) return Hair_3;
    return null;
  };

  return (
    <div>
      <h1 className='text-center mb-3'>
        Avatar Generator <span className='badge badge-info'>v. Alpha 0.1</span>
      </h1>
      <img
        src={AvatarBold}
        style={{
          width: "300px",
          height: "300px",
          zIndex: 1,
          position: "absolute"
        }}
        class='img-fluid'
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
        class='img-fluid'
        alt='Responsive'
      />

      <p className='text-center'>Currently in early stage of development</p>
      <h5 className='text-center'>Avatar:</h5>
      <div class='d-flex justify-content-center'>
        <button className='btn btn-danger' onClick={onClick}>
          Change Hairstyle
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;

// <h5 className='text-center'>Avatar example:</h5>
// <div class='d-flex justify-content-center'>
//   <img
//     src={Avatar}
//     style={{ width: "300px", height: "300px" }}
//     class='img-fluid'
//     alt='Responsive'
//   />
// </div>

// {hair_1_Visibility ? (
//   <img
//     src={`Hair_${counter}`}
//     style={{
//       width: "300px",
//       height: "300px",
//       zIndex: 1,
//       position: "relative"
//     }}
//     class='img-fluid'
//     alt='Responsive'
//   />
// ) : (
//   <img
//     src={Hair_3}
//     style={{
//       width: "300px",
//       height: "300px",
//       zIndex: 3,
//       position: "relative"
//     }}
//     class='img-fluid'
//     alt='Responsive'
//   />
// )}
