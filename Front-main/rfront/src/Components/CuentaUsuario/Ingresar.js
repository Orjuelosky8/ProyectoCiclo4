import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import loginimg from "./../../assets/Sign-in.png";
import "./logform.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Inicio");
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Inicio");
    }
    
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };  
    
    this.props.loginUser(userData);
  };

  
  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row container-logs">
          <div className="col s8 offset-s2">
            <div className="col s12 first-div">
              <div className="welcome">
                <h2>
                  !BIENVENIDO! 
                </h2>
                <p>
                  Esto es Descubre Tu Lugar Magico (DTLM); Aquí podrás encontrar informacion, recomendaciones y 
                  comentarios para tomar unas mejores decisiones a la hora que vayas a viajar, logueate par empezar 
                  con la diversión. <br/>! Buena suerte encontrando tu proximo destino ideal ¡
                </p>
                <hr/>
                <img src={loginimg}/>
                <h4>
                  <b>Acceda</b> a continuación:
                </h4>
              </div>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="inputs form-control"
                  // className={classnames("", {
                  //   invalid: errors.email || errors.emailnotfound,
                  // })}
                />
                {/* <label htmlFor="email">Email</label> */}
                <span className="text-danger invalid">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type='password'
                  placeholder="Contraseña"
                  className="inputs form-control"
                  // className={classnames("", {
                  //   invalid: errors.password || errors.passwordincorrect,
                  // })}
                />
                <span className="text-danger invalid">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="div-change-option">
                <p className="text-secondary change-option">
                  ¿Aún no tienes una cuenta?, creála ahora mismo → <Link to="/registrar" className="another-option">Registrar</Link>
                </p>
              </div>
              <div className="col s12 container-btn" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-login btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Acceder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
