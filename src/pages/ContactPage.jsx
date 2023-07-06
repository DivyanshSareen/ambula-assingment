import {
  Box,
  TextField,
  Typography,
  FormControl,
  Button,
} from '@mui/material';
import Textarea from '@mui/joy/Textarea';

export default function ContactPage() {
  return (
    <Box>
      <Typography
        variant='h4'
        margin='1em'
        textAlign={'center'}>
        Get In Touch!
      </Typography>
      <Typography
        variant='body2'
        textAlign={'center'}>
        We will get back to you within 5 business
        days
      </Typography>

      <FormControl
        sx={{
          margin: '1em',
          display: 'flex',
          gap: '1em',
        }}>
        <TextField label='First Name'></TextField>
        <TextField label='Last Name'></TextField>
        <TextField label='Organization Name'></TextField>
        <Textarea
          placeholder='Any Additional Information'
          minRows={5}></Textarea>
        <Button type='submit' variant='outlined'>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
