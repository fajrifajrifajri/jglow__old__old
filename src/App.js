// Import React & Required libs
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Components
import Login from './components/login';
import Dashboard from './components/Dashboard/dashboard';
import Konsultasi from './components/Dashboard/konsultasi';
import BuatKonsultasi from './components/Dashboard/Konsultasi/buatKonsultasi';
import Order from './components/Dashboard/order';
import BuatOrder from './components/Dashboard/Order/buatOrder';

// Routing
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/beranda">
          <Dashboard />
        </Route>
        <Route exact path="/konsultasi">
          <Konsultasi />
        </Route>
        <Route path="/konsultasi/buat-konsultasi">
          <BuatKonsultasi />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route path="/order/buat-order">
          <BuatOrder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
