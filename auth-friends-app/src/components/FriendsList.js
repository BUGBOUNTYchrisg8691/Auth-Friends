import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friend from "./Friend";
import NewFriendForm from "./NewFriendForm";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NewFriendForm setFriends={setFriends} />
      <div className="friends-list">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </>
  );
}
