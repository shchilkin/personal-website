import React from "react";
import TaskList from "./TaskList";

const SmallProjects = () => {
  return (
    <div className='pt-3 bg-warning'>
      <div className='container'>
        <div
          className='d-flex justify-content-center'
          style={{ verticalAlign: "center" }}
        >
          <h1>
            Small Projects <span className='badge badge-danger'>TODO </span>
          </h1>
        </div>
        <div className='d-flex justify-content-center '>
          <p>
            <span className='badge badge-danger'>TODO </span>
            <span className='badge badge-info'>Add description</span> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus
            vitae risus at fringilla. Vivamus ut placerat elit. Fusce dignissim
            urna eget interdum ultricies. Nulla nec ultricies orci, id mollis
            erat. Aenean augue leo, congue nec ante at, posuere molestie neque.
            Donec in ipsum pretium, placerat ipsum et, malesuada purus. Sed
            cursus, ligula eu ullamcorper pharetra, mi felis vehicula ante, ut
            cursus mi purus id nulla.
          </p>
        </div>
      </div>
      <div className='container-fluid bg-dark pt-3 pb-3'>
        <div className='col-lg-4'>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
