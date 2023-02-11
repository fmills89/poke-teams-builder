import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
// import SignUp from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Teams from './components/Teams';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import UserTeam from './pages/UserTeam';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path='/signup' component={SignUp} /> */}
            {/* <Route exact path="/teams" component={Teams} /> */}
            <Route exact path="/singleteam" component={UserTeam} />
            <Route component={NoMatch} />
          </Switch>
        </>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
