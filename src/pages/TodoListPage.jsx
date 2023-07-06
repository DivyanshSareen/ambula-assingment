import { useState } from 'react';
import { TodoItem } from '../components';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';

export default function TodoListPage() {
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
  const [input, setInput] = useState('');

  const createTask = () => {
    if (input.length === 0) {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: input,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  return (
    <Box>
      <Box
        sx={{
          margin: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1em',
        }}>
        <TextField
          id='outlined-basic'
          label='Enter New Task'
          variant='outlined'
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />
        <Button
          variant='contained'
          size='large'
          onClick={createTask}>
          Add
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          margin: '1em',
        }}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            setTasks={setTasks}></TodoItem>
        ))}
      </Box>
    </Box>
  );
}
