import React from "react";
import TaskList from "../projects/TaskList";

const SmallProjects = () => {
  return (
    <div className='pt-3 pb-3'>
      <div className='container'>
        <div className='alert alert-warning'>
          This page is under development
        </div>
        <div className='d-flex justify-content-center '>
          <h1>Small Projects</h1>
        </div>
      </div>
      <div className='container-fluid bg-dark pt-3 pb-3'>
        <div className='col-4'>
          <div className='row'></div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
