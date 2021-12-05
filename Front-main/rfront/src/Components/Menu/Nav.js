import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Stack from "@mui/material/Stack";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css";
import { Link } from "react-router-dom";
import logoheader from "../../assets/Home/logoheader.png";
import { logoutUser } from "../../actions/authActions";
import imgso from "./../../assets/Sign-out.png";

class Nav extends React.Component {

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
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
              <Link to="/Recommendations" className="btnin">
                Recomendaciones
              </Link>
            </Button>
            <Button color="inherit" className="btnNav">
              <Link to="/user" className="btnin">
                Participar
              </Link>
            </Button>
            <Button color="inherit" className="btnNav">
              <Link to="/create" className="btnin">
                Opinar
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

            <Button color="inherit" className="btnNav" onClick={this.onLogoutClick}>
              <Link to="/logout" className="btnin" >
                Salir
                <img src={imgso} className="s-o-img"/>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );

}}


Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);

