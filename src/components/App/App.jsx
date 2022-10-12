import React, { useState } from 'react';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import classes from './App.module.scss';

let maxId = 100;

function App() {
  const createTask = (text) => {
    return {
      id: maxId++,
      title: text,
      isCompleted: false,
    };
  };

  const initialState = {
    taskItems: [createTask('New Task1'), createTask('New Task2'), createTask('New Task3')],
    filteredItems: [],
    currentFilter: 'All',
  };
  const [appState, setAppState] = useState(initialState);
  const { taskItems, filteredItems, currentFilter } = appState;

  const addTask = (e) => {
    const newTask = createTask(e.target.value);
    if (e.key === 'Enter') {
      setAppState((appState) => {
        const newArr = [...taskItems, newTask];
        return { ...appState, taskItems: newArr };
      });
      e.target.value = '';
    }
  };

  const deleteTask = (id) => {
    setAppState((appState) => {
      const newArr = taskItems.filter((task) => task.id !== id);
      return { ...appState, taskItems: newArr };
    });
  };

  const editTask = (title, id) => {
    setAppState((appState) => {
      const newArr = taskItems.map((task) => (task.id === id ? { ...task, title } : task));
      return { ...appState, taskItems: newArr };
    });
  };

  const onToggleCompleted = (id) => {
    setAppState((appState) => {
      const newArr = taskItems.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
      return { ...appState, taskItems: newArr };
    });
  };

  const getFilteredItems = (title) => {
    setAppState((appState) => {
      let filteredItems = [];
      if (title === 'Completed') {
        filteredItems = taskItems.filter(({ isCompleted }) => isCompleted);
      } else if (title === 'Active') {
        filteredItems = taskItems.filter(({ isCompleted }) => !isCompleted);
      } else {
        filteredItems = taskItems;
      }

      return {
        ...appState,
        filteredItems,
        currentFilter: title,
      };
    });
  };

  const onClearAllCompleted = () => {
    const getNewState = (state) => state.filter((task) => !task.isCompleted);

    setAppState((appState) => {
      return {
        ...appState,
        taskItems: getNewState(taskItems),
        filteredItems: getNewState(filteredItems),
      };
    });
  };

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1 className={classes.title}>todos</h1>
      </header>
      <div className={classes.main}>
        <NewTaskForm addTask={addTask} />
        <TaskList
          taskItems={currentFilter === 'All' ? taskItems : filteredItems}
          onDeleted={deleteTask}
          onEditingTask={editTask}
          onCompleted={onToggleCompleted}
        />
        <Footer
          onFilter={getFilteredItems}
          currentFilter={currentFilter}
          onClearAllCompleted={onClearAllCompleted}
          taskItems={taskItems}
        />
      </div>
    </div>
  );
}

export default App;
