import React, { Component } from "react";
import axios from "axios";
import "./Crud.css";
//import { Link } from "react-router-dom";

export default class CreateUser extends Component {
  state = {
    username: "",
    users: [],
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data,
    });
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  deleteUser = async (userId) => {
    const response = window.confirm("are you sure you want to delete it?");
    if (response) {
      await axios.delete("http://localhost:4000/api/users/" + userId);
      this.getUsers();
    }
  };

  render() {
    return (
      <div className="row container-p">
        <div className="col-md-4">
          <div className="card card-body">
            <h4 className="title">A continuación Guarde su nombre para registrarlo como colaborador y asi poder agregar sus opiniones :D</h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="form-control for-type"
                  value={this.state.username}
                  type="text"
                  maxlength="30"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="div-save-btn">
                <button type="submit" className="btn btn-primary" /*onSubmit={<Link to="/places"/>}*/>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li class="list-group-item list-group-item-dark">
              <h4>Usuarios registrados</h4>
            </li>

            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
