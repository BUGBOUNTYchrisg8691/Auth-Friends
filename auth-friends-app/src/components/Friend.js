import React from "react";

export default function Friend({ friend }) {
  return (
    <div className="friend-card">
      <h3>{friend.name}</h3>
      <ul>
        <li>{friend.age}</li>
        <li>{friend.email}</li>
      </ul>
    </div>
  );
}
