import React, { useState } from "react";
import ListItem from "./TaskListItem/TaskListItem";

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
   let existingTasks = tasks;
   existingTasks.push(task);
    setTasks(existingTasks);
    setTask('')
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
            value={task}
            onChange={event => setTask(event.target.value)}
          />
          <button
            type='submit'
            onClick={onSubmit}
            className='btn btn-warning btn-block'
          >
            Add Task
          </button>
        </form>
        <h5 className='text-center'>Tasks:</h5>
          <div>
             <ul className='list-group'>{tasks.map((item, index) => (<ListItem id={index} task={item}/>))}</ul>
          </div>
      </div>
    </div>
  );
};

export default TaskList;
