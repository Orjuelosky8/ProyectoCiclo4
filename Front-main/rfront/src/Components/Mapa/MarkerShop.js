import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import img from '../../assets/Mapa/tienda.jpg'

import {Marker, Popup} from 'react-leaflet'
import {IconShop} from "./IconShop";

const MarkerShop = (place) => {
    
    const anchor = 'right'
 

    const [state, setState] = React.useState({
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
    
      setState({ ...state, [anchor]: open });
    };

    const visitarPagina = () => (event) =>{
        console.log("Visitando pagina")
        console.log(place.place.popup.id)
        
    }

    const añadirFavoritos = () => (event) =>{
        console.log("Añadiendola a favoritos")
        console.log(place.place.popup.id)
    }
    
    const infoDrawer = (anchor,place) => (
        
        <Box
          className='icono'
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className='box-imagen'>
            <img  className='box-imagen' src={img} alt="Imagen " />
          </div> 
          <div className='box-nombreshop'>
            <h1 className='h1'>{place.place.popup.nombre}</h1>
          </div>
          <div className='box-nombreshop'> 
            <h2 className='h2'>< FmdGoodIcon />Cr 3</h2>
          </div>
          <div className='box-descripcion'>
            <h3 className='h2'>{place.place.popup.descripción}</h3>
          </div>
          <div className='box-btn'>
            <button onClick={visitarPagina()} className='btn-style1'>Visitar Pagina</button>
          </div>
          <div className='box-btn'>
            <button onClick={añadirFavoritos()} className='btn-style'>Añadir a Favoritos</button>
          </div>
        </Box>
    );
    
    return (
        <Marker position={place.place.popup.geometry} icon={IconShop} >
        <Popup>   
          <h1 className='text'>{place.place.popup.nombre}</h1>
          <Divider/>
          <h3 className='text'>{place.place.popup.descripción}</h3>
          <Divider sx={{m: 2}}/>
            <div  className='text'>
                <React.Fragment key={anchor}>
                    <button className='btn-info' variant="contained" onClick={toggleDrawer(anchor, true)}>Mas Informacion</button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          
                            {infoDrawer(anchor, place)}

                        </Drawer>
                </React.Fragment>
            </div> 
        </Popup>
      </Marker>
    )
}

export default MarkerShop
