import React from 'react';
import Task from '../Task';
import classes from './TaskList.module.scss';

const TaskList = ({ taskItems, onDeleted, onEditingTask, onCompleted }) => {
  const list = taskItems.map(({ id, title, isCompleted }) => {
    return (
      <Task
        key={id}
        title={title}
        id={id}
        onDeleted={onDeleted}
        onEditingTask={onEditingTask}
        onCompleted={() => onCompleted(id)}
        isCompleted={isCompleted}
      />
    );
  });

  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
