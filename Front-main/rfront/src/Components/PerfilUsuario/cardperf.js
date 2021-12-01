import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './ppp.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function CCCP({correo}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className='perf11'>
          <AccountCircleIcon/>
          <Typography className='padc' variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {correo}
          </Typography>
          <Button color="inherit">Eliminar Perfil</Button>
          <Button color="inherit">Editar Datos</Button>
          <Button color="inherit" >Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}