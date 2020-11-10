import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export default function NewFriendForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      ...formValues,
      id: uuid(),
    };
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((res) => {
        console.log("Post Successful ==> ", res);
        props.handleUpdateFriends(res.data);
        push("/friend-list");
      })
      .catch((err) => {
        console.log(err);
      });
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleOnChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        name="age"
        value={formValues.age}
        onChange={handleOnChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleOnChange}
      />
      <button>Add Friend</button>
    </form>
  );
}
