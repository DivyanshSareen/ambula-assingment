import {
  Badge,
  Box,
  Typography,
  Button,
} from '@mui/material';
import ShopItem from './ShopItem';
import { useShop } from '../context/shop-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { products, addItemToCart, cart } =
    useShop();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        margin: '1em',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant='h4'>
        Product Listing
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '1em',
          alignItems: 'center',
        }}>
        <Link to='/cart'>
          <Button variant='outlined'>
            <Typography variant='subtitle1'>
              View Cart
            </Typography>
          </Button>
        </Link>
        <Badge
          badgeContent={cart.length}
          color='primary'>
          <ShoppingCartIcon
            color='action'
            size='large'
          />
        </Badge>
      </Box>
      {products.map((product) => (
        <ShopItem
          product={product}
          addItemToCart={addItemToCart}
        />
      ))}
    </Box>
  );
}
