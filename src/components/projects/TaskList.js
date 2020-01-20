import React from "react";

const TaskList = () => {
  return (
    <div className='container-fluid'>
      <div className='card mb-3'>
        <div className='card-body' id=''>
          <h4 className='card-title text-center'>Task List</h4>
          <form id='task-form'>
            <div className='input-group mb-3'>
              <input
                id='task'
                className='form-control'
                type='text'
                placeholder='New task'
              />
            </div>
            <input
              className='btn btn-block btn-dark'
              type='submit'
              value='Add Task'
            />
          </form>
          <hr />
          <div>
            <h5 className='text-center'>Search Bar</h5>
            <div>
              <input
                type='text'
                id='filter'
                className='form-control'
                type='text'
                name='filter'
                placeholder='Search for tasks...'
              />
            </div>
            <hr />
            <h5 id='task-title' className='text-center'>
              Tasks
            </h5>
            <ul className='list-group' id='listGroup'>
              <li
                className='list-group-item'
                id='li-placeholder'
                style={{ backgroundColor: "lightpink" }}
              >
                Your Tasks will appear here!
              </li>
            </ul>
          </div>
          <hr />
          <a href='#' id='clear-tasks ' className='btn btn-block btn-dark'>
            Clear tasks
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
