import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BlurOnIcon
          sx={{
            minWidth: '300px',
            minHeight: '300px',
          }}
        />
        <Typography variant={'h4'}>
          Blur Tech Solutions
        </Typography>
        <Typography
          variant='body2'
          color={'red'}
          fontWeight={'bold'}>
          {
            'This project is made for mobile screens(<400px)'
          }
        </Typography>
        <Typography
          variant='body1'
          sx={{ padding: '2em' }}>
          Welcome to Blur Tech Solutions! We are a
          trusted consultancy, specializing in
          computer vision projects. Our team of
          experts provides comprehensive technical
          guidance and innovative solutions to
          meet your unique business needs.
        </Typography>
        <Box sx={{ display: 'flex', gap: '1em' }}>
          <Link to={'/about'}>
            <Button variant='outlined'>
              About
            </Button>
          </Link>
          <Link to={'/contact'}>
            <Button variant='outlined'>
              Contact
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
