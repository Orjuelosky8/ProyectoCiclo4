import React, {Switch} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAppBar from "./Components/Menu/Nav";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Team from "./Components/Team/Team.jsx";
import Registrar from "./Components/CuentaUsuario/Registrar";
import Ingresar from "./Components/CuentaUsuario/Ingresar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About.jsx";
import Mapa from "./Components/Mapa/Mapa.jsx";
import VistaPerfil from "./Components/PerfilUsuario/pruebasmui";
import Footer from "./Components/Menu/Footer.jsx";
import { Redirect } from "react-router";
import NavBar from "./Components/Menu/NavBar";
import Explorar from "./Components/Explore/Explorar.jsx"
import PagProveedor from "./Components/PaginaProveedor/PagProveedor";
import PublicarNegocio from "./Components/PublicarNegocio/PublicarNegocio";
import Navigation from './Components/Crud/Navigation'
import NotesList from './Components/Crud/NotesList'
import CreateNote from './Components/Crud/CreateNote'
import CreateUser from './Components/Crud/CreateUser'

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        logged: false,
        username: "",
      };
    }

  /*async updateState(logged, username) {
    alert("jhsdjads");
    await this.setState({ 
      logged: false,
      username: "",
    });
  }

  Logout() {
    this.state({
      logged: false,
    })
  }*/
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.this.state.logged = false;
  };

  Login() {
    return(
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Ingresar} onTryLogin = {this.updateState}/>
          <Route path="/Registrar" exact component={Registrar}/>
          <Route path="/Ingresar" exact component={Ingresar} onTryLogin = {this.updateState}/>
          <Footer />
        </Router>
      </Provider>
    );
  }
  
  App() {
    return (
      <Provider store={store}>
        <Router>
          <ButtonAppBar />
          <Route path="/" exact component={Home} />
          <Route path="/Inicio" exact component={Home} />
          <Route path="/Team" exact component={Team} />
          <Route path="/About" exact component={About} />
          <Route path="/Explore" exact component={Explorar}/>
          <Route path="/Ingresar" exact component={Ingresar} /*onClick={this.onLogoutClick} /*onTryLogin={this.setState({logged:true})}*/ />
          <Route path="/Registrar" exact component={Registrar}/>
          <Route path="/places" component={NotesList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
          <Footer />
        </Router>
      </Provider>
    );
  }
  
  render() {
    // if(this.state.logged === true){
       //return this.App();
    // } else{
        return this.App();
    // }
  }
}

