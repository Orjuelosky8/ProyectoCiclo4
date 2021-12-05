import React, { Component } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import signupimg from "./../../assets/Sign-up.png";
import "./logform.css";

// const valid = () => {
//   if(errors.email){
//     valid="inputs form-control is-unvalid";
//   } else{
//     valid="inputs form-control is-valid";
//   };
// }

class Registrar extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      valid: "",
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Inicio");
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors +"ENTRA")
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push("/ingresar");
    // }
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };
/*
  valid() {
    if(this.state.errors.email){
      this.setState({ 
        valid: "inputs form-control is-unvalid"
      });
    } else{
      this.setState({
        valid: "inputs form-control is-valid"
      });
    };
  }*/
  
  render() {
    const { errors } = this.state;
    
  return (
  <div className="container">
      <div className="row container-logs">
        <div className="col s8 offset-s2 container-logss">
          <form noValidate onSubmit={this.onSubmit}>
          <div className="col s12 first-div">
            <div className="welcome">
                <h2>
                  !VAMOS A REGISTRARNOS! 
                </h2>
                <p>
                  ! Ya estas a unos pocos pasos de ingresar ¡ <br/>
                  Luego de registrarte aqui con tu nombre, correo electronico y contraseña, podrás loguearte cuando quieras para poder ingresar a todo y empezar 
                  con la diversión para escoger sabiamente tu proximo destino. <br/>! Desde DTLM esperamos tengas una buena experiencia con nosotros ¡
                </p>
                <hr/>
                <img className="imgsu" src={signupimg}/>
                <h4>
                  <b>Registrese</b> a continuación :
                </h4>
              </div>
          </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className="inputs form-control"
                // className={classnames("", {
                //   invalid: errors.name,
                // })}
                placeholder="Nombre"
              />
              <span className="text-danger invalid">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
                className = "inputs form-control"
                // className={classnames("", {
                //   invalid: errors.email,
                // })}
                // className = {this.state.valid}
              />
              <span className="text-danger invalid">{errors.email}</span>
            </div>
            <div className="input-field s12">
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className="inputs form-control"
                // className={classnames("", {
                //   invalid: errors.password,
                // })}
                placeholder="Contraseña"
              />
              <span className="text-danger invalid">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className="inputs form-control"
                // className={classnames("", {
                //   invalid: errors.password2,
                // })}
                placeholder="Confirmar Contraseña"
              />
              <span className="text-danger invalid">{errors.password2}</span>
            </div>
            <div>
              <p className="text-secondary change-option">
                ¿Ya tiene una cuenta?, puedes ingresar en esta pestaña →  <Link to="/ingresar" className="another-option">Ingresar</Link>
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
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 btn-registro"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
}

Registrar.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Registrar));

