import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
  username: '',
  password: ''
}

export default function LoginForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const hist = useHistory()

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', formValues)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        hist.push('/friend-list')
      })
      .catch((err) => {
        console.log(err)
      })
    setFormValues(initialFormValues)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formValues.username}
        onChange={handleOnChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleOnChange}
      />
      <button>Login</button>
    </form>
  )
}
