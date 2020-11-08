import './App.css';

import { Switch, Route, Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friend-list">Friend List</Link>
        </li>
      </ul>
      
      <Switch>
        <PrivateRoute path="/friend-list">
          <FriendList />
        </PrivateRoute>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
