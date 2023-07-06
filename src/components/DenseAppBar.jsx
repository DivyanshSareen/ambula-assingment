import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router';
import {
  Divider,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function getAppBarTitle(path) {
  let titleMap = {
    '/todo-list': 'Todo List',
    '/shop': 'Shopping',
  };

  return titleMap[path];
}

export default function DenseAppBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer
        anchor='left'
        open={isOpen}
        onClick={() =>
          setIsOpen((isOpen) => !isOpen)
        }>
        <List
          sx={{
            width: '250px',
          }}>
          <ListItem sx={{ fontWeight: 'bold' }}>
            Task 1
          </ListItem>
          <Link to='/todo-list'>
            <ListItem>Todo</ListItem>
          </Link>
          <Divider />
          <ListItem sx={{ fontWeight: 'bold' }}>
            Task 2
          </ListItem>
          <Link to='/listing'>
            <ListItem>Product Listing</ListItem>
          </Link>
          <Link to='/cart'>
            <ListItem>Product Cart</ListItem>
          </Link>
          <Divider />
          <ListItem sx={{ fontWeight: 'bold' }}>
            Task 3
          </ListItem>
          <Link to='/pokemon'>
            <ListItem>
              PokeAPI Integration
            </ListItem>
          </Link>
          <Divider />
          <ListItem sx={{ fontWeight: 'bold' }}>
            Task 4
          </ListItem>{' '}
          <Link to='/'>
            <ListItem>Home</ListItem>
          </Link>
          <Link to='/about'>
            <ListItem>About</ListItem>
          </Link>
          <Link to='/contact'>
            <ListItem>Contact</ListItem>
          </Link>
        </List>
      </Drawer>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}>
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
