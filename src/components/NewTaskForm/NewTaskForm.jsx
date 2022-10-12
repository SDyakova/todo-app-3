import React from 'react';
import classes from './NewTaskForm.module.scss';

const NewTaskForm = ({ addTask }) => {
  return (
    <div className={classes.wrapper}>
      <input className={classes.input} placeholder="What needs to be done?" onKeyUp={addTask}></input>
    </div>
  );
};

export default NewTaskForm;
