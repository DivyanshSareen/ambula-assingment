import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import CartItem from './CartItem';
import { useShop } from '../context/shop-context';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function CartList() {
  const {
    cart,
    getCartTotal,
    removeItemFromCart,
  } = useShop();

  const [total, setTotal] = useState(
    getCartTotal()
  );

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  return (
    <>
      {' '}
      {cart.length === 0 ? (
        <Link to={'/listing'}>
          <Button
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
            variant='outlined'>
            View Products
          </Button>
        </Link>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            margin: '1em',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Link to={'/listing'}>
              <ArrowBackIcon
                fontSize='large'
                sx={{
                  position: 'absolute',
                  left: '0.5rem',
                }}
                color='action'
              />
            </Link>
            <Typography variant='h4'>
              Shopping Cart
            </Typography>
          </Box>
          <Box
            sx={{
              margin: '1em 2em 1em 1em',
            }}>
            <Typography variant='h6'>
              Items in Cart: {cart.length}
            </Typography>
            <Typography variant='h6'>
              Total Amount: {total}
            </Typography>
          </Box>
          {cart.map((product) => (
            <CartItem
              product={product}
              removeItemFromCart={
                removeItemFromCart
              }
            />
          ))}
        </Box>
      )}
    </>
  );
}
