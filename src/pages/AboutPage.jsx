import { Box, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Box sx={{ margin: '1em' }}>
      <Typography variant='h4'>
        Our Projects
      </Typography>
      <Typography
        variant='h5'
        fontWeight='bold'
        marginTop='1em'>
        Vehicle Detection System
      </Typography>
      <Typography variant='body1'>
        Discover our cutting-edge Vehicle
        Detection System at Blur Tech Solutions,
        harnessing the power of advanced computer
        vision algorithms and deep learning
        techniques. Experience seamless
        integration, real-time analytics, and
        enhanced safety measures, revolutionizing
        the transportation industry.
      </Typography>
      <Typography
        variant='h5'
        fontWeight='bold'
        marginTop='1em'>
        Video Call Monitoring System
      </Typography>
      <Typography variant='body1'>
        Ensure compliance, enhance security, and
        optimize productivity with our real-time
        analytics, facial recognition, and
        sentiment analysis capabilities.
        Experience the future of remote
        communication monitoring with our
        industry-leading solution.
      </Typography>
    </Box>
  );
}
