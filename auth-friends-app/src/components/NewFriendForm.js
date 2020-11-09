import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
  name: '',
  age: '',
  email: '',
}

export default function NewFriendForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      ...formValues,
      id: uuid()
    }
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then((res) => {
        console.log('Post Successful ==> ', res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
  )
}
