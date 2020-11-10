import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import NewFriendForm from "./components/NewFriendForm";

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friend-list">Friend List</Link>
        </li>
        <li>
          <Link onClick={() => setIsEditing(!isEditing)}>Add Friend</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute path="/friend-list">
          <FriendList isEditing={isEditing} />
        </PrivateRoute>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
