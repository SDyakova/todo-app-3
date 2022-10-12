import React from 'react';
import Button from '../Button';
import TaskFilter from '../TaskFilter';
import classes from './Footer.module.scss';

const Footer = ({ onFilter, currentFilter, onClearAllCompleted, taskItems }) => {
  let leftItems = taskItems.filter((task) => !task.isCompleted).length;
  return (
    <footer className={classes.footer}>
      <span>{leftItems} items left</span>
      <TaskFilter onFilter={onFilter} currentFilter={currentFilter} />
      <Button title="Clear completed" onClearAllCompleted={onClearAllCompleted} />
    </footer>
  );
};

export default Footer;
