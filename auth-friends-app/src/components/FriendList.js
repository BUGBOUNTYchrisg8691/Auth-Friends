import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

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
      {error && <div>{error}</div>}
      {friends && friends.map(friend => (
        <div>
          <h2>{friend.name}</h2>
          <ul>
            <li>{friend.email}</li>
            <li>{friend.age}</li>
          </ul>
        </div>
      ))} 
    </div>
  )
}
