import React from "react";
import TaskList from "./TaskList/TaskList";

const SmallProjects = () => {
  return (
    <div className='pt-3 pb-3'>
      <div className='container'>
        <div
          className='d-flex justify-content-center'
          style={{ verticalAlign: "center" }}
        >
          <h1>
            Small Projects <span className='badge badge-danger'>TODO </span>
          </h1>
        </div>
      </div>
      <div className='container-fluid pt-3 pb-3'>
        <div className='col-lg-4'>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
