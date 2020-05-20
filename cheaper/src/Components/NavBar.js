import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/NewProviderFormCreate">Formulario proveedor Nuevo</Link>
      <Link to="/FormClient">Formulario Cliente</Link>
    </Router>
   
  </nav>
)

export default NavBar;
