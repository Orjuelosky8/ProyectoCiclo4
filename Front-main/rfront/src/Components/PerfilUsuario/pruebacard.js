import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ppp.css';
import SimpleBottomNavigation from './botonesss';


export default function ImgMediaCard({nombre,descripcion,imagen}) {
  return (
    <Card className="conttt" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="183"
        image={imagen}
      />
      <CardContent className="descripcion">
        <Typography gutterBottom variant="h5" component="div">
          <h3>{nombre}</h3>
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          <p className='txtdes'>{descripcion}</p>
        </Typography>
      </CardContent>
      <CardActions className="descripcion">
        <SimpleBottomNavigation/>
      </CardActions>
    </Card>
  );
}