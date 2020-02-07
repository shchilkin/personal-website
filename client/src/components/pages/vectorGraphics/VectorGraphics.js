import React, { Fragment } from "react";
import { Gradient } from "react-gradient";
import CatV1 from "../../../images/cat-v.1.png";

const VectorGraphics = () => {
  const gradients = [
    ["#59c2ff", "#1270e3"],
    ["#8739e5", "#ff63de"]
  ];

  return (
    <Fragment>
      <Gradient
        gradients={gradients}
        property='background'
        duration={8000}
        angle='45deg'
      >
        <Fragment>
          <div className='pt-5 pb-5'>
            <div className='container'></div>
            <div className='d-flex justify-content-center'>
              <h1 className='display-4 text-center'>Small Projects</h1>
            </div>
            <div className='d-flex display-4 justify-content-center'>
              <h1>Vector Graphics</h1>
            </div>
          </div>
        </Fragment>
      </Gradient>
      <div className='container-fluid bg-secondary'>
        <div className='row'>
          <div className='card'>
            <div class='card-img-overlay'>
              <h5 class='card-title'>
                <span className='badge badge-secondary'>V.1</span>
              </h5>
            </div>
            <img src={CatV1} className='img-fluid' alt='...' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VectorGraphics;
