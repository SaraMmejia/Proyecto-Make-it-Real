import React from 'react';
import './App.css';
import ClientForm from "./components/formClient";
import ProviderForm from "./components/newProviderForm";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import IngresoSatisfactorio from "./pages/pgHome.js";
import Registry from "./components/Registry.js"
import Login from "./components/Login" 
import "./components/formClient.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />      
		    <Switch>
          <Route exact path="/" component={Registry} />
          <Route exact path="/IngresoSatisfactorio" component={IngresoSatisfactorio} />
          <Route exact path="/NewProviderFormCreate" component={ProviderForm} />

          <Route exact path="/Login" component={Login} />

          <Route exact path="/FormClient" component={ClientForm} />
          <Route exact from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;