import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/NewProviderFormCreate">Formulario proveedor Nuevo</Link>
    <Link to="/FormClient">Formulario Cliente</Link>
  </nav>
)

export default NavBar;
