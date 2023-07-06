import {
  Box,
  Checkbox,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTodo } from '../context/todo-context';

export default function TodoItem({ task }) {
  const { deleteTask, checkTask } = useTodo();

  const handleChange = (e, id) => {
    checkTask(id, e.target.checked);
  };
  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <Box
      sx={{
        padding: '1em',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 2,
        borderRadius: 2,
        background: '#efefef',
      }}>
      <Checkbox
        checked={!!task.isComplete}
        onChange={(e) => {
          handleChange(e, task.id);
        }}
      />
      <Typography sx={{}}>
        {task.title}
      </Typography>
      <IconButton
        sx={{ marginLeft: 'auto' }}
        onClick={() => {
          handleDelete(task.id);
        }}>
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  );
}
