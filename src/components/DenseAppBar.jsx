import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router';

function getAppBarTitle(path) {
  let titleMap = {
    '/todo-list': 'Todo List',
    '/shop': 'Shopping',
  };

  return titleMap[path];
}

export default function DenseAppBar() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            color='inherit'
            component='div'>
            {getAppBarTitle(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
