import './App.css';

import { Switch, Route, Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      <Link to="/friend-list">Friend List</Link>
      
      <Switch>
        <Route path="/friend-list">
          <FriendList />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
