import {
  Box,
  Checkbox,
  Typography,
} from '@mui/material';

export default function TodoItem({
  task,
  setTasks,
}) {
  const handleChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <Box
      sx={{
        padding: '1em',
        border: '5px solid #288bed',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Checkbox
        checked={!!task.isComplete}
        onChange={handleChange}
      />
      <Typography sx={{}}>
        {task.title}
      </Typography>
    </Box>
  );
}
