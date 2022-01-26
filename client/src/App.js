import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {

  return (
    <div className="App">
      <p>
        <Link to="/products"> Show All Products </Link>
      </p>
      <Switch>
        <Route exact path="/products/update/:id">
          <Update />
        </Route>
        <Route exact path="/products/:id">
          <Detail />
        </Route>
        <Route exact path="/products/">
          <Main />
        </Route>
        <Route path="/">
          <Redirect to="/products"></Redirect>
        </Route>
      </Switch>

    </div>

  );
}

export default App;


