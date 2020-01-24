import React, { useState } from "react";
import ReactDOM from "react-dom";

const TaskList = () => {
  const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  console.log("Tasks", tasks);

  console.log("Task text", task);
  const element = <h1>{task}</h1>;

  const onSubmit = event => {
    event.preventDefault();
    console.warn(task);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title text-center'>Task list</h5>
        <form className='mb-4'>
          <input
            id='taskInput'
            className='form-control mb-2'
            type='text'
            placeholder='Enter Task'
            onChange={event => setTask(event.target.value)}
          ></input>
          <button
            type='submit'
            onClick={onSubmit}
            className='btn btn-warning btn-block'
          >
            Add Task
          </button>
        </form>
        <h5 className='text-center'>Tasks:</h5>
        <div id='tasks'></div>
      </div>
    </div>
  );
};

export default TaskList;
