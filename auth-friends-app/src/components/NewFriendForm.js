import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export default class NewFriendForm extends Component {
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
    axiosWithAuth()
      .post("/api/friends", this.state.formValues)
      .then((res) => {
        console.log("Post Success ==>> ", res);
        this.props.setFriends(res.data);
      })
      .catch((err) => {
        console.log("Post Failure ==>> ", err);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          value={this.state.formValues.name}
          onChange={this.handleOnChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="age"
          name="age"
          value={this.state.formValues.age}
          onChange={this.handleOnChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={this.state.formValues.email}
          onChange={this.handleOnChange}
        />
        <button>Add New Friend</button>
      </form>
    );
  }
}
