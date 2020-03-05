import React, { useState } from "react";
import ListItem from "./TaskListItem/TaskListItem.component";
import Container from "../../../Layout/Container/Container.component";
import Button from "../../../Layout/Buttons/Button/Button.component";

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onSubmit = event => {
    let existingTasks = tasks;
    if (task.length === 0){
        console.log('Task Field is empty')
    }
    else{
        existingTasks.push(task);
        setTasks(existingTasks);
        setTask('');
    }
    event.preventDefault();
  };

    const  onDelete = (event, id) => {
        event.preventDefault();
        console.log('id',id);
    };

  return (
      <Container>
          <div className='card-body'>
            <h5 className='card-title text-center'>Task list</h5>
            <form className='mb-4'>
            <input
              id='taskInput'
              className='form-control mb-3'
              type='text'
              placeholder='Enter Task'
              value={task}
              onChange={event => setTask(event.target.value)}
            />
            <Button text={'Add item'} onClick={(event) => onSubmit(event)}/>
          </form>
          <h5 className='text-center'>Tasks:</h5>
          <div>
             <ul className='list-group'>{tasks.map((item, index) => (<ListItem id={index} task={item} onDelete={(event, index) => onDelete(event, index)}/>))}</ul>
          </div>
         </div>git
    </Container>

  );
};

export default TaskList;
