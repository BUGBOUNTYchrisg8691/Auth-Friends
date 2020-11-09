import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import NewFriendForm from './NewFriendForm';

export default function FriendList() {
  const [friends, setFriends] = useState([])
  const [error, setError] = useState('')

  const fetchFriends = () => {
    return axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }

  useEffect(() => {
    fetchFriends()
      .then((res) => {
        setFriends(res.data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <NewFriendForm />
      {error && <div>{error}</div>}
      {friends && friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <ul>
            <li key={friend.email}>{friend.email}</li>
            <li key={friend.age}>{friend.age}</li>
          </ul>
        </div>
      ))} 
    </div>
  )
}
