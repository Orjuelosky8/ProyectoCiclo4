import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css";
import { Link } from "react-router-dom";
import logoheader from "../../assets/Home/logoheader.png";
import { logoutUser } from "../../actions/authActions";


export default function ButtonAppBar() {
  const [state, setstate] = useState({
    longitud: 4.627354,
    latitud: -74.082807,
    zoom: 13,
    minZoom: 5,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setstate({
          longitud: position.coords.longitude,
          latitud: position.coords.latitude,
          zoom: 18,
          minZoom: 8,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="pNav">
          <Typography className="Nav-izq" mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logoheader} alt="HoneyPet" />
            <Link to="/Inicio" className="btnin title-pr">
              Descubriendo Travel
            </Link>
          </Typography>
          <Button color="inherit" className="btnNav">
            <Link to="/Inicio" className="btnin">
              Inicio
            </Link>
          </Button>


          <Button color="inherit" className="btnNav">
            <Link to="/create" className="btnin">
              Create Place
            </Link>
          </Button>
          <Button color="inherit" className="btnNav">
            <Link to="/user" className="btnin">
              Crear User
            </Link>
          </Button>
          <Button color="inherit" className="btnNav">
            <Link to="/places" className="btnin">
              Explorar
            </Link>
          </Button>
          <Button color="inherit" className="btnNav">
            <Link to="/About" className="btnin">
              Acerca de Nosotros
            </Link>
          </Button>
          <Button color="inherit" className="btnNav">
            <Link to="/Team" className="btnin">
              Nuestro Equipo
            </Link>
          </Button>

          <Button color="inherit" className="btnNav" onclick={logoutUser}>
            <Link to="/logout" className="btnin" >
              Salir
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
