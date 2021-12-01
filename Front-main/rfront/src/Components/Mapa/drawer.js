import React from 'react'
import Box from '@mui/material/Box';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const infoDrawer = (props) => {
    
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



    console.log(props)
    return (
        <Box
          className='icono'
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className='box-imagen'>
            <img  className='box-imagen' src={place.popup.imagen} alt="" />
          </div>
          <div className='box-nombreshop'>
            <h1 className='h1'>{place.popup.nombre}</h1>
          </div>
          <div className='box-nombreshop'> 
            <h2 className='h2'>< FmdGoodIcon />Cr 3</h2>
          </div>
          <div className='box-descripcion'>
            <h3 className='h2'>{place.popup.descripción}</h3>
          </div>
          <div className='box-btn'>
            <button className='btn-style1'>Visitar Pagina</button>
          </div>
          <div className='box-btn'>
            <button className='btn-style'>Añadir a Favoritos</button>
          </div>
        </Box>
       
    )
}

export default infoDrawer
