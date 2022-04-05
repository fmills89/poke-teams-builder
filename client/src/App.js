import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignIn} />

          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;
