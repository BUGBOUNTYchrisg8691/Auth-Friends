import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { useState } from "react";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";

import PrivateRoute from "./components/PrivateRoute";

import { axiosWithAuth } from "./utils/axiosWithAuth";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <ul>
          {!isLoggedIn ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : null}
          <li>
            <NavLink to="#" onClick={logout}>
              Logout
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink to="/friends">FriendsList</NavLink>
            </li>
          ) : null}
        </ul>

        <Switch>
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route
            path="/login"
            render={(props) => {
              return <LoginForm {...props} setIsLoggedIn={setIsLoggedIn} />;
            }}
          />
          {/* <Route  component={Login} /> */}
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
