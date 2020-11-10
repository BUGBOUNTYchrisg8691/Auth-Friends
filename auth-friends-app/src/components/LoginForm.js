import React, { Component } from "react";

import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
};

export default class LoginForm extends Component {
  state = {
    formValues: initialFormValues,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      },
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.formValues)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
        this.props.setIsLoggedIn(true);
      });
    this.setState({
      formValues: initialFormValues,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.formValues.username}
          onChange={this.handleOnChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={this.state.formValues.password}
          onChange={this.handleOnChange}
        />
        <button>Login</button>
      </form>
    );
  }
}
