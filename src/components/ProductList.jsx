import {
  Badge,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import ShopItem from './ShopItem';
import { useShop } from '../context/shop-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { products, addItemToCart } = useShop();

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
      <Box sx={{ display: 'flex', gap: '1em' }}>
        <Typography variant='subtitle1'>
          View Cart
        </Typography>
        <Link to='/cart'>
          <Badge badgeContent={2} color='primary'>
            <ShoppingCartIcon
              color='action'
              fontSize='large'
            />
          </Badge>
        </Link>
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
