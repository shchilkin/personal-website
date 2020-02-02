import React from "react";

const ColorPalette = () => {
    return <div className='container-fluid'>
        <h1 className='text-center mt-3'>Site Color Palette</h1>
        <div className='row'>
        <div className='col-6 mb-3 text-center'>
        <span className="d-block p-2 mt-3" style={{backgroundColor:'#ffE138'}}>#FFE138 | Banana Yellow</span>
        <span className="d-block p-2" style={{backgroundColor:'#fff09c'}}>#FFF09c</span>
        <span className="d-block p-2" style={{backgroundColor:'#EBD064'}}>#EBD064</span>
        <span className="d-block p-2" style={{backgroundColor:'#EAB345'}}>#EAB345</span>
        <span className="d-block p-2" style={{backgroundColor:'#FC4365'}}>#FC4365</span>
        <span className="d-block p-2" style={{backgroundColor:'#70974C'}}>#70974C</span>
        <span className="d-block p-2" style={{backgroundColor:'#3C8783'}}>#3C8783</span>
        <span className="d-block p-2 text-white" style={{backgroundColor:'#2E2C4E'}}>#2E2C4E</span>
        </div>
        <div className='col-6 mb-3 text-center'>
            <span className="d-block p-2 mt-3" style={{backgroundColor:'#E6DFBC'}}>#E6DFBC</span>
            <span className="d-block p-2" style={{backgroundColor:'#46A89F'}}>#46A89F</span>
            <span className="d-block p-2" style={{backgroundColor:'#C15554'}}>#C15554</span>
            <span className="d-block p-2" style={{backgroundColor:'#F7E0CC'}}>#F7E0CC</span>
            <span className="d-block p-2" style={{backgroundColor:'#FC4365'}}>#FC4365</span>
            <span className="d-block p-2" style={{backgroundColor:'#70974C'}}>#70974C</span>
            <span className="d-block p-2" style={{backgroundColor:'#3C8783'}}>#3C8783</span>
            <span className="d-block p-2 text-white" style={{backgroundColor:'#F1C3E3'}}>#F1C3E3</span>
        </div>
        </div>
    </div>
};

export default ColorPalette;