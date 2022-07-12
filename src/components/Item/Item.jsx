import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = ({products}) => {
    return (
        <div className='col-md-4 p-1'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img"
        height="300"
        image={products.img}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {`${products.title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Precio: ${products.price} -
          Todo lo que buscas en una mascota animada ! (????)`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Link to={`/detalles/${products.id}`}><Button size="small" variant="contained outlined">Caracteristicas de la Mascota</Button></Link>
      </CardActions>
    </Card>
        </div>
    )
}

export default Item