import React from 'react';
import {
  Link
} from 'react-router-dom';

const NavBar = () => (
  <nav>
   
      <Link to="/">Home</Link>
      <Link to="/IngresoSatisfactorio">Home de Ingreso</Link>
      <Link to="/NewProviderFormCreate">Formulario proveedor Nuevo</Link>
      <Link to="/FormClient">Formulario Cliente</Link>
    
   
  </nav>
)

export default NavBar;
