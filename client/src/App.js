import React, { Fragment } from 'react';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';

import './App.css';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <h1>App</h1>
  </Fragment>
);

export default App;
