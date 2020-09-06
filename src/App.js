import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch'
import Comment from './components/Comment/Comment';

function App() {



  return (

    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/post/:id">
          <Comment></Comment>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
