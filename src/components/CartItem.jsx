import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';

export default function CartItem({
  product,
  removeItemFromCart,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={product.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'>
            {product.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'>
            Price: {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant='outlined'
          size='small'
          color='primary'
          onClick={() => {
            removeItemFromCart(product.id);
          }}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
