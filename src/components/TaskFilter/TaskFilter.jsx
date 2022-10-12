import React from 'react';
import Button from '../Button';
import classes from './TaskFilter.module.scss';

const TaskFilter = ({ onFilter, currentFilter }) => {
  const filterBtns = [
    { title: 'All', id: 'b1' },
    { title: 'Active', id: 'b2' },
    { title: 'Completed', id: 'b3' },
  ];

  const filterList = filterBtns.map(({ title, id }) => (
    <Button title={title} key={id} onFilter={() => onFilter(title)} isSelected={currentFilter === title} />
  ));

  return <div>{filterList}</div>;
};

export default TaskFilter;
