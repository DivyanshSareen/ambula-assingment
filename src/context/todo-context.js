import {
  useContext,
  createContext,
  useState,
} from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Assignment',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Water Plants',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Touch Grass',
      isComplete: false,
    },
  ]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(updatedTasks);
  };

  const checkTask = (id, value) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, isComplete: value }
        : task;
    });
    setTasks(updatedTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        checkTask,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodo };
