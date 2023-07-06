import { useState } from 'react';
import { TodoItem } from '../components';
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useTodo } from '../context/todo-context';

export default function TodoListPage() {
  const { tasks, setTasks } = useTodo();

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
          autoComplete='off'
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
          margin: '1em 2em 1em 1em',
          textAlign: 'end',
        }}>
        <Typography variant='h6'>
          Total Tasks: {tasks.length}
        </Typography>
        <Typography variant='h6'>
          Tasks Completed:{' '}
          {
            tasks.filter(
              (task) => task.isComplete
            ).length
          }
        </Typography>
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
