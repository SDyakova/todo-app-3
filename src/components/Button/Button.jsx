import React from 'react';
import classes from './Button.module.scss';

const Button = ({ type, title, onDeleted, handleEditButtonClick, onFilter, onClearAllCompleted, isSelected }) => {
  return (
    <button
      className={`${classes.btn} ${classes[type] ? classes[type] : ''} ${isSelected ? classes.selected : ''}`}
      onClick={
        type === 'delete'
          ? onDeleted
          : type === 'edit'
          ? handleEditButtonClick
          : title === 'Clear completed'
          ? onClearAllCompleted
          : onFilter
      }
    >
      {title}
    </button>
  );
};

export default Button;
