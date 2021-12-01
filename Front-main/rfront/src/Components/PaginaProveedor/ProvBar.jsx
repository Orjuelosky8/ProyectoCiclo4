import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BusinessIcon from '@mui/icons-material/Business';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function ProvBar({email}) {
    return (
        <div className="bar-container">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="relative" color="primary">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    {/* <MenuIcon /> */}
                  <BusinessIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{email}</Typography>
                  <Button color="inherit">Eliminar Perfil</Button>
                  <Button color="inherit">Cerrar Sesión</Button>
                  <Button color="inherit">Editar Página</Button>
                </Toolbar>
              </AppBar>
            </Box>
        </div>
    );
}

export default ProvBar;
