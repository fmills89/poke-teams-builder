import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;
