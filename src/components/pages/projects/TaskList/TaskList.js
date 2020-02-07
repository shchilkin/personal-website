import React, { useState } from "react";
import ListItem from "./TaskListItem/TaskListItem";
import Container from "../../../Layout/Container/Container.component";
import ButtonBlock from "../../../Layout/Buttons/Button-Block/Button-Block.component";

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

  return (
      <Container>
        {/*<div className='card'>*/}
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
            <ButtonBlock text={'Add item'} onClick={(event) => onSubmit(event)}/>
          </form>
          <h5 className='text-center'>Tasks:</h5>
          <div>
             <ul className='list-group'>{tasks.map((item, index) => (<ListItem id={index} task={item}/>))}</ul>
          </div>
         </div>
      {/*</div>*/}
    </Container>

  );
};

export default TaskList;
