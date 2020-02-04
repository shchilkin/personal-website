import React  from "react";
import { Gradient } from "react-gradient";

const About = () => {
  const gradients = [
    ["#59c2ff", "#1270e3"],
    ["#8739e5", "#ff63de"]
  ];
  return (
    <Gradient
      gradients={gradients}
      property='background'
      duration={8000}
      angle='45deg'
    >
      <div className='pt-5 pb-5'>
        <div className='d-flex justify-content-center'>
          <h1 className='display-4 text-center'>Aleksandr Shchilkin</h1>
        </div>
        <div className='d-flex display-4 justify-content-center'>
          <h1>IT Student</h1>
        </div>
      </div>
    </Gradient>
  );
};

export default About;

