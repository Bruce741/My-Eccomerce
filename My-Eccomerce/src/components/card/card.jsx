import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { CartasContext } from '../../App';
import toast from 'react-hot-toast';



const CardCarta = ({ carta }) =>  {

  const store = React.useContext(
    CartasContext
  );

  const HandlerClick = () => {
    store.setCartasPedidas((prevCartas) => [...prevCartas, carta]);
    toast.success("Producto agregado");
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={carta.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carta.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tipo: {carta.tipo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {carta.precio}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={HandlerClick}>Agregar al carrito</Button>
    </Card>
  );
};

export default CardCarta