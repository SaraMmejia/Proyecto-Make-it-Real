import React from 'react';
import './App.css';
import ClientFormCreate from "./pages/ClientFormCreate.js";
import ProviderFormCreate from "./pages/ProviderFormCreate.js";
// import Home from "./components/Home.js";
// import IngresoSatisfactorio from "./pages/pgHome.js";
import Registry from "./components/Registry.js"
import LoginSignin from "./pages/LoginSignin.js"
// import "./components/clientForm.css"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Registry} />
          <Route exact path="/providers/create" component={ProviderFormCreate} />
          <Route exact path="/login" component={LoginSignin} />
          <Route exact path="/clients/create" component={ClientFormCreate} />
          <Route exact from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
