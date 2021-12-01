import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAppBar from "./Components/Menu/Nav";
import Proveedores from "./Components/Team/Team.jsx";
import Home from "./Components/Home/Home";
import About from "./Components/About/About.jsx";
import Mapa from "./Components/Mapa/Mapa.jsx";
import VistaPerfil from "./Components/PerfilUsuario/pruebasmui";
import Footer from "./Components/Menu/Footer.jsx";
import { Redirect } from "react-router";
import NavBar from "./Components/Menu/NavBar";
import Explorar from "./Components/Explore/Explorar.jsx"
import Registrar from "./Components/CuentaUsuario/Registrar";
import Ingresar from "./Components/CuentaUsuario/Ingresar";
import PagProveedor from "./Components/PaginaProveedor/PagProveedor";
import PublicarNegocio from "./Components/PublicarNegocio/PublicarNegocio";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      {/* <NavBar/> */}
      {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}

      <Route path="/" exact component={Home} />
      <Route path="/Team" exact component={Proveedores} />
      <Route path="/Inicio" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path="/Mapa" exact component={Mapa} />
      <Route path="/Explore" exact component={Explorar}/>
      <Route path="/Perfil" exact component={VistaPerfil} />
      <Route path="/Registrar" exact component={Registrar} />
      <Route path="/Ingresar" exact component={Ingresar} />
      {/* <Route path='/Pagina' exact component={PagProveedor}/> */}
      {/* <Route path="/Publicar" exact component={PublicarNegocio} /> */}

      <Footer />
    </Router>
  );
}

export default App;
